import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { IngredientInterface } from "./../interfaces";
const Ingredients = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  
  const [myArray, setMyArray] = useState<IngredientInterface[]>([]);
  
  // array of ingredients used to store data
  //interface IngredientArray extends Array<IngredientInterface> {}

  //const arr: IngredientInterface[] = []


  function addIngredients(tempName: string, tempQuantity: number, tempId: number){
    //create new ingredient object and push it to array
    
    let ingr = {name : tempName, quantity : tempQuantity, id : tempId}
    myArray.push(ingr)
 
    console.log("-")
    console.log(myArray[tempId])
    console.log(myArray[tempId-1])
    console.log(myArray[tempId-2])
    console.log("-")
    setId(id+1)
  }

  function updateIngredients(tempName: string, tempQuantity: number, tempId: number){
    for(let i=0; i<myArray.length; i++)
    {
      console.log(i)
      if(myArray[i].name == tempName)
      {
        console.log(myArray[i].name)
        myArray[i].quantity = tempQuantity
      }
    }
    window.location.reload();
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
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button onClick={() => (addIngredients(name, quantity, id))}>Add</Button>
      <Button onClick={() => (updateIngredients(name, quantity, id))}>Update</Button>
      <h3> Ingredient List </h3>
      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    Number:{item.quantity} ID:{item.id}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};
export default Ingredients;
