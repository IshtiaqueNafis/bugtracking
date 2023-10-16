// Import necessary modules and dependencies
import { NextRequest, NextResponse } from "next/server"; // Next.js server-related modules
import { z } from "zod"; // Zod for data validation
import prisma from "@/prisma/client"; // Import the Prisma client for database operations

// Define a schema for validating the request body
const createIssueSchema = z.object({
    title: z.string().min(1).max(255), // Define validation rules for the 'title' field
    description: z.string().min(1), // Define validation rules for the 'description' field
});

// Define the HTTP POST request handler
export const POST = async (request: NextRequest) => {
    // Parse the JSON request body
    const body = await request.json();

    // Validate the request body against the defined schema
    const validation = createIssueSchema.safeParse(body);

    // If the validation fails, return a JSON response with a 400 status code
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), {
            status: 400,
        });
    }

    // If the validation succeeds, create a new issue in the database using Prisma
    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description },
    });

    // Return a JSON response with the newly created issue and a 201 status code (Created)
    return NextResponse.json(newIssue, { status: 201 });
};
