import React from 'react';
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import {Box, Flex, Grid} from "@radix-ui/themes";
import EditIssueButton from './EditIssueButton';
import IssueDetails from "@/app/issues/[id]/IssueDetails";
import DeleteIssueButton from "@/app/issues/[id]/DeleteIssueButton";

interface Props {
    params: { id: string }
}

const IssueDetailPage = async ({params}: Props) => {
    const id = parseInt(params.id);
    if (isNaN(id)) notFound()
    const issue = await prisma.issue.findUnique({
        where: {id}
    })

    if (!issue) notFound()
    return (
        <Grid columns={{initial: '1', md: "5"}} gap={"5"}>
            <Box className={"md:col-span-4"}>
                <IssueDetails issue={issue}/>
            </Box>

            <Box>
                <Flex direction={"column"} gap={"4"}>
                    <EditIssueButton issueId={issue.id}/>
                    <DeleteIssueButton issueId={issue.id}/>
                </Flex>
            </Box>

        </Grid>
    );
};

export default IssueDetailPage;