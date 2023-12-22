import {createSlice} from '@reduxjs/toolkit';
import {delMailThunk, getCodeThunk, mailFreeThunk, postCodeThunk} from "@/entities/mail/mailThunks";
import {toast} from "react-toastify";


type initialState = {
    mail: string,
    mailInd: string
    mailLoad: boolean
    code: string
    sendCode: boolean
    mailIs: boolean
    mailOpen: boolean
    arrow: boolean
};

const initialState: initialState = {
    mail: '',
    mailInd: '',
    mailLoad: true,
    code: '',
    sendCode: false,
    mailIs: false,
    mailOpen: false,
    arrow: false
};

const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        mailChange: (state, action) => {
            state.mail = action.payload
        },
        loadMailSet: (state) => {
            state.mailLoad = true
        },
        codeChange: (state, action) => {
            state.code = action.payload
        },
        mailIsTh: state => {
            state.mailIs = true
        },
        setSendCode: state => {
            state.sendCode = false
        },
        mailCloOpe: state => {
            state.mailOpen = !state.mailOpen
        },
        setArrow: (state, action) => {
            state.arrow = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(mailFreeThunk.fulfilled, (state, action) => {
            state.mailInd = 'true'
            state.mailLoad = false
        })
        builder.addCase(mailFreeThunk.pending, (state, action) => {
            state.mailLoad = true
        })
        builder.addCase(mailFreeThunk.rejected, (state, action) => {
            state.mailLoad = false
            toast.error(action.payload);
            state.mailInd = ''
        })
        builder.addCase(getCodeThunk.fulfilled, (state, action) => {
            state.sendCode = true
        })
        builder.addCase(getCodeThunk.pending, (state, action) => {

        })
        builder.addCase(getCodeThunk.rejected, (state, action) => {
            state.sendCode = false
        })
        builder.addCase(postCodeThunk.fulfilled, (state, action) => {
            state.mailIs = true
        })

        builder.addCase(postCodeThunk.pending, (state, action) => {

        })
        builder.addCase(postCodeThunk.rejected, (state, action) => {
            state.mailIs = false
            toast.error(action.payload);
        })
        builder.addCase(delMailThunk.fulfilled, (state, action) => {
            state.mailIs = false
        })

        builder.addCase(delMailThunk.pending, (state, action) => {

        })
    }
})

export default mailSlice.reducer;
export const {mailChange, setArrow, loadMailSet, mailCloOpe, setSendCode, codeChange, mailIsTh} = mailSlice.actions;

