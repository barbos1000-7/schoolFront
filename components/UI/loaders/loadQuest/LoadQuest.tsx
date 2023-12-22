import React from 'react';
import ContentLoader from "react-content-loader";

const LoadQuest = () => {
    const arr = Array(10).fill(0)
    return (
        <>
            <ContentLoader
                speed={2}
                width={1600}
                height={230}
                viewBox="0 0 1600 230"
                backgroundColor="#c1fefe"
                foregroundColor="#eafeff"

            >
                <rect x="91" y="20" rx="4" ry="4" width="44" height="14"/>
                <rect x="94" y="54" rx="3" ry="3" width="314" height="18"/>
                <circle cx="48" cy="44" r="32"/>
                <rect x="150" y="19" rx="0" ry="0" width="115" height="14"/>
                <rect x="95" y="93" rx="0" ry="0" width="407" height="48"/>
                <rect x="129" y="188" rx="0" ry="0" width="1" height="0"/>
                <rect x="96" y="154" rx="0" ry="0" width="147" height="30"/>
                <rect x="257" y="155" rx="0" ry="0" width="36" height="32"/>
                <rect x="466" y="155" rx="0" ry="0" width="35" height="33"/>
                <rect x="422" y="156" rx="0" ry="0" width="34" height="32"/>
                <rect x="21" y="207" rx="0" ry="0" width="98" height="20"/>
            </ContentLoader>
            {
                arr.map((a, i) => <ContentLoader
                    speed={2}
                    width={800}
                    height={60}
                    viewBox="0 0 800 60"
                    backgroundColor="#c1fefe"
                    foregroundColor="#eafeff"
                    key={i}
                >
                    <circle cx="47" cy="36" r="25"/>
                    <rect x="88" y="18" rx="0" ry="0" width="56" height="11"/>
                    <rect x="154" y="18" rx="0" ry="0" width="78" height="11"/>
                    <rect x="87" y="40" rx="0" ry="0" width="540" height="26"/>
                </ContentLoader>)
            }
        </>);
};

export default LoadQuest;