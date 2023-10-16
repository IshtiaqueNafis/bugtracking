'use client'
import React, {useState} from 'react';
import SimpleMDE from "react-simplemde-editor"; // Importing the SimpleMDE Markdown editor component
import "easymde/dist/easymde.min.css"; // Importing the CSS for the Markdown editor
import {Button, Callout, TextField} from "@radix-ui/themes"; // Importing UI components from Radix UI
import {Controller, useForm} from 'react-hook-form';
import axios from "axios";
import {useRouter} from "next/navigation";

// Define an interface to represent the shape of the form data
interface IssueForm {
    title: string;
    description: string;
}

const NewIssue = () => {
    const [error, setError] = useState('')
    const router = useRouter();
    // Initialize form control using useForm from react-hook-form
    const {register, control, handleSubmit} = useForm<IssueForm>();

    return (
        <div className={'max-w-xl'}>
            {error &&
                <Callout.Root color={'red'} className={"mb-5"}>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>}


            <form className={'space-y-3'} onSubmit={handleSubmit(async (data) => {

                try {
                    await axios.post('/api/issues', data); // save data on database
                    router.push("/issues") // issue is being saved
                } catch (error) {
                    setError("unexpected error occurred")
                }


            })}>
                {/* Text input field for the "Title" with a placeholder */}
                <TextField.Root>
                    <TextField.Input placeholder={"Title"} {...register('title')} />
                </TextField.Root>

                {/* Controller component to handle the "Description" field */}
                <Controller
                    control={control}
                    name={"description"}
                    render={({field}) => (
                        // SimpleMDE Markdown editor as a controlled component with a placeholder
                        <SimpleMDE placeholder={"Description"} {...field} />
                    )}
                />

                {/* Button to submit the new issue */}
                <Button>Submit new Issue</Button>
            </form>
        </div>
    );
};

export default NewIssue;
