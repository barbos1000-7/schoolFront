import React from 'react';
import {SubjectById} from "@/helps/subjectById";
import {useAppDispatch} from "@/helps/hooks/redux";
import s from './index.module.scss'


type Props = {
    value: number,
    onChange: any
}

const SelectSubject = ({value, onChange}: Props) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const dispath = useAppDispatch()
    return (
        <select className={s.select} value={value}
                onChange={e => dispath(onChange(e.target.value))}>
            <option disabled value=''>предмет</option>
            {arr.map(i => <option key={i} value={i}>{SubjectById({id: i})}</option>)}

        </select>
    );
};

export default SelectSubject;