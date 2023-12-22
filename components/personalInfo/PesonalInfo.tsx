import React, {useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "@/helps/hooks/redux";
import SvgSelector from "@/helps/svgSelector";
import {createApiCall} from "@/api/ApiCalls";
import s from './index.module.scss'

const PersonalInfo = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLInputElement>(null)
    return (
        <>
            {!user ? <><SvgSelector name={'load'}/></> : <>
                <div>
                    <div>
                        <div>Ваша аватарка</div>
                        <img className={s.img} alt='Фотка' src={createApiCall(`/${user.img}`)}/>
                        <div onClick={() => {
                            setOpen(!open)
                        }}>Если хотите сменить аватарку напжмите на этот текст(В Разработке)
                        </div>
                        {/*{open && <>*/}
                        {/*<input ref={ref} type='file' accept='image/*' onChange={(e)=> {*/}
                        {/*}} />*/}
                        {/*<Button onClick={()=> {*/}
                        {/*    let data*/}
                        {/*    if(ref.current) {*/}
                        {/*        if(ref.current.files) {*/}
                        {/*            data = ref.current.files*/}
                        {/*        }*/}
                        {/*        else data = null*/}
                        {/*    } else data = null*/}
                        {/*    dispatch(postAvaThunk(data))*/}
                        {/*}}>Тык</Button>*/}
                        {/*</>}*/}
                    </div>
                </div>
            </>}
        </>
    );
};

export default PersonalInfo;