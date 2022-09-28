import React, { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [value, setValue] = useState("");
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"

      component="form"
      sx={{
        flexDirection: "column",
        p: 1,
        m: 1
      }}
      noValidate
      autoComplete="off"
    >
      <h2> Welcome to Pantry! </h2>
      <TextField 
        id="Ingredients" 
        label="Enter Ingredients" 
        variant="outlined" 
        value={value}
        onChange = {(e) => setValue(e.target.value)}
      />
      <Button variant="contained">Enter</Button>
      <h3> Ingredient List </h3>
      <h4> {value} </h4>
      


    </Box>
  );
}

export default App;
