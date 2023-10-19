import React from 'react';
import {notFound} from "next/navigation";
import prisma from "@/prisma/client";
import IssueForm from "@/app/issues/_components/IssueForm";

interface Props {
    params: { id: string }
}

const EditIssuePage = async ({params}: Props) => {
    const id = parseInt(params.id);
    if (isNaN(id)) notFound()
    const issue = await prisma.issue.findUnique({
        where: {id}
    })
    if (!issue) notFound()
    return (
        <IssueForm issue={issue}/>
    );
};

export default EditIssuePage;