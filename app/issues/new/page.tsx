'use client'
import React from 'react';
import {Button, TextArea, TextField} from "@radix-ui/themes";

const NewIssue = () => {
    return (
        <div className={'max-w-xl space-y-3'}>
            <TextField.Root>
                <TextField.Input placeholder={"title"}/>

            </TextField.Root>
            <TextArea placeholder={"description"}/>
            <Button>Submit new Issue</Button>
        </div>
    );
};

export default NewIssue;