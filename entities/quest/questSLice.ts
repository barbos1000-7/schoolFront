import {answer, quest} from './questModel';
import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import {getQuestByIdThunk, getQuestsThunk, postQuestAnswer} from "@/entities/quest/questThunks";

type initialState = {
    quests: {
        data: quest[],
        count: any
    };
    currentQuest: quest | null;
    counter: number,
    answerText: string,
    ost: number,
    loadQuests: boolean,
    answers:
        {
            data: answer[],
            count: number
        } | null
    loadQuest: boolean,
    loadAnswers: boolean
};

const initialState: initialState = {
    quests: {
        data: [],
        count: null
    },
    currentQuest: null,
    counter: 1,
    answerText: '',
    ost: 0,
    answers: null,
    loadQuests: true,
    loadQuest: true,
    loadAnswers: false
};

const questsSlice = createSlice({
    name: 'quests',
    initialState,
    reducers: {
        resetQuest: state => {
            state.currentQuest = null;
            state.answers = null
        },
        increment: state => {
            state.counter += 1
        },
        nuller: state => {
            state.counter = 1
        },
        changeAnswerText: (state, action) => {
            state.answerText = action.payload
        },
        change: (state, action) => {
            state.ost = action.payload
        },
        setLoadQuestsTrue: state => {
            state.loadQuests = true
        }
    },
    extraReducers: builder => {
        builder.addCase(getQuestsThunk.fulfilled, (state, action) => {
            state.quests.data = action.payload.data;
            state.quests.count = action.payload.count
            state.loadQuests = false
        });
        builder.addCase(getQuestsThunk.pending, state => {
            state.loadQuests = true
        });
        builder.addCase(getQuestsThunk.rejected, (_, action) => {
            toast.error(action.payload);
            _.loadQuests = false
        });
        builder.addCase(getQuestByIdThunk.fulfilled, (state, action) => {
            if (action.payload.quest) {
                state.currentQuest = action.payload.quest;
            }
            state.answers = action.payload.answers
            state.loadQuest = false
            state.loadAnswers = false
        });
        builder.addCase(getQuestByIdThunk.pending, state => {
            if (state.currentQuest) {
                state.loadAnswers = true
            } else state.loadQuest = true
        })
        builder.addCase(getQuestByIdThunk.rejected, (_, action) => {
            toast.error(action.payload);
            _.loadQuest = false
        });
        builder.addCase(postQuestAnswer.fulfilled, (state, action) => {
            toast.success('Ваш ответ успешно отправлен!!')
            state.answerText = ''
        });
        builder.addCase(postQuestAnswer.pending, state => {

        });
        builder.addCase(postQuestAnswer.rejected, (_, action) => {
            toast.error(action.payload);
        });
    }
});

export default questsSlice.reducer;
export const {
    resetQuest, increment, setLoadQuestsTrue, changeAnswerText, nuller
    , change
} = questsSlice.actions;

