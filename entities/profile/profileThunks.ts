import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError, AxiosResponse} from "axios";
import {getUserBiId} from "@/api/ApiCalls";
import {getErrorMessage} from "@/api";
import {BackendError} from "@/entities/quest/questThunks";
import {Profile} from "@/entities/profile/profileModel";

export const getUserByIdThunk = createAsyncThunk<
    { data: Profile },
    { id: number },
    { rejectValue: string }
>('quests/getUserByIdThunk', async (o, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            data: Profile
        }> = await getUserBiId(o.id);
        console.log(res.data, 123)
        return res.data;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
