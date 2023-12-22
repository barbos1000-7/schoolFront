import {createSlice} from '@reduxjs/toolkit';
import {postQuestThunk} from "@/entities/ask/AskThunks";
import {toast} from "react-toastify";

type initialState = {
    subject: number
    postQuest: boolean
    loadAsk: boolean
};

const initialState: initialState = {
    subject: 1,
    postQuest: false,
    loadAsk: false
};

const askSlice = createSlice({
    name: 'ask',
    initialState,
    reducers: {
        changeSubject: (state, action) => {
            state.subject = action.payload
        },
        setPostQuest: state => {
            state.postQuest = false
        },
        setAskLoad: state => {
            state.loadAsk = false
        }
    },
    extraReducers: builder => {
        builder.addCase(postQuestThunk.fulfilled, state => {
            state.postQuest = true
        });
        builder.addCase(postQuestThunk.rejected, (state, action) => {
            state.loadAsk = false
            toast.error(action.payload)
        });
        builder.addCase(postQuestThunk.pending, state => {
            state.loadAsk = true
        });
    },
})

export default askSlice.reducer;
export const {changeSubject, setAskLoad, setPostQuest} = askSlice.actions;

