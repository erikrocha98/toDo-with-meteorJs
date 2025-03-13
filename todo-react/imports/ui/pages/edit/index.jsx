import React from "react";
import { Box, TextField, Button } from "@mui/material";

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
                    label="Nome"
                />
            </div>
            <div>
                <TextField 
                    required
                    id=""
                    label="Descrição"
                />
            </div>
            <div>
                <TextField 
                    required
                    id=""
                    label="Situação"
                />
            </div>
            <div>
                <TextField 
                    required
                    id=""
                    type="date"
                />
            </div>
            <div>
                <TextField 
                    required
                    id=""
                    label="Usuários"
                />
            </div>

            <Button>
                Cancelar
            </Button>
            <Button type="onSubmit">
                Salvar
            </Button>
            
        </Box>
    )
}