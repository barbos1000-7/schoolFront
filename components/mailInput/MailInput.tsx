import React, {ChangeEvent, useEffect, useRef} from 'react';
import {codeChange, loadMailSet, mailChange, setArrow} from "@/entities/mail/mailSlice";
import s from "./index.module.scss";
import Button from "@/components/UI/button/Button";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import useDebounce from "@/helps/hooks/useDebounce";
import {getCodeThunk, mailFreeThunk} from "@/entities/mail/mailThunks";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

const schema = yup.object().shape({
    mail: yup.string().required("Введите почту").email("Введите корректную почту"),
});

const MailInput = () => {
    const dispatch = useAppDispatch()
    const arrow = useAppSelector(state => state.mail.arrow)
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
    })
    const ref = useRef(null)
    const Submi = (data: { mail: string }) => {
        code ? dispatch(codeChange('')) : dispatch(getCodeThunk({mail: data.mail}))

    }

    const mail = useAppSelector(state => state.mail.mail)
    const mailInd = useAppSelector(state => state.mail.mailInd)
    const mailLoad = useAppSelector(state => state.mail.mailLoad)
    const debouncedMail = useDebounce(mail, 1000);
    const code = useAppSelector(state => state.mail.code)
    useEffect(() => {
        if (mail && !errors.mail) {
            dispatch(mailFreeThunk({mail}))
        }
    }, [debouncedMail])
    useEffect(() => {
        if (ref.current) {
            submit(ref.current)
        }
        arrow && dispatch(setArrow(false))
    }, [])


    useEffect(() => {
        dispatch(loadMailSet())
    }, [errors.mail])

    return (
        <form ref={ref} onSubmit={handleSubmit(Submi)}>
            <div>Введите почту на которуу вы бы хотели получать уведомления ;)</div>
            <input placeholder='+7(987)885-98-20' {...register('mail', {
                pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            })} value={mail}
                   onInput={(e: ChangeEvent<HTMLInputElement>) => dispatch(mailChange(e.target.value))}/>
            <div
                className={s.errors}>{errors.mail ? errors.mail.message : mailLoad ?
                <div className={s.load}><span className={s.txtLoad}> Загружается </span> <span
                    className={s.loader}></span></div> : mailInd ? 'Почта свободна' : 'почта уже занята'}</div>
            <Button disabled={!errors.mail && !!mail && !!mailInd}>Отправить код</Button>
        </form>
    );
};

export default MailInput;