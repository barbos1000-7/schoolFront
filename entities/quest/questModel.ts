export type answer = {
    id: number,
    content: string,
    time: string,
    img: string,
    nickname: string,
    user_id: number,

}

export type quest = {
    id: number,
    subject: number,
    title: string,
    body: string,
    time: string
    user_id: number
    nickname: string
    img: string
}

export type answersType = {
    data: answer[],
    count: number
}