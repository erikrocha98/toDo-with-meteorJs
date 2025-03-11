import React from 'react';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';

export const Task = ({ task, onCheckBoxClick, onDeleteClick }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton 
            edge="end" 
            aria-label="edit" 
            sx={{ mr: "10px" }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDeleteClick(task)}
          >
            <DeleteIcon />
          </IconButton>
          
        </>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <Checkbox
        checked={!!task.isChecked}
        onClick={() => onCheckBoxClick(task)}
      />
      <ListItemText primary={task.text} secondary="Texto Secundário" />
    </ListItem>
    /* <li>
      <input 
        type='checkBox' 
        onClick={()=>onCheckBoxClick(task)} 
        readOnly
        checked={!!task.isChecked}
      />
      <span>{task.text}</span>
      <button onClick={()=>onDeleteClick(task)}>&times;</button>

    </li> */
  );
};