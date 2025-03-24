import React from "react";
import { useState } from "react";
import {Meteor} from "meteor/meteor";
import { Box, TextField,Button, FormControlLabel, Switch, Select } from "@mui/material";

export const TaskForm = () =>{
    const [text,setText] = useState("");
    const [description, setDescription]=useState("");
    const [isPersonal, setIsPersonal] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        //Se não houver nada escrito no campo de input, a função handleSubmit é fechada.
        if (!text) {
            return;
        }

        try {
            await Meteor.callAsync("tasks.insert", {
                text:text.trim(),
                description,
                taskStatus:"Cadastrada",
                isPersonal,
                createdAt: new Date(),
            });          
        } catch (error) {
            console.log({error: error.message})
        };


        //Após consumir o texto colocado no campo de input, o campo é resetado.
        setText("");
        setDescription("");
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
            <Box sx={{display:"flex",flexGrow:1}}>
                <TextField 
                    required
                    type="text"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Digite para adicionar novas tarefas"
                    sx={{
                        mb:"16px", 
                        mr:"16px", 
                        width:"40vw",
                        fontFamily:"Josefin Sans", 
                        input:{color:"white",fontFamily:"Josefin Sans"}, 
                        label:{color:"white",fontFamily:"Josefin Sans"},
                        "& .MuiOutlinedInput-root":{
                            "& fieldset":{borderColor:"hsl(234, 39%, 85%)"},
                            "&: hover fieldset":{borderColor:"hsl(220, 98%, 61%)"},

                        },
                    }}

                />
                <TextField 
                    required
                    type="text"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    placeholder="Digite para adicionar uma descrição à sua tarefa"
                    
                    sx={{
                        mb:"16px", 
                        mr:"16px", 
                        width:"40vw",
                        fontFamily:"Josefin Sans", 
                        input:{color:"white",fontFamily:"Josefin Sans"}, 
                        label:{color:"white",fontFamily:"Josefin Sans"},
                        "& .MuiOutlinedInput-root":{
                            "& fieldset":{borderColor:"hsl(234, 39%, 85%)"},
                            "&: hover fieldset":{borderColor:"hsl(220, 98%, 61%)"},

                        },
                    }}

                />
                
            </Box>
            <Button 
                type="submit"
                sx={{height:"90%",
                    minWidth:"100px",
                    maxWidth:"500px",
                    color:"black",
                    mt:"20px",
                    backgroundImage: "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",}}
            >
                Adicionar Tarefas
            </Button>
            <FormControlLabel sx={{color: "white",mt:"20px"}} control={<Switch checked={isPersonal} onChange={(e)=>setIsPersonal(e.target.checked)}/>} label="Tarefa Pessoal"/>

        </Box>
        
    )
}