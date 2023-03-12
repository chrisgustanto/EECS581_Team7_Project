import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { GroceryListInterface } from "./../interfaces";
import { TableContainer } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const baseStyle = {
  backgroundColor: "white",
  width: '225px',
  marginBottom: '10px',
  padding: '10px',
  boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px', 
};

const wordStyle = {
  fontFamily: "Rockwell",
  color: "rgb(9, 113, 18)",
  fontSize: "25px",
};

const numStyle = {
  color: 'Black',
  fontSize: '20px',
};

const GroceryList = () => {
  // array of grocery lists used to store data
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>();
  const [id, setId] = useState<number>(0);

  const [myArray, setMyArray] = useState<GroceryListInterface[]>([]);

  //const arr: GroceryListInterface[] = []

  function addGroceries(
    tempName: string,
    tempQuantity: number,
    tempId: number
  ) {
    //create new grocery list object and push it to array

    let ingr = { name: tempName, quantity: tempQuantity, id: tempId };
    myArray.push(ingr);

    console.log("-");
    console.log(myArray[tempId]);
    console.log(myArray[tempId - 1]);
    console.log(myArray[tempId - 2]);
    console.log("-");
    setId(id + 1);
  }

  return (
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
          <h3 style={wordStyle}> Please Enter Your Groceries: </h3>
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="GroceryNames"
            label="Enter Grocery Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="GroceryQuantities"
            label="Enter Grocery Quantity"
            variant="outlined"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))} />
        </Grid>

        <Grid item xs={8}>
          <Button
            variant="contained"
            onClick={() => addGroceries(name, quantity!, id)}
          >
            Enter
          </Button>
        </Grid>

        <Grid item xs={8}>
          <h3> Grocery List </h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {myArray.map((item) => (
              <TableRow className="itemDis" key={item.id} style={baseStyle}>
                <TableCell style={wordStyle}>{item.name}</TableCell>
                <TableCell align='right' style={numStyle}> x {item.quantity}</TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
export default GroceryList;
