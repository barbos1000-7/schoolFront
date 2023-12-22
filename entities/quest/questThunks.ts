import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import {answersType, quest} from './questModel';
import {getQuestById, getQuests, postAnswerPost} from "@/api/ApiCalls";
import {getErrorMessage} from "@/api";

export type BackendError = {
    message: string
}

export const getQuestsThunk = createAsyncThunk<
    { data: quest[], count: any },
    void,
    { rejectValue: string }
>('quests/getQuestsThunk', async (_, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            content: { data: quest[], count: any };
        }> = await getQuests();

        return res.data.content;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});

export const getQuestByIdThunk = createAsyncThunk<
    { quest: quest | null, answers: answersType },
    { id: number, lim: number },
    { rejectValue: string }
>('quests/getQuestByIdThunk', async (o, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            content: { quest: quest, answers: answersType };
        }> = await getQuestById(o.id, o.lim);
        return res.data.content;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});

export const postQuestAnswer = createAsyncThunk<
    { message: string },
    {
        content: string,
        time: string,
        quest_id: number | null
    },
    { rejectValue: string }
>('quests/postQuestAnswer', async (o, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{ content: { message: string } }> = await postAnswerPost(o);
        return res.data.content;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
