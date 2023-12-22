import axios from 'axios'
import {LoginData} from "@/entities/user/userModel";
import {getToken} from "@/api/Cookie";
import {QuestAsk} from "@/entities/ask/AskModel";

const getJSONHeader = () => {
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
};

const getUserTokenHeader = () => {
    return {
        headers: {'Authorization': `Bearer ${getToken()}`}
    }
}

export const createApiCall: (restPath: string) => string = (restPath: string) => {
    return `http://localhost:3000${restPath}`;
};

export const getQuests = () => axios.get(createApiCall('/quests/list'))
export const getQuestById = (id: number, limit: number) => axios.get(createApiCall(`/quest/${id}?lim=${limit}`))

export const postAnswerPost = (data: {
    content: string,
    time: string,
    quest_id: number | null
}) => axios.post(createApiCall('/answer'), data, getUserTokenHeader())

export const postRegistr = (data: LoginData) => axios.post(createApiCall('/register'), data, getJSONHeader())
export const postAuth = (data: LoginData) => axios.post(createApiCall('/login'), data)

export const getUserInfo = () => axios.get(createApiCall('/user'), getUserTokenHeader())

export const emailFree = (mail: string) => axios.get(createApiCall(`/mail/${mail}`), getUserTokenHeader())

export const getCode = (mail: string) => axios.get(createApiCall(`/code/${mail}`), getUserTokenHeader())

export const postCode = (code: number) => axios.get(createApiCall(`/accept/${code}`), getUserTokenHeader())

export const delMail = () => axios.get(createApiCall('/delMail'), getUserTokenHeader())

export const postAva = (data: File | null) => axios.post(createApiCall('/upload'), data, getUserTokenHeader())

export const postQuest = (data: QuestAsk) => axios.post(createApiCall('/quest'), data, getUserTokenHeader())


export const getUserBiId = (id: number) => axios.get(createApiCall(`/user/${id}`))