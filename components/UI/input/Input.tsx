import React, {ChangeEvent, DetailedHTMLProps, HTMLAttributes} from 'react';
import s from './Input.module.css'
import {useAppDispatch} from "@/helps/hooks/redux";

interface Props
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    text: string,
    setText: any,
    props?: any
    placeholder: string
}


const Input = ({text, placeholder, setText, ...props}: Props) => {
    const dispatch = useAppDispatch()
    return (
        <input {...props} placeholder={placeholder} className={s.root}
               onInput={(t: ChangeEvent<HTMLInputElement>) => dispatch(setText(t.target.value))} value={text}/>
    );
};

export default Input;