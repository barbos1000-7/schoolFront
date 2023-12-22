import React from 'react';
import {answer} from "@/entities/quest/questModel";
import Link from "next/link";
import {TimeOfDate} from "@/helps/timeOfDate";
import s from './answer.module.scss'
import {createApiCall} from "@/api/ApiCalls";

const Answer = ({answer}: { answer: answer }) => {

    return (
        <div className={s.root}>
            <div className={s.left}>
                <Link className={s.user} href={`/user/${answer.user_id}`}>
                    <img className={s.img}
                         src={createApiCall(`/${answer.img}`)}
                         alt={'sosy'}
                    /></Link>
            </div>
            <div className={s.right}>
                <div className={s.top}>
                    <Link href={`/user/${answer.user_id}`} className={s.user}>{answer.nickname}</Link>
                    ,
                    <div className={s.time}> {TimeOfDate(answer.time)}</div>
                </div>
                <div className={s.content}>
                    {answer.content}
                </div>
            </div>
        </div>
    );
};

export default Answer;