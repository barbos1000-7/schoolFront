import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@/components/UI/button/Button";
import {useAppDispatch} from "@/helps/hooks/redux";
import {postAuthThunk} from "@/entities/user/userThunks";
import {LoginData} from "@/entities/user/userModel";
import s from './index.module.scss'

const schema = yup.object().shape({
    nickname: yup.string().required("Введите Никнейм"),
    password: yup.string().required("Введите password").min(4, "Минимум 4 символа").max(10, "Не более 10 символов"),
});


const AuthForm = () => {

    const dispatch = useAppDispatch()
    const Submi = (data: LoginData) => {
        dispatch(postAuthThunk(data))
    }
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
    })
    return (
        <form className={s.roots} onSubmit={handleSubmit(Submi)}>
            <input className={s.input} {...register('nickname', {})}
                   placeholder={'Введите nickНэйм'}
            />
            {errors['nickname'] && <span>{errors['nickname']?.message}</span>}
            <input className={s.input} {...register('password', {})
            }
                   placeholder={'Введите passВорд'}
            />
            {errors['password'] && <span>{errors['password']?.message}</span>}
            <Button>Вход</Button>
        </form>
    );
};

export default AuthForm;