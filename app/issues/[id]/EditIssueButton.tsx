// Import necessary modules and _components
import React from 'react';
import { Pencil2Icon } from "@radix-ui/react-icons"; // Import the Pencil2Icon from radix-ui icons
import Link from "next/link"; // Import the Link component from Next.js
import { Button } from "@radix-ui/themes"; // Import the Button component from radix-ui

// Define the Props interface to specify the expected props for this component
interface Props {
    issueId: number; // Expecting an 'issueId' prop of type 'number'
}

// Define the EditIssueButton component as a functional component
const EditIssueButton = ({ issueId }: Props) => {
    return (
        <Button>
            <Pencil2Icon /> {/* Render the Pencil2Icon as an edit icon */}
            <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
            {/* Create a link to edit the issue with the provided 'issueId' */}
        </Button>
    );
};

// Export the EditIssueButton component as the default export of this module
export default EditIssueButton;
