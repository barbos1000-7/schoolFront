import React, {useEffect} from 'react';
import s from './index.module.scss'
import Button from "@/components/UI/button/Button";
import SvgSelector from "@/helps/svgSelector";
import {TimeOfDate} from "@/helps/timeOfDate";
import {useClipboard} from "use-clipboard-copy";
import Link from "next/link";
import Answers from "@/components/answers/Answers";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import AnswerPrint from "@/components/answerPrint/AnswerPrint";
import {getQuestByIdThunk} from "@/entities/quest/questThunks";
import LoadQuest from "@/components/UI/loaders/loadQuest/LoadQuest";
import {createApiCall} from "@/api/ApiCalls";


const Quest = () => {
    const load = useAppSelector(state => state.quests.loadQuest)
    const q = useAppSelector(state => state.quests.currentQuest);
    const clipboard = useClipboard();
    const handleClick = React.useCallback(
        () => {
            const url = 'http://localhost:3001' + window.location.pathname
            clipboard.copy(url); // programmatically copying a value
            toast.success('🦄 Вы скопировали ссылку!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        },
        [clipboard.copy]
    );
    const dispatch = useAppDispatch();
    useEffect(() => {
        const id = +window.location.pathname.replace('/quest/', '');
        dispatch(getQuestByIdThunk({
            id,
            lim: 1
        }));
    }, [])
    return (
        <>
            {load ?
                <LoadQuest/> : q && <div className={s.root}>
                <div className={s.quest}>
                    <div className={s.left}>
                        <Link href={`/user/${q.user_id}`}>
                            <img className={s.img}
                                 src={createApiCall(`/${q.img}`)}
                                 alt={'sosy'}
                            /></Link>
                    </div>
                    <div className={s.right}>
                        <div className={s.top}>
                            <div className={s.info}>
                                <Link href={`/user/${q.user_id}`} className={s.user}>{q.nickname}</Link>
                                ,
                                <div className={s.time}> {TimeOfDate(q.time)}</div>
                            </div>
                            <div className={s.title}>{q.title}</div>
                        </div>
                        <div className={s.content}>
                            {q.body}
                        </div>
                        <div className={s.bottom}>
                            <div className={s.answLike}>
                                <div className={s.answ}><Button style={{backgroundColor: '#c1fefe'}}><SvgSelector
                                    name={'sms'}/> <span
                                    className={s.answtext}>Ответить</span></Button></div>
                                <div className={s.svg}><Button><SvgSelector name={'like'}/></Button></div>
                            </div>
                            <div className={s.end}>
                                <div className={s.fvrt}>
                                    <div className={s.svg}><Button style={{backgroundColor: '#c1fefe'}}><SvgSelector
                                        name={'fvr'}/></Button></div>
                                    <div className={s.svg} onClick={handleClick}><Button><SvgSelector
                                        name={'repost'}/></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Answers/>
                <div className={s.answer}>
                    <AnswerPrint/>
                </div>
            </div>}
        </>);
};

export default Quest;