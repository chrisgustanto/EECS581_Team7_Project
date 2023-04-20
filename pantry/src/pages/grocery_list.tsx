import { useEffect, useState } from "react";
import { GroceryListInterface } from "./../interfaces";
import {
  Box,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  QuerySnapshot,
} from "@firebase/firestore";
import { database, firebaseApp } from "../firebase_setup/firebase";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
//import { db } from "../../firebase/config";
//init services
const auth = getAuth(firebaseApp);

const baseStyle = {
  backgroundColor: "white",
  width: "225px",
  marginBottom: "10px",
  padding: "10px",
  boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
};

const wordStyle = {
  fontFamily: "Rockwell",
  color: "rgb(9, 113, 18)",
  fontSize: "25px",
};

const numStyle = {
  color: "Black",
  fontSize: "20px",
};

const GroceryList = () => {
  // array of grocery lists used to store data
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>();
  const [id, setId] = useState<number>(0);

  const [myArray, setMyArray] = useState<GroceryListInterface[]>([]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const docRef = doc(database, "UserData", user.uid);
      if (true) {
        getDoc(docRef).then((doc) => {
          if (doc.exists()) {
            setMyArray(doc.data().groceryList);
          } else {
            console.log("empty doc");
          }
        });
      }
    }
  });

  //create new grocery list object and push it to array
  //modifiyed to add to database
  function addGroceries(
    tempName: string,
    tempQuantity: number,
    tempId: number
  ) {
    for (var item of myArray) {
      if (tempName == item.name) {
        if (item.quantity == null) {
          item.quantity = 0;
        }
        item.quantity = item.quantity + tempQuantity;
        return;
      }
    }
    let ingr = { name: tempName, quantity: tempQuantity, id: tempId };
    myArray.push(ingr);
    /*
    let ingr = { name: tempName, quantity: tempQuantity};

    const ref = collection(database, "groveryListItems")
    try {
      addDoc(ref, ingr)
      console.log("sent user data")
    } catch (err) {
      console.log("error: ")
      console.log(err)
    }
    */
    checkLoggedIn();
  }

  function checkLoggedIn(): boolean {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("logged in");
        updateDatabase(user.email!);
        return true;
      } else {
        console.log("not logged in");
        return false;
      }
    });
    return false;
  }

  function updateDatabase(userEmail: string) {
    // console.log(auth.currentUser);
    const colRef = collection(database, "UserData");
    getDocs(colRef).then((querySnap) => {
      querySnap.docs.forEach((docSnap) => {
        // console.log(docSnap.data());
        if (docSnap.data().email == userEmail) {
          // console.log(docSnap.data());
          let newUserData = { ...docSnap.data(), groceryList: myArray };
          setDoc(doc(database, "UserData", auth.currentUser!.uid), newUserData);
        }
      });
    });
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

      {/* grocery name input textbox */}
      <Grid item xs={8}>
        <TextField
          id="GroceryNames"
          label="Enter Grocery Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      {/* grocery quantity input textbox */}
      <Grid item xs={8}>
        <TextField
          id="GroceryQuantities"
          label="Enter Grocery Quantity"
          variant="outlined"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </Grid>

      {/* submit grocery form button */}
      <Grid item xs={8}>
        <Button
          variant="contained"
          onClick={() => addGroceries(name, quantity!, id)}
        >
          Enter
        </Button>
      </Grid>

      {/* display grocery list */}
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
                  <TableCell align="right" style={numStyle}>
                    {" "}
                    x {item.quantity}
                  </TableCell>
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
