import React, {HTMLAttributes} from 'react';
import s from './index.module.scss'

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: any,
    disabled?: boolean
}

const Button = ({disabled = true, children, ...props}: Props) => {
    return (
        <button disabled={!disabled} {...props} className={s.btn}>{children}</button>
    );
};

export default Button;