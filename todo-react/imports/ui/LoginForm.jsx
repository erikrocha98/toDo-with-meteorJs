import React, { useState } from "react";
import {Meteor} from 'meteor/meteor';

export const LoginForm = () =>{
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("");

    const submit = () =>{
        e.preventDefault();
        Meteor.loginWithPassword(username,password);
    };

    return(
        <form className="login-form" onSubmit={submit}>
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                name="username"  
                required onChange={(e)=>setUsername(e.target.value)} 
                placeholder="Username"/>
                
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                required onChange={(e)=>setPassword(e.target.value)} 
                placeholder="Password"/>

            <button type="submit">Log in</button>
        </form>
    )
}