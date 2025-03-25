import React from "react";
import { TextField, Select, Box, Button,MenuItem, Container, InputLabel } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';

const BoxContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:hsl(235, 24%, 19%);
    padding: 50px;
    flex-grow: 1;
    border-radius:20px;
`

export const UserProfile = () => {
  return (
    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", position:"relative"}}>
        <Avatar alt="UserImg" src="/assets/ragnar.jpg" sx={{ 
          position: "absolute", 
          top: 20, 
          right: 20, 
          width: 60, 
          height: 60, 
          border: "3px solid white" 
        }}  />
        <BoxContainer>
            <TextField
            required
            type="text"
            id="Nome"
            label="Nome"
            /* value={} */
            /* onChange={(e) => setText(e.target.value)} */
            fullWidth
            sx={{
                mb: "12px",
                fontFamily: "Josefin Sans",
                input: { color: "white", fontFamily: "Josefin Sans" },
                label: { color: "white", fontFamily: "Josefin Sans" },
                "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "hsl(234, 39%, 85%)" },
                "&: hover fieldset": { borderColor: "hsl(220, 98%, 61%)" },
                },
            }}
            />
        
            <TextField
            required
            type="text"
            id="email"
            label="E-mail"
            /* value={text} */
            /* onChange={(e) => setText(e.target.value)} */
            fullWidth
            sx={{
                mb: "12px",
                fontFamily: "Josefin Sans",
                input: { color: "white", fontFamily: "Josefin Sans" },
                label: { color: "white", fontFamily: "Josefin Sans" },
                "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "hsl(234, 39%, 85%)" },
                "&: hover fieldset": { borderColor: "hsl(220, 98%, 61%)" },
                },
            }}
            />
        
            <TextField
            required
            type="date"
            id="Data de Nascimento"
            /* label="Data de Nascimento" */
            /* value={text} */
            /* onChange={(e) => setText(e.target.value)} */
            fullWidth
            sx={{
                mb: "12px",
                fontFamily: "Josefin Sans",
                input: { color: "white", fontFamily: "Josefin Sans" },
                label: { color: "white", fontFamily: "Josefin Sans" },
                "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "hsl(234, 39%, 85%)" },
                "&: hover fieldset": { borderColor: "hsl(220, 98%, 61%)" },
                },
            }}
            />
            <FormControl fullWidth>
                <InputLabel sx={{color:"white", fontFamily:"Josefin Sans"}}>Sexo</InputLabel>
                <Select
                    sx={{
                        color: "white",
                        mb: "12px",
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                    }}
                    /* value="Sexo" */
                    /* onChange={(e) => setSelectedValue(e.target.value)} */
                    
                    >
                    <MenuItem value="Masculino">Masculino</MenuItem>
                    <MenuItem value="Feminino">Feminino</MenuItem>
                </Select>
            </FormControl>
        
            <TextField
            required
            type="text"
            id="Empresa"
            label="Empresa"
            /* value={text}
            onChange={(e) => setText(e.target.value)} */
            fullWidth
            sx={{
                mb: "12px",
                fontFamily: "Josefin Sans",
                input: { color: "white", fontFamily: "Josefin Sans" },
                label: { color: "white", fontFamily: "Josefin Sans" },
                "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "hsl(234, 39%, 85%)" },
                "&: hover fieldset": { borderColor: "hsl(220, 98%, 61%)" },
                },
            }}
            />
        <div>
            <Button sx={{mr:"50px"}} color="error">Cancelar</Button>
            <Button color="success">Salvar</Button>
        </div>
        
        </BoxContainer>
    </Container>
  );
};
