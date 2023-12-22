import React from "react"
import ContentLoader from "react-content-loader"
import s from './index.module.scss'

const LoadQuestsList = () => {
    const arr = Array(10).fill(0)
    return (
        <>
            {arr.map((a, i) => <ContentLoader
                speed={2}
                width={400}
                height={60}
                viewBox="0 0 400 60"
                backgroundColor="#c1fefe"
                foregroundColor="#eafeff"
                key={i}
                className={s.i}
            >
                <rect x="85" y="16" rx="4" ry="4" width="419" height="15"/>
                <rect x="86" y="45" rx="3" ry="3" width="164" height="11"/>
                <circle cx="42" cy="35" r="25"/>
            </ContentLoader>)}
        </>)
}

export default LoadQuestsList