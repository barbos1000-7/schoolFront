import React, {ChangeEvent, useEffect} from 'react';
import {codeChange, mailChange, setArrow, setSendCode} from "@/entities/mail/mailSlice";
import Button from "@/components/UI/button/Button";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import {postCodeThunk} from "@/entities/mail/mailThunks";
import {delMail} from "@/api/ApiCalls";
import SvgSelector from "@/helps/svgSelector";

const schema = yup.object().shape({
    code: yup.string().required("Введите код").min(6, '6 циферок я тебе отправил баля'),
});
const MailCode = () => {
    const arrow = useAppSelector(state => state.mail.arrow)
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
    })

    const isAuth = useAppSelector(state => state.mail.mailIs)
    const Submi = (data: { code: string }) => {
        dispatch(postCodeThunk({code: Number(data.code)}))
    }
    useEffect(() => {
        return () => {

            if (arrow) {
                dispatch(setSendCode())
                dispatch(mailChange(''))
                dispatch(codeChange(''))
            }
        }
    }, [])
    useEffect(() => {
        arrow && dispatch(setSendCode())
    }, [arrow])
    const code = useAppSelector(state => state.mail.code)
    const mail = useAppSelector(state => state.mail.mail)
    return (
        <form onSubmit={handleSubmit(Submi)}>
            <div><span onClick={() => {
                dispatch(setArrow(true))
                dispatch(codeChange('11'))
                delMail().then()
            }}><SvgSelector name={'arrowLeft'}/></span> Введите кодик(6 циферок) который я отправил вам на почту
                указанному выше <br/>(<span
                    style={{fontWeight: '600'}}> {mail} </span>)
            </div>
            <input {...register('code')} value={code}
                   onInput={(e: ChangeEvent<HTMLInputElement>) => dispatch(codeChange(e.target.value))}/>
            <Button disabled={true}>Отправить код</Button>
        </form>
    );
};

export default MailCode;