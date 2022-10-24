import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { IngredientInterface } from "./../interfaces";

const Ingredients: FunctionComponent<Props> = ({ ingredientList }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>();
  const [id, setId] = useState<number>(0);

  // array of ingredients used to store data
  //interface IngredientArray extends Array<IngredientInterface> {}

  function addIngredients(
    tempName: string,
    tempQuantity: number,
    tempId: number
  ) {
    // create new ingredient object and push it to array
    let ingr = { name: tempName, quantity: tempQuantity, id: tempId };
    ingredientList.push(ingr);

    console.log(ingredientList[tempId]);

    setId(id + 1);
  }

  function updateIngredients(
    tempName: string,
    tempQuantity: number,
    tempId: number
  ) {
    for (let i = 0; i < ingredientList.length; i++) {
      console.log(i);
      if (ingredientList[i].name === tempName) {
        console.log(ingredientList[i].name);
        ingredientList[i].quantity = tempQuantity;
      }
    }
  }

  function clearIngredientList() {
    ingredientList = [];
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
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
        <Grid item xs={8}>
          <h1>Enter your ingredients</h1>
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="IngredientNames"
            label="Enter Ingredient Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="IngredientQuantities"
            label="Enter Ingredient Quantity"
            variant="outlined"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </Grid>

        <Grid item xs={8}>
          <Button
            variant="contained"
            onClick={() => addIngredients(name, quantity!, id)}
          >
            Add
          </Button>
        </Grid>

        <Grid item xs={8}>
          <Button
            variant="contained"
            onClick={() => updateIngredients(name, quantity!, id)}
          >
            Update
          </Button>
        </Grid>

        <Grid item xs={8}>
          <h3> Ingredient List </h3>
          <div>
            {ingredientList.map((ingredient) => (
              <div className="itemDis" key={ingredient.id}>
                <p>
                  {ingredient.name} {ingredient.quantity}
                </p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

interface Props {
  ingredientList: IngredientInterface[];
}

export default Ingredients;
