import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError, AxiosResponse} from "axios";
import {delMail, emailFree, getCode, postCode} from "@/api/ApiCalls";
import {BackendError} from "@/entities/quest/questThunks";
import {getErrorMessage} from "@/api";
import {getUserByTokenThunk} from "@/entities/user/userThunks";

export const mailFreeThunk = createAsyncThunk<
    { message: string },
    { mail: string },
    { rejectValue: string }
>('mail/mailFreeThunk', async (o, {rejectWithValue}) => {
    try {
        const res: AxiosResponse = await emailFree(o.mail);
        return res.data.message;
    } catch (e: unknown | AxiosError<BackendError>) {
        console.log(e)
        return rejectWithValue(getErrorMessage(e));
    }
});
export const getCodeThunk = createAsyncThunk<
    { message: string },
    { mail: string },
    { rejectValue: string }
>('mail/getCodeThunk', async (o, {rejectWithValue}) => {
    try {
        const res: AxiosResponse = await getCode(o.mail);
        return res.data.message;
    } catch (e: unknown | AxiosError<BackendError>) {
        console.log(e)
        return rejectWithValue(getErrorMessage(e));
    }
});
export const postCodeThunk = createAsyncThunk<
    { message: string },
    { code: number },
    { rejectValue: string }
>('mail/postCodeThunk', async (o, {rejectWithValue}) => {
    try {
        const res: AxiosResponse = await postCode(o.code);
        return res.data.message;
    } catch (e: unknown | AxiosError<BackendError>) {
        console.log(e)
        return rejectWithValue(getErrorMessage(e));
    }
});
export const delMailThunk = createAsyncThunk<
    { message: string },
    void,
    { rejectValue: string }
>('mail/delMailThunk', async (_, {rejectWithValue, dispatch}) => {
    try {
        const res: AxiosResponse = await delMail();
        await dispatch(getUserByTokenThunk())
        return res.data.message;
    } catch (e: unknown | AxiosError<BackendError>) {
        console.log(e)
        return rejectWithValue(getErrorMessage(e));
    }
});
