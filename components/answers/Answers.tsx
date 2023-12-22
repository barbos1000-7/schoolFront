import React, {useEffect} from 'react';
import s from './index.module.scss'
import Answer from "@/components/answer/Answer";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import Button from "@/components/UI/button/Button";
import {change, increment} from "@/entities/quest/questSLice";
import {getQuestByIdThunk} from "@/entities/quest/questThunks";
import SvgSelector from "@/helps/svgSelector";
// {answers}:{answers: { data: answer[], count: number } | undefined}
const Answers = () => {
    const answers = useAppSelector(state => state.quests.answers)
    const dispatch = useAppDispatch()
    const load = useAppSelector(state => state.quests.loadAnswers)
    const click = useAppSelector(state => state.quests.counter)
    const ost = useAppSelector(state => state.quests.ost)
    let text = undefined
    useEffect(() => {
        const id = +window.location.pathname.replace('/quest/', '');
        if (click != 1) {
            dispatch(getQuestByIdThunk({
                id,
                lim: click
            }));
        }
        if (answers?.count) {
            let a = answers?.count % 10
            answers?.count >= click * 10 + 10 ? dispatch(change(10)) : dispatch(change(a))
        }
    }, [click, answers?.count])

    if (answers) {
        const dlina = answers ? answers.count % 10 : 0
        if (dlina == 1) {
            text = 'ответ'
        } else if (dlina < 5 && dlina != 1) {
            text = 'ответа'
        } else text = 'ответов'
    }
    return (
        <div className={s.root}>
            <div className={s.text}>{answers?.count} {text}</div>
            <div className={s.answs}>
                {answers ? answers.data.map(a => <Answer key={a.id} answer={a}/>) : 'Ответов пока нет'}
                {load && <SvgSelector name={'load'}/>}
            </div>
            {answers && !load &&
            answers.data.length != answers.count ?
                <Button onClick={() => dispatch(increment())}>Загрузить {ost}</Button> : <div></div>}
        </div>
    );
};

export default Answers;