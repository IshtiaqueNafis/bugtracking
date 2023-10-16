'use client'
import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Button, TextField} from "@radix-ui/themes";

const NewIssue = () => {
    return (
        <div className={'max-w-xl space-y-3'}>
            <TextField.Root>
                <TextField.Input placeholder={"title"}/>

            </TextField.Root>
            <SimpleMDE placeholder={"description"}/>
            <Button>Submit new Issue</Button>
        </div>
    );
};

export default NewIssue;