import React from "react";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box // TODO: change to Grid, makes it easier to format spacing & items in Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      component="form"
      sx={{
        flexDirection: "column",
        p: 1,
        m: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <div >
        <h1> Welcome to Pantry! </h1>
        <p>On the ingredients page you can add ingredients to your pantry.</p>
        <p>You can create and add recipies from your ingredents on the recipe page.</p>
        <p>The meal plan page can be used to build a weekly plan of your three primary meals.</p>
        <p>The grocery page contains a list of what you will need to make your planed recipes</p>
      </div>
    </Box>
    
  );
};

export default Home;
