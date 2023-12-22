import React, {useEffect} from 'react';
import s from './index.module.scss'
import AuthForm from "@/components/AuthForm/AuthForm";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import {setLoad, setLoadTrue, setLog} from "@/entities/user/userSlice";
import Link from "next/link";
import SvgSelector from "@/helps/svgSelector";
import {useRouter} from "next/router";
import {setLoadQuestsTrue} from "@/entities/quest/questSLice";


const AuthPage = () => {
    const {push} = useRouter()
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.user.isAuth)
    const nick = useAppSelector(state => state.user.user)
    const AuthLoad = useAppSelector(state => state.user.AuthLoad)
    const isLogin = useAppSelector(state => state.user.isLogin)
    useEffect(() => {
        if (isLogin) {
            dispatch(setLoadQuestsTrue())
            push('/').then()
            return () => {
                dispatch(setLog())
            }
        }
    }, [isLogin])
    useEffect(() => {
        dispatch(setLoadTrue())
        isAuth && !isLogin ? push('/personal') : dispatch(setLoad())
    }, [])
    // useEffect(()=> {
    //     dispatch(setLoad())
    // }, [nick])

    return (
        <div className={s.root}>
            {AuthLoad ? <><SvgSelector name={'load'}/> </> : !isAuth ?
                <>
                    <div className={s.title}>
                        <span className={s.log}> Вход</span> / <Link className={s.reg}
                                                                     href={'/register'}>Регистрация</Link>
                    </div>
                    <AuthForm/>
                </> : <></>}
        </div>
    );
};

export default AuthPage;