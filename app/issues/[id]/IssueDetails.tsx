// Import necessary modules and components
import React from 'react';
import { Card, Flex, Heading, Text } from "@radix-ui/themes"; // Import UI components from radix-ui library
import IssueStatusBadge from "../../components/IssueStatusBadge"; // Import the IssueStatusBadge component
import Markdown from "react-markdown"; // Import the Markdown rendering component
import { Issue } from "@prisma/client"; // Import the 'Issue' type from Prisma

// Define the Props interface to specify the expected props for this component
interface Props {
    issue: Issue; // Expecting an 'issue' prop of type 'Issue'
}

// Define the IssueDetails component as a functional component
const IssueDetails = ({ issue }: Props) => {
    return (
        <>
            {/* Render the issue title as a heading */}
            <Heading>{issue.title}</Heading>

            {/* Render a flex container with issue status badge and creation date */}
            <Flex className="space-x-3" my="2">
                <IssueStatusBadge status={issue.status} /> {/* Render the IssueStatusBadge component */}
                <Text>{issue.createdAt.toDateString()}</Text> {/* Render the creation date */}
            </Flex>

            {/* Render the issue description as Markdown inside a card */}
            <Card className={'prose'} mt={"4"}>
                <Markdown>{issue.description}</Markdown> {/* Render the issue description as Markdown */}
            </Card>
        </>
    );
};

// Export the IssueDetails component as the default export of this module
export default IssueDetails;
