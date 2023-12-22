import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError, AxiosResponse} from "axios";
import {getUserInfo, postAuth, postAva, postRegistr} from "@/api/ApiCalls";
import {getErrorMessage} from "@/api";
import {BackendError} from "@/entities/quest/questThunks";
import {LoginData, Token, User} from "@/entities/user/userModel";
import {saveToken} from "@/api/Cookie";
import {mailIsTh} from "@/entities/mail/mailSlice";

export const postLoginThunk = createAsyncThunk<
    { message: string },
    LoginData,
    { rejectValue: string }
>('user/postLoginThunk', async (LoginData, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            content: { message: string };
        }> = await postRegistr(LoginData);
        return res.data.content;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});


export const getUserByTokenThunk = createAsyncThunk<
    User,
    void,
    { rejectValue: string }
>('user/getUserByTokenThunk', async (_, {rejectWithValue, dispatch}) => {
    try {
        const res: AxiosResponse = await getUserInfo();
        res.data.user.mailAuth ? await dispatch(mailIsTh()) : undefined
        return res.data.user;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});

export const postAuthThunk = createAsyncThunk<
    Token,
    LoginData,
    { rejectValue: string }
>('user/postAuthThunk', async (LoginData, {rejectWithValue, dispatch}) => {
    try {
        const res: AxiosResponse = await postAuth(LoginData);
        saveToken(res.data.token)
        await dispatch(getUserByTokenThunk())
        return res.data;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
export const postAvaThunk = createAsyncThunk<
    { message: string },
    FileList | null,
    { rejectValue: string }
>('user/postAvaThunk', async (files, {rejectWithValue, dispatch}) => {
    try {
        const res: AxiosResponse = await postAva(files ? files[0] : null);
        return res.data;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});