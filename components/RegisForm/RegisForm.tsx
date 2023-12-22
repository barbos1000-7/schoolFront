import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import s from './index.module.scss'
import Button from "@/components/UI/button/Button";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import {postLoginThunk} from "@/entities/user/userThunks";
import {LoginData} from "@/entities/user/userModel";
import {useRouter} from "next/router";
import {resetIsReg} from "@/entities/user/userSlice";


const schema = yup.object().shape({
    nickname: yup.string().required("Введите Никнейм"),
    password: yup.string().required("Введите password").min(4, "Минимум 4 символа").max(10, "Не более 10 символов"),
});


const RegisForm = () => {
    const {push} = useRouter();

    const dispatch = useAppDispatch()
    const isReg = useAppSelector(state => state.user.isReg)
    const Submi = (data: LoginData) => {
        dispatch(postLoginThunk(data))
    }
    useEffect(() => {

        isReg ? push('/login') : undefined
        return () => {
            dispatch(resetIsReg())
        }
    }, [isReg])
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
    })
    return (
        <form className={s.root} onSubmit={handleSubmit(Submi)}>
            <input className={s.input} {...register('nickname', {})}
                   placeholder={'Введите nickНэйм'}
            />
            {errors['nickname'] && <span>{errors['nickname']?.message}</span>}
            <input className={s.input} {...register('password', {})
            }
                   placeholder={'Введите passВорд'}
            />
            {errors['password'] && <span>{errors['password']?.message}</span>}
            <Button>Кликни сука</Button>
        </form>
    );
};

export default RegisForm;