import React, { useState } from "react";
import {Meteor} from "meteor/meteor";
import { TextField,Box,Button } from "@mui/material";
import styled from "styled-components";

const BoxForm = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border: 1px solid black;
    height: 100vh;
`
const WelcomeTitle = styled.h1`
    font-size: 16px;
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
        <BoxForm 
            component="form"
            autoComplete="off"
            onSubmit={submit}
        >
            <WelcomeTitle>
                Olá, caro usuário, seja bem vindo ao To do app com meteorJs!
            </WelcomeTitle>
            <div>
                <TextField
                    required
                    id="username"
                    type="text"
                    label="Username"
                    placeholder="Username"
                    onChange={(e)=>setUsername(e.target.value)}
                    sx={{mb:"8px"}}
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
                    sx={{mb:"8px"}}    
                />
            </div>
            <div>
                <Button type="submit">Entrar</Button>
            </div>

        </BoxForm>
        
    );
};