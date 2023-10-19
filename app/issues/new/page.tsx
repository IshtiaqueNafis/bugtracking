import React from 'react';
import IssueForm from "@/app/issues/_components/IssueForm";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";


const NewIssuePage = () => {


    return (
        <IssueForm/>
    );
};

export default NewIssuePage;