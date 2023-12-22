import React, {useEffect} from 'react';
import QuestItem from "@/components/questItem/QuestItem";
import s from './index.module.scss'
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import {getQuestsThunk} from "@/entities/quest/questThunks";
import LoadQuestsList from "../../UI/loaders/LoadQuestsList";


const QuestsPage = () => {
    const dispatch = useAppDispatch();
    const load = useAppSelector(state => state.quests.loadQuests)
    const quests = useAppSelector(state => state.quests.quests.data);
    useEffect(() => {
            dispatch(getQuestsThunk());
        },
        []);

    return (
        <div className={s.quests}>
            {
                !load ? quests.map(item => <QuestItem key={item.id} item={item}/>) : <LoadQuestsList/>}
        </div>
    );
};

export default QuestsPage;