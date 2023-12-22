import React, {useEffect} from 'react';
import RegisForm from "@/components/RegisForm/RegisForm";
import s from './index.module.scss'
import SvgSelector from "@/helps/svgSelector";
import Link from "next/link";
import {useAppSelector} from "@/helps/hooks/redux";
import {useRouter} from "next/router";


const RegisterPage = () => {
    const {push} = useRouter();
    const isAuth = useAppSelector(state => state.user.isAuth)
    const AuthLoad = useAppSelector(state => state.user.AuthLoad)
    useEffect(() => {
        isAuth ? push('/login') : undefined
    }, [isAuth])
    return (
        <div className={s.root}>
            {!AuthLoad && !isAuth ? <>
                <div className={s.title}>
                    <Link href={'/login'} className={s.left}><SvgSelector name={'arrowLeft'}/></Link>Регистрация
                </div>
                <RegisForm/>
            </> : <SvgSelector name={'load'}/>}
        </div>
    );
};

export default RegisterPage;