import React from 'react';
import s from './index.module.scss'


const HeaderAsk = () => {
    return (
        <>
            <div className={s.root}> Введите заголовок</div>
            {/*<Input placeholder={'Введите заголовок'} />*/}
        </>
    );
};

export default HeaderAsk;