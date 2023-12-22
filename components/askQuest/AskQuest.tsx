import React from 'react';
import HeaderAsk from "@/components/headerAsk/HeaderAsk";
import ContentAsk from "@/components/contentAsk/ContentAsk";
import SubjectAsk from "@/components/subjectAsk/SubjectAsk";

const AskQuest = () => {
    return (
        <div>
            <HeaderAsk/>
            <ContentAsk/>
            <SubjectAsk/>
        </div>
    );
};

export default AskQuest;