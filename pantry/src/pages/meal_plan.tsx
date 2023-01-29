import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import { useEffect, useState } from "react";
import { MealPlanInterface } from "./../interfaces";

const MealPlan = () => {
  // array of meal plans used to store data
  const [bmname, setBMName] = useState(""); const [lmname, setLMName] = useState(""); const [dmname, setDMName] = useState("");
  const [btname, setBTName] = useState(""); const [ltname, setLTName] = useState(""); const [dtname, setDTName] = useState("");
  const [bwname, setBWName] = useState(""); const [lwname, setLWName] = useState(""); const [dwname, setDWName] = useState("");
  const [bhname, setBHName] = useState(""); const [lhname, setLHName] = useState(""); const [dhname, setDHName] = useState("");
  const [bfname, setBFName] = useState(""); const [lfname, setLFName] = useState(""); const [dfname, setDFName] = useState("");
  const [bsname, setBSName] = useState(""); const [lsname, setLSName] = useState(""); const [dsname, setDSName] = useState("");
  const [buname, setBUName] = useState(""); const [luname, setLUName] = useState(""); const [duname, setDUName] = useState("");
  const [name, setName] = useState("");
  const [diet, setDiet] = useState("");
  const [id, setId] = useState<number>(0);

  const [myArray, setMyArray] = useState<MealPlanInterface[]>([]);

  function addPlan(tempName: string, tempDay: string, tempDiet: string, tempId: number){

    let plan = {name : tempName, day : tempDay, diet : tempDiet, id : tempId}
    myArray.push(plan)

    console.log("-")
    console.log(myArray[tempId])
    console.log(myArray[tempId-1])
    console.log(myArray[tempId-2])
    console.log("-")
    setId(id+1)

  }

  function addPlan2(tempB: string, tempL: string, tempD: string, tempDay: string, tempId: number){

    let plan2 = {name : tempB, day : tempDay, diet : "Breakfast", id : id}
    myArray.push(plan2)

    let plan3 = {name : tempL, day : tempDay, diet : "Lunch", id : id + 1}
    myArray.push(plan3)
    
    let plan4 = {name : tempD, day : tempDay, diet : "Dinner", id : id + 2}
    myArray.push(plan4)

    setId(id+3)

  }

  //interface MealPlanArray extends Array<MealPlanInterface> {}
  return(
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

      <h3> Choose Your Meals For The Week: </h3>

      <h3>Monday Meals</h3>

      <option>Select Breakfast</option>
      <select value={bmname} onChange={e=>setBMName(e.target.value)}>
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>

      <option>Select Lunch</option>
      <select value={lmname} onChange={(e) =>setLMName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>

      <option>Select Dinner</option>
      <select value={dmname} onChange={(e) =>setDMName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan2(bmname, lmname, dmname, "Monday", id)}>Save</Button>

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h3>Tuesday Meals</h3>

      <option>Select Breakfast</option>
      <select value={btname} onChange={(e) =>setBTName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>

      <option>Select Lunch</option>
      <select value={ltname} onChange={(e) =>setLTName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>

      <option>Select Dinner</option>
      <select value={dtname} onChange={(e) =>setDTName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan2(btname, ltname, dtname, "Tuesday", id)}>Save</Button>  

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h3>Wednesday Meals</h3>

      <option>Select Breakfast</option>
      <select value={bwname} onChange={(e) =>setBWName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>

      <option>Select Lunch</option>
      <select value={lwname} onChange={(e) =>setLWName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>

      <option>Select Dinner</option>
      <select value={dwname} onChange={(e) =>setDWName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan2(bwname, lwname, dwname, "Wednesday", id)}>Save</Button>

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h3>Thursday Meals</h3>

      <option>Select Breakfast</option>
      <select value={bhname} onChange={(e) =>setBHName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>

      <option>Select Lunch</option>
      <select value={lhname} onChange={(e) =>setLHName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>

      <option>Select Dinner</option>
      <select value={dhname} onChange={(e) =>setDHName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan2(bhname, lhname, dhname, "Thursday", id)}>Save</Button>

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h3>Friday Meals</h3>

      <option>Select Breakfast</option>
      <select value={bfname} onChange={(e) =>setBFName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>

      <option>Select Lunch</option>
      <select value={lfname} onChange={(e) =>setLFName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>

      <option>Select Dinner</option>
      <select value={dfname} onChange={(e) =>setDFName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan2(bfname, lfname, dfname, "Friday", id)}>Save</Button>

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h3>Saturday Meals</h3>

      <option>Select Breakfast</option>
      <select value={bsname} onChange={(e) =>setBSName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>

      <option>Select Lunch</option>
      <select value={lsname} onChange={(e) =>setLSName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>

      <option>Select Dinner</option>
      <select value={dsname} onChange={(e) =>setDSName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan2(bsname, lsname, dsname, "Saturday", id)}>Save</Button>

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h3>Sunday Meals</h3>

      <option>Select Breakfast</option>
      <select value={buname} onChange={(e) =>setBUName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>

      <option>Select Lunch</option>
      <select value={luname} onChange={(e) =>setLUName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>

      <option>Select Dinner</option>
      <select value={duname} onChange={(e) =>setDUName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan2(buname, luname, duname, "Sunday", id)}>Save</Button> 

      {/* <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div> */}

      </Box>
  );
  //return <h1>MEAL PLAN!!!!</h1>;
};
export default MealPlan;

