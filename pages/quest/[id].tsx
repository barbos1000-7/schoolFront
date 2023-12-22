import React from 'react';
import QuestPage from "@/components/screens/questPage/QuestPage";
import {useAppDispatch} from "@/helps/hooks/redux";
import {nuller, resetQuest} from "@/entities/quest/questSLice";

const id = () => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        return () => {
            dispatch(resetQuest());
            dispatch(nuller())
        }
    }, [])

    return (
        <div>
            <QuestPage/>
        </div>
    );
};

export default id;