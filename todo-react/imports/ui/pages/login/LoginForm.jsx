import React, { useState } from "react";
import {Meteor} from "meteor/meteor";
import { TextField,Box,Button,Container } from "@mui/material";
import styled from "styled-components";
import Paper from "@mui/material/Paper";

const ContainerForm = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    color:white;
`
const BoxForm = styled(Paper)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-grow:1;
    padding: 50px;
    margin-top:10px;
`
const Titulo = styled.h1`
    margin-bottom:8px;
`



export const LoginForm = () =>{
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("");

    const submit = (e) =>{
        e.preventDefault();
        console.log("Tentando logar com:", username, password);

        Meteor.loginWithPassword(username,password, (error)=>{
            if(error){
                console.error("Erro ao fazer login", error.reason);
            }else{
                console.log("login bem sucedido");
            }

        });
        
    };

    return(
        <ContainerForm 
            component="form"
            autoComplete="off"
            onSubmit={submit}
        >
            
            <BoxForm elevation={20} sx={{backgroundColor: "hsl(235, 24%, 19%)", color:"white"}}>
                <Titulo>Já possui uma conta ?</Titulo>
                <h3>Faça seu login abaixo</h3>
                <div>
                    <TextField
                        required
                        id="username"
                        type="text"
                        label="Username"
                        placeholder="Username"
                        onChange={(e)=>setUsername(e.target.value)}
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
                </div>
                <div>
                    <TextField
                        required
                        id="password"
                        type="password"
                        label="Password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                        sx={{
                            mb:"12px", 
                            input:{color:"white",fontFamily:"Josefin Sans"}, 
                            label:{color:"white",fontFamily:"Josefin Sans"},
                            "& .MuiOutlinedInput-root":{
                                "& fieldset":{borderColor:"hsl(234, 39%, 85%)"},
                                "&: hover fieldset":{borderColor:"hsl(220, 98%, 61%)"},

                            },
                        }}
                    />
                </div>
                <div>
                    <Button 
                        type="submit" 
                        sx={{
                            borderRadius:"20px",
                            width:"221.6px",
                            color:"black",
                            backgroundImage: "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
                        }}
                    >
                        Entrar
                    </Button>
                </div>
            </BoxForm>

        </ContainerForm>
        
    );
};