import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Box, Typography, Container, Button, Drawer} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { useTracker,useSubscribe } from "meteor/react-meteor-data";
import { TasksCollection } from "../../../api/tasksCollection.js";


const CardBox = styled(Box)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:30px;

`
const ContainerPage = styled(Container)`
    min-height: 75vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
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
    border-radius:20px;

`

export function WelcomePage () {
    const user = useTracker(() => Meteor.user());
    const isLoading = useSubscribe("tasks");
    const tasksAdded = {taskStatus: "Cadastrada"};
    const tasksInProgress = {taskStatus: "Em Andamento"};
    const tasksFinished= {taskStatus: "Concluída"}
    const pendingTasksCount= useTracker(()=>{
    if(!user){
        return 0;
    }
        return TasksCollection.find(tasksAdded).count()
    });
    
    const[open, setOpen] = useState(false);
    
    const toggleDrawer = (newOpen) => {
        setOpen(newOpen);
    };
    const navigate = useNavigate();
    console.log("Usuário logado:", user);

    const DrawerList = (
        <Box sx={{ width: 250}} role="presentation" onClick={()=>toggleDrawer(false)}>
          <List>
            {['Home', 'Perfil'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={(e)=>{
                        e.stopPropagation();
                        console.log(`Clicou no ícone: ${text}`);
                        if(text==='Home'){
                            navigate("/app");
                        }
                        else{
                            navigate("/profile");
                        }
                    }}>
                  <ListItemIcon>
                    <IconButton >
                        {index % 2 === 0 ? <HomeIcon/> : <AccountCircleIcon/>}
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    if (isLoading()) {
        return <div>Loading...</div>;
    }
    return (
        <ContainerPage>
            <Button onClick={()=>toggleDrawer(true)} sx={{position:"absolute",top:"0", left:"0"}}>
                <MenuIcon/>
            </Button>
            <Drawer open={open} onClose={()=>toggleDrawer(false)} >
                {DrawerList}
            </Drawer>

            <BoxPage>
                <Typography variant="h4" sx={{mb:"16px",textAlign:"center", fontFamily: "Josephin Sans"}}>
                    Olá, caro usuário, seja bem vindo ao To do feito no meteorJs!
                </Typography>
                <CardBox >
                    <Card variant="outlined" sx={{width:"15vw",height:"20vh"}}>
                        <CardContent>
                            <Typography variant="h5" sx={{fontFamily:"Josephin Sans"}}>Total de Tarefas Cadastradas: {pendingTasksCount} </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"15vw",height:"20vh"}}>
                        <CardContent>
                            <Typography variant="h5" sx={{fontFamily:"Josephin Sans"}}>Total de Tarefas Concluídas: {TasksCollection.find(tasksFinished).count()}</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"15vw",height:"20vh"}}>
                        <CardContent>
                            <Typography variant="h5" sx={{fontFamily:"Josephin Sans"}}>Total de Tarefas A Serem Concluídas: {TasksCollection.find(tasksInProgress).count()}</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"15vw",height:"20vh"}}>
                        <CardContent>
                            <Typography variant="h5" sx={{fontFamily:"Josephin Sans"}}>Visualisar Tarefas </Typography>
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

