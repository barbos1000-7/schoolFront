import React from 'react';
import {useAppSelector} from "@/helps/hooks/redux";
import SvgSelector from "@/helps/svgSelector";
import {createApiCall} from "@/api/ApiCalls";
import Link from "next/link";

const UserPage = () => {
    const user = useAppSelector(state => state.profile.profile)
    const authUser = useAppSelector(state => state.user.user)
    return (
        <>
            {user ? <div>
                <div>
                    <img src={createApiCall(`/${user.img}`)} alt='Сосу хуй'/>
                </div>
                <div>{user.nickname}</div>
                <div>
                    В РАЗРАБОТКЕ
                    {/*<div>Ваши вопросы</div>*/}
                    {/*<div>Ваши ответы</div>*/}
                    {/*<div>Ваши лайкитиииии</div>*/}
                </div>
                <div>{authUser && user.id == authUser.id && <>
                    <div>
                        <span>Так выглядит ваш профиль со стороны, если хотите отредактировать его</span>
                        <Link href={'/personal'}> Нажмите сюда</Link>
                    </div>
                </>}</div>
            </div> : <><SvgSelector name='load'/></>}
        </>
    );
};

export default UserPage;