import React, { useState } from "react";
import {Meteor} from 'meteor/meteor';

export const LoginForm = () =>{
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("");

    const submit = (e) =>{
        e.preventDefault();
        try {
            Meteor.loginWithPassword(username,password);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <form className="login-form" onSubmit={submit}>
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
    )
}