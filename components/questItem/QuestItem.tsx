import React, {FC} from 'react';
import s from './QuestItem.module.scss'
import Link from "next/link";
import {quest} from "@/entities/quest/questModel";
import {SubjectById} from "@/helps/subjectById";
import {TimeOfDate} from "@/helps/timeOfDate";
import {useAppSelector} from "@/helps/hooks/redux";
import {createApiCall} from "@/api/ApiCalls";

interface props {
    item: quest,
}

const QuestItem: FC<props> = ({item}) => {
    const countAnswer = useAppSelector(state => state.quests.quests.count)
    const answ = countAnswer[item.id]
    let text = undefined
    if (answ) {
        const dlina = answ % 10
        if (dlina == 1) {
            text = 'ответ'
        } else if (dlina < 5 && dlina != 1) {
            text = 'ответа'
        } else text = 'ответов'
    }
    return (
        <div className={s.root}>
            <div className={s.left}>
                <Link href={`/user/${item.user_id}`}>
                    <img className={s.img}
                         src={createApiCall(`/${item.img}`)}
                         alt={'sosy'}
                    /></Link>
            </div>
            <div className={s.right}>
                <Link href={`/quest/${item.id}`} className={s.title}><span>{item.title}</span></Link>
                <div className={s.info}>
                    <Link className={s.user} href={`/user/${item.user_id}`}>{item.nickname}</Link>,
                    <div className={s.time}> {TimeOfDate(item.time)}</div>,
                    <div className={s.sbj}><SubjectById id={item.subject}/></div>,
                    <Link href={`/quest/${item.id}`} className={s.answ}>{answ ? answ : <></>} {text ? text : <>ответов
                        пока нет</>}</Link>
                </div>
            </div>
        </div>
    );
};

export default QuestItem;