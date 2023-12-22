export type User = {
    id: number,
    nickname: string
    img: string
    mailAuth?: boolean
    mail?: string
}

export type LoginData = {
    nickname: string;
    password: string;
};

export type Token = {
    token: string
}