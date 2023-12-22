import React from 'react';
import MailInput from "@/components/mailInput/MailInput";
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import MailCode from "@/components/mailCode/MailCode";
import {delMailThunk} from "@/entities/mail/mailThunks";

const Mail = () => {
    const dispatch = useAppDispatch()
    const send = useAppSelector(state => state.mail.sendCode)
    const mailAuth = useAppSelector(state => state.mail.mailIs)
    return (
        <div>
            {mailAuth ? <>
                <div>Ваша почта подтверждена</div>
                <div style={{cursor: 'pointer'}} onClick={() => dispatch(delMailThunk())}>Удалить почту</div>
            </> : !send ? <MailInput/> : <MailCode/>}
        </div>
    );
};

export default Mail;