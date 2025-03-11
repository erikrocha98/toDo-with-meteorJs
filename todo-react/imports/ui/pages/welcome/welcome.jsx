import React from "react";
import { Link } from "react-router-dom";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';

export function WelcomePage () {    
    return (
        <div>
            <div>
                Olá, caro usuário, seja bem vindo ao To do feito no meteorJs!
            </div>
            <Link to="/App">Clique aqui para ser redirecionado para a lista de tarefas</Link>
            <List>
                    <ListItem 
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="edit" sx={{mr:"10px"}}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon/>
                                    
                                </IconButton>'
                            </>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Texto Primário"
                            secondary="Texto Secundário"
                        />   
                    </ListItem>
            </List>
        </div>
        
    );
}

