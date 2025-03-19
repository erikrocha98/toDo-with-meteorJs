import React from 'react';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const Task = ({ task, onCheckBoxClick, onDeleteClick, onEditClick, user}) => {
  console.log("Task:", task);
  console.log("User:", user);
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton 
            edge="end" 
            aria-label="edit"
            onClick={()=>onEditClick(task)} 
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
          <AssignmentIcon />
        </Avatar>
      </ListItemAvatar>
      <Checkbox
        checked={!!task.isChecked}
        onClick={() => onCheckBoxClick(task)}
      />
      <ListItemText primary={task.text.text} secondary={user.username} />
    </ListItem>
    
  );
};