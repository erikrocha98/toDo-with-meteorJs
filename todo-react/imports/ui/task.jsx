import React from 'react';
import { Avatar, IconButton, Select, ListItem, ListItemAvatar, ListItemText, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const Task = ({ task, onCheckBoxClick, onDeleteClick, onEditClick, user}) => {
  
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
            sx={{mr:"10px"}}
            onClick={() => onDeleteClick(task)}
          >
            <DeleteIcon />
          </IconButton>
          <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
            >
              <MenuItem >Cadastrada</MenuItem>
              <MenuItem >Em Andamento</MenuItem>
              <MenuItem >Concluída</MenuItem>
          </Select>
          
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