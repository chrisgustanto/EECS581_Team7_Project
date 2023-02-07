import React from "react";
import Box from "@mui/material/Box";

const wordStyle = {
    fontFamily: "Rockwell",
    color: "rgb(210, 132, 33)",
    fontSize: "25px",
  };

const AccDetails = () => {
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
        <h1 style={wordStyle}>Account Details</h1>
        <p>Username:</p>
        <p></p>
        <p>Email:</p>
        <p></p>
      </div>
    </Box>
    );
};

export default AccDetails;