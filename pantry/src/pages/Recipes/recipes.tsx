import React, { useState, Fragment, FunctionComponent } from "react";
import './recipes.css';
import Grid from "@mui/material/Grid";
import { IngredientInterface, RecipeInterface } from "../../interfaces";
import RecipeCard from "./recipeCard";
import RecipeList from './recipeList';
import { TextField, Button, Box } from "@mui/material";
import Multiselect from 'multiselect-react-dropdown';
import { json } from "stream/consumers";
import { apiRecipeInterface } from "./RecipeInterface";

//https://codesandbox.io/s/9j7m6mmw3o?file=/src/Container/index.js



const Recipes: FunctionComponent<Props> = ({ recipeList, ingredientList }) => {
	const [name, setName] = useState("");
	const [checkedIngredients, setcheckedIngredients] = useState<string[]>([]);
	const [directions, setDirections] = useState("");
	const [idk, setIdk] = useState<number>(0);
	const [recipeData, setRecipeData] = useState<apiRecipeInterface[]>([]);

	function addRecipe(inputName: string, inputIngredients: string[], inputDirections: string) {
		let recipe = {
			name: inputName,
			ingredients: inputIngredients,
			directions: inputDirections,
		};
		recipeList.push(recipe);
		console.log(recipeList);
		setIdk(idk + 1);
	}

	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		var updatedList = [...checkedIngredients];
		if (event.target.checked) {
			updatedList = [...checkedIngredients, event.target.value];
		} else {
			updatedList.splice(checkedIngredients.indexOf(event.target.value), 1);
		}
		setcheckedIngredients(updatedList);
	};

	const onSubmit = (data: any) => {
		console.log(data);
	};

	function getrecipeData() {
		let url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
		let key = '&number=12&apiKey=112c9e46de254a86a707eb74c737b3a1';
		let items = '';
		for(let i=0; i<checkedIngredients.length; i++) {
			if(checkedIngredients.length > 1 && i == 0) {
				items = items + checkedIngredients[i].toLowerCase() + ',';
			} else {
				items = items + '+' + checkedIngredients[i].toLowerCase() + ',';
			} 
		}
		items = items.slice(0, items.length - 1); //remove ',' at end of string
		let finalURL = url + items + key;

		fetch(finalURL)
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
				<div id='custom-recipe-container'>
					<h3>Custom Recipe</h3>

					<TextField
						id="recipe-name"
						label="Recipe Name"
						variant="outlined"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>

					<Multiselect
						displayValue="key"
						onKeyPressFn={function noRefCheck(){}}
						onRemove={function noRefCheck(){}}
						onSearch={function noRefCheck(){}}
						onSelect={function noRefCheck(){}}
						options={
							ingredientList.map(ingredient => {
								return {key: ingredient.name}
							})
						}
					/>

					<TextField
						id="recipe-instructions"
						label="Recipe Instructions"
						variant="outlined"
						multiline
						value={directions}
						onChange={(event) => setDirections(event.target.value)}
					/>

					<Button
						variant="contained"
						onClick={() => addRecipe(name, checkedIngredients, directions)}>
						Add Recipe
					</Button>

				</div>

				<Box display='block'>
					{
						ingredientList.map((ingredient, index) => {
							return (
								<div key={index}>
									<input value={ingredient.name} type="checkbox" onChange={handleCheck} />
									<span>{ingredient.name}</span>
								</div>
							)
						})
					}
				</Box>

				<Button
					variant='contained'
					onClick={getrecipeData}>
					Get Meal Data
				</Button>

				{recipeData.length>0 && <RecipeList recipeData={recipeData} />}
				
			</Grid>
		</>
	);
};

interface Props {
	recipeList: RecipeInterface[];
	ingredientList: IngredientInterface[];
}

export default Recipes;
