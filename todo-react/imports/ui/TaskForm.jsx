import React from "react";
import { useState } from "react";
import {Meteor} from "meteor/meteor";
import { Box, TextField,Button, FormControlLabel, Switch } from "@mui/material";

export const TaskForm = () =>{
    const [text,setText] = useState("");
    const [isPersonal, setIsPersonal] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        //Se não houver nada escrito no campo de input, a função handleSubmit é fechada.
        if (!text) {
            return;
        }

        try {
            await Meteor.callAsync("tasks.insert", {

                text:{
                    text: text.trim(),
                    isPersonal,
                },
                createdAt: new Date(),
            });          
        } catch (error) {
            console.log({error: error.message})
        };


        //Após consumir o texto colocado no campo de input, o campo é resetado.
        setText("");
    };

    return (
        <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
                display:"flex", 
                margin:"16px", 
                flexDirection:"column",
                alignItems:"center",
            }}
        >
            <TextField 
                required
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Digite para adicionar novas tarefas"
                fullWidth
                sx={{mb:"16px"}}

            />
            <Button 
                type="submit"
                sx={{height:"90%",
                    minWidth:"100px",
                    maxWidth:"500px",
                    color:"black",
                    backgroundImage: "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",}}
            >
                Adicionar Tarefas
            </Button>
            <FormControlLabel control={<Switch checked={isPersonal} onChange={(e)=>setIsPersonal(e.target.checked)}/>} label="Tarefa Pessoal"/>

        </Box>
        
    )
}