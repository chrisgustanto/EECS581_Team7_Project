import React, { useState, useRef } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Ingredients from "./pages/ingredients";
import Recipes from "./pages/Recipes/recipes";
import MealPlan from "./pages/meal_plan";
import GroceryList from "./pages/grocery_list";
import { IngredientInterface, RecipeInterface } from './interfaces';
import SignUp from "./pages/signup";
import handleSubmit from "./handlers/handleSubmit";
import Login from "./pages/login";
import Account from "./pages/account";
import AddItem from "./handlers/AddItem"; // on change





function App() {

  //example ingredient list
  const [ingredientList, setIngredientList] = useState<IngredientInterface[]>([{
    name: 'chicken',
    quantity: 1
  }, {
    name: 'beef',
    quantity: 2
  }, {
    name: 'flour',
    quantity: 3
  }, {
    name: 'butter',
    quantity: 4
  }, {
    name: 'egg',
    quantity: 5
  }, {
    name: 'bun',
    quantity: 6
  }, {
    name: 'cheese',
    quantity: 7
  }, {
    name: 'tortilla',
    quantity: 8
  }, {
    name: 'chocolate',
    quantity: 9
  }]);
  const [recipeList, setRecipeList] = useState<RecipeInterface[]>([{
    name: 'Quesadilla',
    ingredients: ['tortilla', 'chicken', 'cheese'],
    directions: 'Put chicken and cheese in tortilla'
  }, {
    name: 'Cheeseburger',
    ingredients: ['bun', 'beef', 'cheese'],
    directions: 'Put beef and cheese in bun'
  }, {
    name: 'Quesadilla',
    ingredients: ['tortilla', 'chicken', 'cheese'],
    directions: 'Put chicken and cheese in tortilla'
  }, {
    name: 'Cheeseburger',
    ingredients: ['bun', 'beef', 'cheese'],
    directions: 'Put beef and cheese in bun'
  }]);

  // testing firebase connection
  const dataRef = useRef<any>()
  
  const submitHandler = (e: any) => {
    e.preventDefault()
    handleSubmit(dataRef.current!['value'])
    dataRef.current!['value'] = ""
}

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients ingredientList={ingredientList}/>} />
        <Route path="/recipes" element={<Recipes recipeList={recipeList} ingredientList={ingredientList}/>} />
        <Route path="/meal_plan" element={<MealPlan recipeList={recipeList} ingredientList={ingredientList}/>} />
        <Route path="/grocery_list" element={<GroceryList />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/signup" element={<SignUp ingredientList={ingredientList}/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      
    </Router>
    
  );
}

export default App;
