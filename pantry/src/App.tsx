import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Ingredients from "./pages/ingredients";
import Recipes from "./pages/recipes";
import MealPlan from "./pages/meal_plan";
import GroceryList from "./pages/grocery_list";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/meal_plan" element={<MealPlan />} />
        <Route path="/grocery_list" element={<GroceryList />} />
      </Routes>
    </Router>
  );
}

export default App;
