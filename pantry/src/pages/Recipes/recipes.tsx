import React, { useState, Fragment, FunctionComponent } from "react";
import './recipes.css';
import Grid from "@mui/material/Grid";
import { IngredientInterface, RecipeInterface } from "../../interfaces";
import RecipeCard from "./recipeCard";
import RecipeList from './recipeList';
import { TextField, Button, Box } from "@mui/material";
import { json } from "stream/consumers";
import { apiRecipeInterface } from "./RecipeInterface";
import FormDialog from "./dialogBox";

//https://codesandbox.io/s/9j7m6mmw3o?file=/src/Container/index.js

const wordStyle = {
	fontFamily: "Rockwell",
	color: "rgb(113, 9, 104)",
	fontSize: "25px",
  };

const Recipes: FunctionComponent<Props> = ({ recipeList, ingredientList }) => {

	const [checkedIngredients, setcheckedIngredients] = useState<string[]>([]);
	const [recipeData, setRecipeData] = useState<apiRecipeInterface[]>([]);

	//add custom recipe to user recipe list, need proper interfacing between user recipes and spoonacular recipes
	function addRecipe(inputName: string, inputIngredients: string[], inputDirections: string) {
		let recipe = {
			name: inputName,
			ingredients: inputIngredients,
			directions: inputDirections,
		};
		recipeList.push(recipe);
		console.log(recipeList);
	}

	//create array of user-checked ingredients
	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		var updatedList = [...checkedIngredients]; //add currently checked ingredients to array
		if (event.target.checked) {
			updatedList = [...checkedIngredients, event.target.value]; //update array with newly checked ingredients
		} else {
			updatedList.splice(checkedIngredients.indexOf(event.target.value), 1); //remove unchecked ingredients
		}
		setcheckedIngredients(updatedList); //update class member with updated checked ingredients
	};

	// const onSubmit = (data: any) => {
	// 	console.log(data);
	// };

	function getrecipeData() {
		let url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='; //spoonacular api url
		let key = '&number=12&apiKey=112c9e46de254a86a707eb74c737b3a1'; //account key
		let items = '';
		for(let i=0; i<checkedIngredients.length; i++) { //add user-checked ingredients to a string that's properly delimited by commas
			if(checkedIngredients.length > 1 && i == 0) {
				items = items + checkedIngredients[i].toLowerCase() + ',';
			} else {
				items = items + '+' + checkedIngredients[i].toLowerCase() + ',';
			} 
		}
		items = items.slice(0, items.length - 1); //remove ',' at end of string
		let finalURL = url + items + key; //put final url together

		fetch(finalURL) //send get request to spoonacular api
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setRecipeData(data);
		})
		.catch(() => {
			console.log("error fetching meal data");
		})
	}


	return (
		<>
			<Grid
				container
				spacing={2}
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{
				flexDirection: "column",
				p: 1,
				m: 1,
				}}
			>

				{/* custom recipe button */}
				<FormDialog ingredientList={ingredientList}></FormDialog> 

				<Box display='block'>
					{
						//create checkbox for each ingredient in array
						ingredientList.map((ingredient, index) => {
							return (
								<div key={index}>
									<input value={ingredient.name} type="checkbox" onChange={handleCheck} />
									<span style={wordStyle}>{ingredient.name}</span>
								</div>
							)
						})
					}
				</Box>

				{/* send get request to spoonacular api for recipes containing checked ingredients */}
				<Button 
					variant='contained'
					onClick={getrecipeData}>
					Get Meal Data
				</Button>

				{/* display recipes retrieved from spoonacular api */}
				{recipeData.length>0 && <RecipeList recipeData={recipeData} />}
				
			</Grid>
		</>
	);
};

//recipes class parameter interfaces
interface Props {
	recipeList: RecipeInterface[];
	ingredientList: IngredientInterface[];
}

export default Recipes;
