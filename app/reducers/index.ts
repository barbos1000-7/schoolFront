import {combineReducers} from '@reduxjs/toolkit';
import questsReducer from '../../entities/quest/questSLice'
import userReducer from '../../entities/user/userSlice'
import mailReducer from '../../entities/mail/mailSlice'
import askSlice from "@/entities/ask/askSlice";
import profileSlice from "@/entities/profile/profileSlice";


const rootReducer = combineReducers({
    quests: questsReducer,
    user: userReducer,
    mail: mailReducer,
    ask: askSlice,
    profile: profileSlice
});

export default rootReducer;
