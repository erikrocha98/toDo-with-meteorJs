import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer= styled.div`
    color:white;
    font-weight:700;
    font-size:32px;

`

export const NotFound = () =>{
    const navigate = useNavigate();
    return (
        <NotFoundContainer>
            Página não encontrada 😒
            <div>    
                <Button onClick={()=>navigate(-1)} sx={{color:"black", fontWeight:"bold", backgroundImage: "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}}>
                    {"< Voltar"}
                </Button>
            </div>
        </NotFoundContainer>
    );
}