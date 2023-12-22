import React, {useEffect} from 'react';
import s from './index.module.scss'


import SelectSubject from "@/components/selectSubject/SelectSubject";
import {changeSubject, setAskLoad, setPostQuest} from "@/entities/ask/askSlice";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@/components/UI/button/Button";
import {postQuestThunk} from "@/entities/ask/AskThunks";
import Link from "next/link";
import SvgSelector from "@/helps/svgSelector";
import {useRouter} from "next/router";
import {setLoadQuestsTrue} from "@/entities/quest/questSLice";

const schema = yup.object().shape({
    title: yup.string().required("Введите Заголовок").max(32, 'не более 32 символов'),
    body: yup.string().required("Введите описание"),
});
const Ask = () => {
    const dispatch = useAppDispatch()
    const {push} = useRouter()
    const subj = useAppSelector(state => state.ask.subject)
    const postQuest = useAppSelector(state => state.ask.postQuest)
    const auth = useAppSelector(state => state.user.isAuth)
    useEffect(() => {
        postQuest ? push('/') : undefined
        return () => {
            dispatch(setPostQuest())
            dispatch(setLoadQuestsTrue())
        }
    }, [postQuest])
    useEffect(() => {
        return () => {
            dispatch(setAskLoad())
        }
    }, [])
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
    })
    const load = useAppSelector(state => state.ask.loadAsk)
    const Submi = (data: any) => {
        dispatch(postQuestThunk({...data, subject: subj, time: Date()}))
    }
    const AuthLoad = useAppSelector(state => state.user.AuthLoad)
    return (
        <>
            {AuthLoad ? <><SvgSelector name={'load'}/></> : !auth ? <>
                    <div className={s.title}>Чтобы задать вопрос необходимо быть авторизованным :(</div>
                    <Link className={s.link} href='/login'>Перейти в авторизацию</Link>
                </> :
                load ? <><SvgSelector name={'load'}/></> : <form className={s.root} onSubmit={handleSubmit(Submi)}>
                    <div>
                        <input className={s.input} {...register('title', {})}
                               placeholder={'Введите title'}/>
                        {errors['title'] && <span>{errors['title']?.message}</span>}
                    </div>
                    <div className={s.select}>
                        <span className={s.subj}> Выберите предмет</span>
                        <SelectSubject onChange={changeSubject} value={subj}/>
                    </div>
                    <div>
                    <textarea {...register('body', {})}
                              placeholder={'Введите body'} className={s.textaera}/>
                        {errors['body'] && <span>{errors['body']?.message}</span>}
                    </div>
                    <Button>Кликккккккккк</Button>
                </form>

            }
        </>
    );
};

export default Ask;