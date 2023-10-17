'use client'
import React, {useState} from 'react';
import SimpleMDE from "react-simplemde-editor"; // Importing the SimpleMDE Markdown editor component
import "easymde/dist/easymde.min.css"; // Importing the CSS for the Markdown editor
import {Button, Callout, TextField} from "@radix-ui/themes"; // Importing UI components from Radix UI
import {Controller, useForm} from 'react-hook-form';
import axios from "axios";
import {useRouter} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {createIssueSchema} from "@/app/validationSchema";
import {z} from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";



type IssueForm = z.infer<typeof createIssueSchema>
// Define an interface to represent the shape of the form data


const NewIssuePage = () => {
    const [error, setError] = useState('')
    const [isSubmitting,setIsSubmitting] = useState(false)
    const router = useRouter();
    // Initialize form control using useForm from react-hook-form
    const {register, control, handleSubmit, formState: {errors}} = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });

    const onSubmit =  handleSubmit(async (data) => {

        try {
            setIsSubmitting(true)
            await axios.post('/api/issues', data); // save data on database
            router.push("/issues") // issue is being saved
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
                    <TextField.Input placeholder={"Title"} {...register('title')} />
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>

                {/* Controller component to handle the "Description" field */}
                <Controller
                    control={control}
                    name={"description"}
                    render={({field}) => (
                        // SimpleMDE Markdown editor as a controlled component with a placeholder
                        <SimpleMDE placeholder={"Description"} {...field} />
                    )}
                />
                 <ErrorMessage>{errors.description?.message}</ErrorMessage>


                {/* Button to submit the new issue */}
                <Button disabled={isSubmitting}>Submit new Issue {isSubmitting && <Spinner/>}</Button>
            </form>
        </div>
    );
};

export default NewIssuePage;
