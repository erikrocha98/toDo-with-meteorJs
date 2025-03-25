import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Select, MenuItem,Container } from "@mui/material";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { TasksCollection } from "../../../api/tasksCollection";
import {useTracker} from "meteor/react-meteor-data";

const BoxEditContainer= styled(Container)`
    display:flex;
    justify-content:center;
    align-items:center;
`

const BoxEditForm = styled(Box)`
    display: flex;
    flex-direction:column;
    flex-grow:1;
    border-radius: 20px;
    margin-top: 10px;
    padding: 50px;
    justify-content:center;
    align-items:center

`

export const EditPage = () =>{
    const {id} = useParams();
    const navigate = useNavigate();

    //busca uma tarefa pelo id dela
    const task = useTracker(()=> TasksCollection.findOne(id));

    const[text,setText] = useState("");
    const[description, setDescription]=useState("");
    const[createdAt,setCreatedAt]=useState(new Date());
    const[selectedValue, setSelectedValue]=useState("");

    useEffect(()=>{
        if (task){
            setText(task.text || "");
            setCreatedAt(task.createdAt || new Date());
            setDescription(task.description || "");
            setSelectedValue(task.taskStatus || "");
        }
    },[task]);

    const handleSubmit =  (e) =>{
        e.preventDefault();
        Meteor.callAsync("tasks.update", {
            _id:id,
            text,
            description,
            createdAt,
            taskStatus:selectedValue
        });
        navigate(-1);
    }
    return (
        <BoxEditContainer>
            <BoxEditForm
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                sx={{backgroundColor: "hsl(235, 24%, 19%)", color:"white"}}
            >
                <h1>Editar Tarefa:</h1>
                    <TextField 
                        required
                        type="text"
                        id="Nome"
                        label="Nome"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        fullWidth
                        sx={{
                            mb:"12px",
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
                        id="Descricao"
                        label="Descrição"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        fullWidth
                        sx={{
                            mb:"12px",
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
                        id=""
                        type="date"
                        value={createdAt ? createdAt.toISOString().split('T')[0] : ""}
                        onChange={(e) => {
                            const dateValue = new Date(e.target.value); // Converte a string para Date
                            setCreatedAt(dateValue);
                        }}
                        fullWidth
                        sx={{
                            mb:"12px",
                            fontFamily:"Josefin Sans", 
                            input:{color:"white",fontFamily:"Josefin Sans"}, 
                            label:{color:"white",fontFamily:"Josefin Sans"},
                            "& .MuiOutlinedInput-root":{
                                "& fieldset":{borderColor:"hsl(234, 39%, 85%)"},
                                "&: hover fieldset":{borderColor:"hsl(220, 98%, 61%)"},

                            },
                        }}
                    />
                
                
                    <Select sx={{
                        color:"white",
                        mb:"12px", 
                        fontFamily:"Josefin Sans",
                        "& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},

                    }} value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)} fullWidth>
                        <MenuItem value="Cadastrada">Cadastrada</MenuItem>
                        <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                        <MenuItem value="Concluída">Concluída</MenuItem>
                    </Select>
                
                <div>
                    <Button onClick={()=>navigate(-1)} color="error" sx={{mr:"20px"}}>
                        Cancelar
                    </Button>
                    <Button type="submit" color="success">
                        Salvar
                    </Button>
                </div>
                
            </BoxEditForm>
        </BoxEditContainer>
    )
}