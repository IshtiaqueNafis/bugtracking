'use client'
import React, {useState} from 'react';
import "easymde/dist/easymde.min.css"; // Importing the CSS for the Markdown editor
import {Button, Callout, TextField} from "@radix-ui/themes"; // Importing UI _components from Radix UI
import {Controller, useForm} from 'react-hook-form';
import axios from "axios";
import {useRouter} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {issueSchema} from "@/app/validationSchema";
import {z} from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import {Issue} from "@prisma/client";
import SimpleMDE from 'react-simplemde-editor'

type IssueFormData = z.infer<typeof issueSchema>

// Define an interface to represent the shape of the form data


interface Props {
    issue?: Issue
}

const IssueForm = ({issue}: Props) => {
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter();
    // Initialize form control using useForm from react-hook-form
    const {register, control, handleSubmit, formState: {errors}} = useForm<IssueFormData>({
        resolver: zodResolver(issueSchema)
    });

    const onSubmit = handleSubmit(async (data) => {

        try {
            setIsSubmitting(true)
            if (issue) {
                await axios.patch(`/api/issues/${issue.id}`, data)
            } else {
                await axios.post('/api/issues', data); // save data on database
            }


            router.push("/issues") // issue is being saved
            router.refresh()
        } catch (error) {
            setIsSubmitting(false)
            setError("unexpected error occurred")
        }


    })

    return (
        <div className={'max-w-xl'}>
            {error &&
                <Callout.Root color={'red'} className={"mb-5"}>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>}


            <form className={'space-y-3'} onSubmit={onSubmit}
            >
                {/* Text input field for the "Title" with a placeholder */}
                <TextField.Root>
                    <TextField.Input defaultValue={issue?.title} placeholder={"Title"} {...register('title')} />
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>

                {/* Controller component to handle the "Description" field */}
                <Controller
                    control={control}
                    defaultValue={issue?.description}
                    name={"description"}
                    render={({field}) => (
                        // SimpleMDE Markdown editor as a controlled component with a placeholder
                        <SimpleMDE placeholder={"Description"}  {...field} />
                    )}
                />
                <ErrorMessage>{errors.description?.message}</ErrorMessage>


                {/* Button to submit the new issue */}
                <Button
                    disabled={isSubmitting}> {issue ? 'Update  and issue' : 'Submit new Issue'} {''} {isSubmitting &&
                    <Spinner/>}</Button>
            </form>
        </div>
    );
};

export default IssueForm;
