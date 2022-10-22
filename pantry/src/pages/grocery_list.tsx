import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { GroceryListInterface } from "./../interfaces";

const GroceryList = () => {
  // array of grocery lists used to store data
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const [myArray, setMyArray] = useState<GroceryListInterface[]>([]);

  //const arr: GroceryListInterface[] = []


  function addGroceries(tempName: string, tempQuantity: number, tempId: number){
    //create new grocery list object and push it to array
    
    let ingr = {name : tempName, quantity : tempQuantity, id : tempId}
    myArray.push(ingr)
 
    console.log("-")
    console.log(myArray[tempId])
    console.log(myArray[tempId-1])
    console.log(myArray[tempId-2])
    console.log("-")
    setId(id+1)
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
      <h3> Please Enter Your Groceries Here: </h3>
      <TextField
        id="GroceryNames"
        label="Enter Grocery Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <TextField
        id="GroceryQuantities"
        label="Enter Grocery Quantity"
        variant="outlined"
        type = "number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button onClick={() => (addGroceries(name, quantity, id))}>Enter</Button>
      <h3> Grocery List </h3>
      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </Box>
  );
 }
export default GroceryList;
