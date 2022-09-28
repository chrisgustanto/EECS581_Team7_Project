import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"

      component="form"
      sx={{
        flexDirection: "column"
      }}
      noValidate
      autoComplete="off"
    >
      <h2> Welcome to Pantry! </h2>
      <TextField id="Enter ingredients" label="Enter Ingredients" variant="outlined" />

    </Box>
  );
}

export default App;
