import React from "react";
import { useState } from "react";
import {Meteor} from "meteor/meteor";

export const TaskForm = () =>{
    const [text,setText] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();

        //Se não houver nada escrito no campo de input, a função handleSubmit é fechada.
        if (!text) {
            return;
        }

        try {
            await Meteor.callAsync("tasks.insert", {
                text: text.trim(),
                createdAt: new Date(),
            });          
        } catch (error) {
            console.log({error: error.message})
        };


        //Após consumir o texto colocado no campo de input, o campo é resetado.
        setText("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Digite para adicionar novas tarefas"/>
            <button type="submit">Adicionar Tarefas</button>
        </form>
    )
}