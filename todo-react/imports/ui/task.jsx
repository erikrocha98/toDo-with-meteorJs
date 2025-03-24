import React, { useState } from "react";
import { 
  Avatar, IconButton, Select, MenuItem, Checkbox, 
  Accordion, AccordionSummary, AccordionDetails, 
  ListItemAvatar, Typography, Chip
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const Task = ({ task, onCheckBoxClick, onDeleteClick, onEditClick, user }) => {
  const[selectedValue, setSelectedValue]=useState(task.taskStatus || "Cadastrada");

  const handleSelectChange =  (e) =>{
    const newValue = e.target.value;
    setSelectedValue(newValue);
    Meteor.callAsync("tasks.updateStatus", {_id:task._id, taskStatus: newValue} );
  }

  

  return (
    <Accordion sx={{ width: "100%", mb: 1, backgroundColor:"hsl(235, 24%, 19%)",color:"white"}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor:"green"}}>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>

        <Checkbox checked={!!task.isChecked} onClick={() => onCheckBoxClick(task)} />
        
        <Typography sx={{ 
                          textDecoration:task.taskStatus ==="Cadastrada" || task.taskStatus==="Em Andamento"?"none":"line-through",
                          flexGrow: 1,
                          color: task.taskStatus === "Cadastrada" || task.taskStatus === "Em Andamento" ? "inherit": "gray"

                          }}>
          {task.text}
        </Typography>

        <IconButton edge="end" aria-label="edit" onClick={() => onEditClick(task)} sx={{ mr: "10px", color:"orange" }}>
          <EditIcon />
        </IconButton>

        <IconButton edge="end" aria-label="delete" sx={{ mr: "10px" }} color="error" onClick={() => onDeleteClick(task)}>
          <DeleteIcon />
        </IconButton>
        <Select value={selectedValue} onChange={handleSelectChange} 
                sx={{
                  color:"white", 
                  "& .MuiOutlinedInput-notchedOutline":{borderColor:"white"},

                
                }}>
            <MenuItem value="Cadastrada">Cadastrada</MenuItem>
            <MenuItem value="Em Andamento">Em Andamento</MenuItem>
            <MenuItem value="Concluída">Concluída</MenuItem>
        </Select>
          
      </AccordionSummary>
      
      <AccordionDetails>
        <Typography sx={{mb:"10px"}} variant="body2" color="textSecondary">
          Criado por: {user.username}
        </Typography>
        
        <Chip label={task.isPersonal? "Pessoal": "Não Pessoal"} sx={{mr:"8px"}}/>
        <Chip label={task.taskStatus??"Sem status"}/>
        <Typography sx={{mt:"10px"}} variant="body2" color="textSecondary">
          {task.description ?? "Sem descrição"}
        </Typography>

        
      </AccordionDetails>
      
    </Accordion>
  );
};
