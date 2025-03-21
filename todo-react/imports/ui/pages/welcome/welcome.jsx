import React from "react";
import { Link } from "react-router-dom";
import {Box, Typography, Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import styled from "styled-components";

const CardBox = styled(Box)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:30px;

`
const ContainerPage = styled(Container)`
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
`

const BoxPage = styled (Box)`
    background-color: hsl(235, 24%, 19%);
    color:white;
    max-width:50vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:50px;
`

export function WelcomePage () {    
    return (
        <ContainerPage>
            <BoxPage>
                <Typography variant="h4" sx={{mb:"16px",textAlign:"center"}}>
                    Olá, caro usuário, seja bem vindo ao To do feito no meteorJs!
                </Typography>
                <CardBox>
                    <Card variant="outlined" sx={{width:"15vw",height:"20vh"}}>
                        <CardContent>
                            <Typography variant="h5">Total de Tarefas Cadastradas: </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"15vw",height:"20vh"}}>
                        <CardContent>
                            <Typography variant="h5">Total de Tarefas Concluídas: </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"15vw",height:"20vh"}}>
                        <CardContent>
                            <Typography variant="h5">Total de Tarefas A Serem Concluídas: </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"15vw",height:"20vh"}}>
                        <CardContent>
                            <Typography variant="h5">Visualisar Tarefas </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/App">Clique aqui para ser redirecionado para a lista de tarefas</Link>
                        </CardActions>
                    </Card>
                </CardBox>
                
            </BoxPage>   
        </ContainerPage>
    );
}

