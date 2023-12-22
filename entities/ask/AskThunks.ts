import {postQuest} from "@/api/ApiCalls";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError, AxiosResponse} from "axios";
import {getErrorMessage} from "@/api";
import {BackendError} from "@/entities/quest/questThunks";
import {QuestAsk} from "@/entities/ask/AskModel";


export const postQuestThunk = createAsyncThunk<
    { message: string },
    QuestAsk,
    { rejectValue: string }
>('quests/postQuestThunk', async (data, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{ content: { message: string } }> = await postQuest(data);
        return res.data.content;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
