import React from 'react';
import Input from "@/components/UI/input/Input";
import {changeAnswerText} from "@/entities/quest/questSLice";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import Button from "@/components/UI/button/Button";
import {getQuestByIdThunk, postQuestAnswer} from "@/entities/quest/questThunks";
import s from "@/components/ask/index.module.scss";
import Link from "next/link";

const AnswerPrint = () => {
    const dispatch = useAppDispatch()
    const answerText = useAppSelector(state => state.quests.answerText)
    const click = useAppSelector(state => state.quests.counter)
    const id = +window.location.pathname.replace('/quest/', '');
    const add = async () => {
        await dispatch(postQuestAnswer({
            content: answerText,
            time: Date(),
            quest_id: id ? id : null
        }))
        dispatch(getQuestByIdThunk({
            id,
            lim: click
        }));
    }
    const enterHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            add().then()
        }
    }
    const user = useAppSelector(state => state.user.user)

    return (
        <>
            {user ? <>
                <Input onKeyUp={enterHandler} placeholder={'Введите ответ'} text={answerText}
                       setText={changeAnswerText}/>
                <Button onClick={() => add()}> Отправить</Button>
            </> : <>
                <div className={s.title}>Чтобы задать вопрос необходимо быть авторизованным :(</div>
                <Link className={s.link} href='/login'>Перейти в авторизацию</Link></>}
        </>);
};

export default AnswerPrint;