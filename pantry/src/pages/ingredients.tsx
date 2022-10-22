import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { IngredientInterface } from "./../interfaces";
const Ingredients = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);

  // array of ingredients used to store data
  interface IngredientArray extends Array<IngredientInterface> {}

  const arr: IngredientInterface[] = [

  ]

  function addIngredients(tempName: string, tempQuantity: number){
    //create new ingredient object and push it to array
    let ingr = {name : tempName, quantity : tempQuantity}
    arr.push(ingr)
    let int = 0
    console.log(arr[int])
    int = int + 1
  }

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
      <h3> Here it be </h3>
      <TextField
        id="IngredientNames"
        label="Enter Ingredient Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="IngredientQuantities"
        label="Enter Ingredient Quantity"
        variant="outlined"
        type = "number"
        value={quantity}
        onChange={(e) => setQuantity(quantity)}
      />
      <Button onClick={() => addIngredients(name, quantity)}>Enter</Button>
      <h3> Ingredient List </h3>
    </Box>
  );
};
export default Ingredients;
