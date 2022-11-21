import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import { useEffect, useState } from "react";
import { MealPlanInterface } from "./../interfaces";

const MealPlan = () => {
  // array of meal plans used to store data
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
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
      <h2> Welcome to Pantry! </h2>
      <h3> Please Choose Meals For The Week: </h3>

      <h3>Monday Meals</h3>
      
      <option>Select Breakfast</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>
      <Button onClick={() => addPlan(name, "Monday", "Breakfast", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Lunch</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>
      <Button onClick={() => addPlan(name, "Monday", "Lunch", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Dinner</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan(name, "Monday", "Dinner", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <h3>Tuesday Meals</h3>

      <option>Select Breakfast</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>
      <Button onClick={() => addPlan(name, "Tuesday", "Breakfast", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Lunch</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>
      <Button onClick={() => addPlan(name, "Tuesday", "Lunch", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Dinner</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan(name, "Tuesday", "Dinner", id)}>Save</Button>  

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <h3>Wednesday Meals</h3>

      <option>Select Breakfast</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>
      <Button onClick={() => addPlan(name, "Wednesday", "Breakfast", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Lunch</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>
      <Button onClick={() => addPlan(name, "Wednesday", "Lunch", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Dinner</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan(name, "Wednesday", "Dinner", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <h3>Thursday Meals</h3>

      <option>Select Breakfast</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>
      <Button onClick={() => addPlan(name, "Thursday", "Breakfast", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Lunch</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>
      <Button onClick={() => addPlan(name, "Thursday", "Lunch", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Dinner</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan(name, "Thursday", "Dinner", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <h3>Friday Meals</h3>

      <option>Select Breakfast</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>
      <Button onClick={() => addPlan(name, "Friday", "Breakfast", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Lunch</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>
      <Button onClick={() => addPlan(name, "Friday", "Lunch", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Dinner</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan(name, "Friday", "Dinner", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <h3>Saturday Meals</h3>

      <option>Select Breakfast</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>
      <Button onClick={() => addPlan(name, "Saturday", "Breakfast", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Lunch</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>
      <Button onClick={() => addPlan(name, "Saturday", "Lunch", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Dinner</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan(name, "Saturday", "Dinner", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <h3>Sunday Meals</h3>

      <option>Select Breakfast</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Sausage and Eggs</option>
        <option>Pancakes</option>
        <option>Acai Bowl</option>
        <option>Fruit Salad</option>
        <option>Waffles</option>
      </select>
      <Button onClick={() => addPlan(name, "Sunday", "Breakfast", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Lunch</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Chicken Soup</option>
        <option>Lo Mein Noodles</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Egg Salad</option>
      </select>
      <Button onClick={() => addPlan(name, "Sunday", "Lunch", id)}>Save</Button>

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      <option>Select Dinner</option>
      <select value={name} onChange={(e) =>setName(e.target.value)} >
        <option></option>
        <option>Spaghetti</option>
        <option>Chicken Soup</option>
        <option>Fried Rice</option>
        <option>Burritos</option>
        <option>Potato Soup</option>
      </select>
      <Button onClick={() => addPlan(name, "Sunday", "Dinner", id)}>Save</Button> 

      <div>
        {myArray.map((item)=>(
          <div className="itemDis" key={item.id}>
            <p>{item.name}    DAY:{item.day}    DIET:{item.diet}    ID:{item.id}</p>
          </div>
        ))}
      </div>

      </Box>
  );
  //return <h1>MEAL PLAN!!!!</h1>;
};
export default MealPlan;