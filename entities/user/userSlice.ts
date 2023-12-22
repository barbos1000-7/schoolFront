import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import {LoginData, User} from "@/entities/user/userModel";
import {getUserByTokenThunk, postAuthThunk, postLoginThunk} from "@/entities/user/userThunks";
import {deleteToken} from "@/api/Cookie";

type initialState = {
    user: User | null
    loginData: LoginData
    isReg: boolean
    isAuth: boolean
    AuthLoad: boolean
    isLogin: boolean
    firstLoad: boolean
};

const initialState: initialState = {
    user: null,
    loginData: {
        nickname: '',
        password: ''
    },
    isReg: false,
    isAuth: false,
    AuthLoad: true,
    isLogin: false,
    firstLoad: true
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetIsReg: state => {
            state.isReg = false;
        },
        AuthOut: state => {
            state.isAuth = false
            state.user = null
            state.AuthLoad = true
            deleteToken()
        },
        setLoad: state => {
            state.AuthLoad = false
        },
        setLoadTrue: state => {
            state.AuthLoad = true
        }
        ,
        setLog: state => {
            state.isLogin = false
        },
        setFirstLoad: state => {
            state.firstLoad = !state.firstLoad
        }
    },
    extraReducers: builder => {
        builder.addCase(postLoginThunk.fulfilled, (state, action) => {
            toast.success('Вы успешно зарегестрировались!!')
            state.isReg = true
            state.AuthLoad = false
        });
        builder.addCase(postLoginThunk.pending, state => {
            state.AuthLoad = true
        })
        builder.addCase(postLoginThunk.rejected, (_, action) => {
            toast.error(action.payload);
            _.AuthLoad = false
        });
        builder.addCase(postAuthThunk.fulfilled, (state, action) => {
            toast.success(`Добро пожаловать!!`)
            state.isLogin = true
            state.AuthLoad = false
        });
        builder.addCase(postAuthThunk.pending, state => {
            state.AuthLoad = true

        })
        builder.addCase(postAuthThunk.rejected, (_, action) => {
            toast.error(action.payload);
            _.AuthLoad = false

        });
        builder.addCase(getUserByTokenThunk.fulfilled, (state, action) => {
            state.user = action.payload
            state.AuthLoad = false
            state.isAuth = true
        });
        builder.addCase(getUserByTokenThunk.pending, state => {
            state.AuthLoad = true
        })
        builder.addCase(getUserByTokenThunk.rejected, (_, action) => {
            toast.error(action.payload);
            _.AuthLoad = false

        });
    }
});

export default userSlice.reducer;
export const {resetIsReg, AuthOut, setFirstLoad, setLoad, setLoadTrue, setLog} = userSlice.actions;

