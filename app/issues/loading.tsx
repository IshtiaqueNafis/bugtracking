import React from 'react';

import 'react-loading-skeleton/dist/skeleton.css'; // Import the CSS for the loading skeleton
import { Table } from "@radix-ui/themes"; // Import a table component from Radix UI
import IssueActions from "@/app/issues/IssueActions";
import { Skeleton } from '../components';

// Define the LoadingIssuesPage component
const LoadingIssuesPage = () => {
    // Create a placeholder array to simulate issues (you can customize this as needed)
    const issues = [1, 2, 3, 4, 5];

    return (
        <div>
            {/* Render the actions related to issues */}
            <IssueActions/>

            {/* Create a table with a loading skeleton */}
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {/* Map over the placeholder issues and display loading skeletons */}
                    {issues.map(issue => (
                        <Table.Row key={issue}>
                            <Table.Cell>
                                {/* Display a loading skeleton for the issue title */}
                                <Skeleton />
                                <div className='block md:hidden'>
                                    {/* Display a loading skeleton for the issue status (hidden on small screens) */}
                                    <Skeleton />
                                </div>
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>
                                {/* Display a loading skeleton for the issue status (visible on larger screens) */}
                                <Skeleton />
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'>
                                {/* Display a loading skeleton for the issue creation date (visible on larger screens) */}
                                <Skeleton />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
};

export default LoadingIssuesPage; // Export the LoadingIssuesPage component
