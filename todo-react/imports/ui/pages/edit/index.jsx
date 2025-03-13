import React from "react";
import { Box, TextField } from "@mui/material";

export const EditPage = () =>{
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <h1>Editar Tarefa:</h1>
            <div>
                <TextField 
                    required
                    id=""
                    label=""
                    defaultValue="Hello"
                />
                <TextField 
                    required
                    id=""
                    label=""
                    defaultValue="Hello"
                />
                <TextField 
                    required
                    id=""
                    label=""
                    defaultValue="Hello"
                />
                <TextField 
                    required
                    id=""
                    label=""
                    defaultValue="Hello"
                />
                <TextField 
                    required
                    id=""
                    label=""
                    defaultValue="Hello"
                />
            </div>
            
        </Box>
    )
}