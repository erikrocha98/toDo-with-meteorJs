import React, { useState } from "react";
import {Meteor} from "meteor/meteor";

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
        <form onSubmit={submit} className="login-form">
            <div>
                Olá, caro usuário, seja bem vindo ao To do feito no meteorJs!
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username"  
                    required 
                    onChange={(e)=>setUsername(e.target.value)} 
                    placeholder="Username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    onChange={(e)=>setPassword(e.target.value)} 
                    placeholder="Password"/>
            </div>    
            <div>
                <button type="submit">Log in</button>
            </div>
        </form>
    );
};