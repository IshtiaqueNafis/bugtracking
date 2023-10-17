'use client'
import React from 'react';
import { Status } from "@prisma/client"; // Import the Status type from the Prisma client
import { Badge } from "@radix-ui/themes"; // Import the Badge component from Radix UI

// Define a Props interface to specify the component's props
interface Props {
    status: Status; // The 'status' prop is expected to be of the Status type
}

// Define a mapping of Status values to corresponding labels and badge colors
const statusMap: Record<Status, { label: string, color: 'red' | 'violet' | 'green' }> = {
    OPEN: { label: "Open", color: "red" },
    IN_PROGRESS: { label: "In Progress", color: "violet" },
    CLOSED: { label: "Closed", color: "green" }
}

// Define the IssueStatusBadge functional component
const IssueStatusBadge = ({ status }: Props) => {
    return (
        // Render a Badge component with a color based on the 'status' prop
        <Badge color={statusMap[status].color}>
            {statusMap[status].label} {/* Display the label corresponding to the 'status' prop */}
        </Badge>
    );
};

export default IssueStatusBadge; // Export the IssueStatusBadge component
