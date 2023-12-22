import React, {useEffect} from 'react';
import Menu from "@/components/UI/layout/menu/Menu";
import Footer from "@/components/UI/layout/footer/Footer";
import s from './index.module.scss'
import {getToken} from "@/api/Cookie";
import {getUserByTokenThunk} from "@/entities/user/userThunks";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import {setFirstLoad, setLoad} from "@/entities/user/userSlice";
import SvgSelector from "@/helps/svgSelector";

type Props = { children?: React.ReactNode };

const Layout = ({children}: Props) => {
    const dispatch = useAppDispatch()
    const load = useAppSelector(state => state.user.firstLoad)
    useEffect(() => {
        if (getToken()) {
            setTimeout(() => {
                dispatch(getUserByTokenThunk())
                dispatch(setFirstLoad())
            }, 1000)
        } else setTimeout(() => {
            dispatch(setLoad())
            dispatch(setFirstLoad())
        }, 1000)
    }, [])
    return (
        <>
            {load ? <div style={{margin: 'auto', marginTop: '190px'}}><SvgSelector name={'load'}/></div> : <> <Menu/>
                <div className={s.chld}>
                    {children}
                </div>
                <Footer/>
            </>}
        </>
    );
};

export default Layout;