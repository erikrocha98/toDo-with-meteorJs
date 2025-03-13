import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { use } from "react";

export const NotFound = () =>{
    const navigate = useNavigate();
    return (
        <div>
            Página não encontrada
            <Button onClick={()=>navigate(-1)}>
                {"< Voltar"}
            </Button>
        </div>
    );
}