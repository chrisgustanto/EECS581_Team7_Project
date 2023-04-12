import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { IngredientInterface } from "./../interfaces";
import { TableContainer } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { addDoc, collection, getFirestore } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc, getDocs } from "firebase/firestore";

import { firebaseApp } from "../firebase_setup/firebase";
import { database } from "../firebase_setup/firebase";

//init services
const auth = getAuth(firebaseApp);

const baseStyle = {
  backgroundColor: "white",
  width: '225px',
  marginBottom: '10px',
  padding: '10px',
  boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px', 
};

const wordStyle = {
  fontFamily: "Rockwell",
  color: "rgb(113, 9, 104)",
  fontSize: "25px",
};

const numStyle = {
  color: 'Black',
  fontSize: '20px',
  fontFamily: "Helvetica",
};

const Ingredients: FunctionComponent<Props> = ({ ingredientList }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>();
  const [id, setId] = useState<number>(0);


  const [myArray, setMyArray] = useState<IngredientInterface[]>([]);

  onAuthStateChanged(auth, (user) => {
    if(user){
      const docRef = doc(database, "UserData", user.uid)
      if(true){
        getDoc(docRef)
        .then((doc) => {
        
          if(doc.exists()){
          
            setMyArray(doc.data().ingredientList)                                  
          } else {
            console.log("empty doc")
          }
        })
      }    
    }  
    
  })

  
  function addIngredients(
    tempName: string,
    tempQuantity: number,
    tempId: number
  ) {
    // create new ingredient object and push it to array
    let ingr = { name: tempName, quantity: tempQuantity, id: tempId };

    //if item already is in ingrdents just add quantity
    for (var item of ingredientList) {
      if(tempName==item.name){
        if(item.quantity == null){
          item.quantity=0;
        }
        item.quantity = item.quantity + tempQuantity
        checkLoggedIn();
        return
      }
    }
    ingredientList.push(ingr);

    console.log(ingredientList[tempId]);

    setId(id + 1);

    checkLoggedIn();
  }

  //update existing ingredient in list
  function updateIngredients(
    tempName: string,
    tempQuantity: number,
  ) {
    for (let i = 0; i < ingredientList.length; i++) {
      console.log(i);
      if (ingredientList[i].name === tempName) {
        console.log(ingredientList[i].name);
        ingredientList[i].quantity = tempQuantity;
      }
    }

    checkLoggedIn();
  }

  function checkLoggedIn(): boolean {
    auth.onAuthStateChanged(user => {
      if(user) {
        console.log('logged in');
        updateDatabase(user.email!);
        return true;
      } else {
        console.log('not logged in');
        return false;
      }
    })
    return false;
  }

  function updateDatabase(userEmail: string) {
    // console.log(auth.currentUser);
    const colRef = collection(database, 'UserData');
    getDocs(colRef).then(querySnap => {
      querySnap.docs.forEach(docSnap => {
        // console.log(docSnap.data());
        if(docSnap.data().email == userEmail) {
          // console.log(docSnap.data());
          let newUserData = {...docSnap.data(), ingredientList: ingredientList};
          setDoc(doc(database, 'UserData', auth.currentUser!.uid), newUserData);
        }
      })
    })
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
          <h2 style={wordStyle}>Enter Your Ingredients</h2>
        </Grid>

        {/* ingredient name textbox */}
        <Grid item xs={8}>
          <TextField
            id="IngredientNames"
            label="Enter Ingredient Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>

        {/* ingredient quantity textbox */}
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

        {/* add ingredient to list button */}
        <Grid item xs={8}>
          <Button
            variant="contained"
            onClick={() => addIngredients(name, quantity!, id)}
          >
            Add
          </Button>
        </Grid>

        
        {/* update existing ingredient in list button */
        /*
        //not needed anymore since functionality added to addIngredients function
        <Grid item xs={8}>
          <Button
            variant="contained"
            onClick={() => updateIngredients(name, quantity!)}
          >
            Update
          </Button>
        </Grid>
        */
        }
        {/* display ingredient list */}
        <Grid item xs={8}>
          <h3> Ingredient List </h3>
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
    </Box>
  );
};

interface Props {
  ingredientList: IngredientInterface[];
}

export default Ingredients;
