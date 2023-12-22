import React from 'react';
import Link from "next/link";
import SvgSelector from "@/helps/svgSelector";
import s from './index.module.scss'
import {useAppSelector} from "@/helps/hooks/redux";

const SmallMenu = () => {
    const isAuth = useAppSelector(state => state.user.isAuth)
    return (
        <div className={s.root}>
            <div className={s.left}>
                <Link className={s.logo} href='/'>
                    <SvgSelector name={'logo'}/>
                </Link>
                <Link style={{color: '#c1fefe'}} className={s.item} href='/subjects'>Предметы</Link>
                <Link className={s.item} href='/ask-quest'>Задать Вопрос</Link>
            </div>
            <Link className={s.login} href={isAuth ? '/personal' : '/login'}>
                <SvgSelector name='user'/>
            </Link>
        </div>
    );
};

export default SmallMenu;