import React from "react";
import { Link } from "react-router-dom";

export function WelcomePage () {    
    return (
        <div>
            <div>
                Olá, caro usuário, seja bem vindo ao To do feito no meteorJs!
            </div>
            <Link to="/App">Clique aqui para ser redirecionado para a lista de tarefas</Link>
        </div>
        
    );
}