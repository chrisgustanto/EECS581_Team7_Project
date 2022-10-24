import React, {FunctionComponent} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { IngredientInterface } from "./../interfaces";
const Ingredients: FunctionComponent<Props> = ({ingredientList}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  // array of ingredients used to store data
  //interface IngredientArray extends Array<IngredientInterface> {}

  function addIngredients(
    tempName: string,
    tempQuantity: number,
    tempId: number
  ) {
    //create new ingredient object and push it to array
    // test comment here
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
      if (ingredientList[i].name == tempName) {
        console.log(ingredientList[i].name);
        ingredientList[i].quantity = tempQuantity;
      }
    }
    
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
      <h2> Enter your ingredients </h2>
      
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
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button onClick={() => addIngredients(name, quantity, id)}>Add</Button>
      <Button onClick={() => updateIngredients(name, quantity, id)}>
        Update
      </Button>
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
    </Box>
  );
};

interface Props {
	ingredientList: IngredientInterface[]
}

export default Ingredients;
