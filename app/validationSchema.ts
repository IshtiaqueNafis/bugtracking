// Define a schema for validating the request body
import {z} from "zod";

export const createIssueSchema = z.object({
    title: z.string().min(1).max(255), // Define validation rules for the 'title' field
    description: z.string().min(1), // Define validation rules for the 'description' field
});