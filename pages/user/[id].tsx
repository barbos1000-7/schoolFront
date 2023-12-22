import React from 'react';
import UserPage from "@/components/screens/userPage/UserPage";
import {useAppDispatch} from "@/helps/hooks/redux";
import {getUserByIdThunk} from "@/entities/profile/profileThunks";
import {returnProfile} from "@/entities/profile/profileSlice";

const id = () => {
    const dispatch = useAppDispatch();
    const id = +window.location.pathname.replace('/user/', '');
    React.useEffect(() => {
        dispatch(getUserByIdThunk({id}))
        return () => {
            dispatch(returnProfile())
        }
    }, [])
    return (
        <div>
            <UserPage/>
        </div>
    );
};

export default id;