import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import {AuthOut} from "@/entities/user/userSlice";
import s from './index.module.scss'
import {mailCloOpe} from "@/entities/mail/mailSlice";
import * as yup from "yup";
import SvgSelector from "@/helps/svgSelector";
import Link from "next/link";
import {useRouter} from "next/router";
import Mail from "@/components/mail/Mail";
import PersonalInfo from "@/components/personalInfo/PesonalInfo";


const schema = yup.object().shape({
    mail: yup.string().required("Введите почту").email("Введите корректную почту"),
});

const PersonalArea = () => {
    const {push} = useRouter()
    const nick = useAppSelector(state => state.user.user?.nickname)
    const isAuth = useAppSelector(state => state.user.isAuth)
    const AuthLoad = useAppSelector(state => state.user.AuthLoad)
    const dispatch = useAppDispatch()
    const MailOpen = useAppSelector(state => state.mail.mailOpen)
    useEffect(() => {
        !isAuth && !AuthLoad ? push('/login') : undefined
    }, [AuthLoad])
    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(setLoad())
    //     }, 500)
    // }, [])
    return (
        <div className={s.root}>
            {AuthLoad ? <><SvgSelector name={'load'}/> </> : <>
                <div className={s.title}>Здраствуйте, {nick}</div>
                <span onClick={() => {
                    dispatch(mailCloOpe())
                }} style={{cursor: 'pointer'}}> Подтверждение почты </span>
                {MailOpen ? <Mail/> : ''}
                <PersonalInfo/>

                <Link href='/login' onClick={() => {
                    dispatch(AuthOut())
                }} style={{cursor: "pointer", textDecorationLine: 'none', color: 'black'}}>Выйти из аккаунта</Link> </>}
        </div>
    );
};

export default PersonalArea;