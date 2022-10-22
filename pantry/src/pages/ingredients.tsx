import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
const Ingredients = () => {
  const [value, setValue] = useState("");

  interface Data {
    name?: string;
  }

  interface Ingredient extends Data {
    quantity?: number;
  }

  interface Recipes extends Data {
    type?: string;
    label?: string;
  }

  interface IngredientList extends Array<Ingredient> {}

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
      <h2> Welcome to Pantry! </h2>
      <h3> Here it be</h3>
      <TextField
        id="Ingredients"
        label="Enter Ingredients"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="contained">Enter</Button>
      <h3> Ingredient List </h3>
      <h4> {value} </h4>
    </Box>
  );
};
export default Ingredients;
