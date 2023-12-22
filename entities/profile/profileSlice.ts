import {createSlice} from '@reduxjs/toolkit';
import {Profile} from "@/entities/profile/profileModel";
import {getUserByIdThunk} from "@/entities/profile/profileThunks";
import {toast} from "react-toastify";


type initialState = {
    profile: null | Profile
};

const initialState: initialState = {
    profile: null
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        returnProfile: state => {
            state.profile = null
        }
    },
    extraReducers: builder => {
        builder.addCase(getUserByIdThunk.fulfilled, (state, action) => {
            state.profile = action.payload.data
        })
        builder.addCase(getUserByIdThunk.rejected, (state, action) => {
            toast.error(action.payload)
        })
    }
})

export default profileSlice.reducer;
export const {returnProfile} = profileSlice.actions;

