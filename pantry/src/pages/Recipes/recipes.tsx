import React, { useState, Fragment, FunctionComponent } from "react";
import './recipes.css';
import Grid from "@mui/material/Grid";
import { IngredientInterface, RecipeInterface } from "../../interfaces";
import RecipeCard from "./recipeCard";
import { TextField, Button, Box } from "@mui/material";
import Multiselect from 'multiselect-react-dropdown';


const Recipes: FunctionComponent<Props> = ({ recipeList, ingredientList }) => {
	const [name, setName] = useState("");
	const [checked, setChecked] = useState<string[]>([]);
	const [directions, setDirections] = useState("");
	const [idk, setIdk] = useState<number>(0);

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
		var updatedList = [...checked];
		if (event.target.checked) {
			updatedList = [...checked, event.target.value];
		} else {
			updatedList.splice(checked.indexOf(event.target.value), 1);
		}
		setChecked(updatedList);
	};

	const onSubmit = (data: any) => {
		console.log(data);
	};


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
						multiline
						minRows={11}
						maxRows={11}
						id="recipe-instructions"
						label="Recipe Instructions"
						variant="outlined"
						value={directions}
						onChange={(event) => setDirections(event.target.value)}
					/>

					<Button
					variant="contained"
					onClick={() => addRecipe(name, checked, directions)}>
					Add Recipe
					</Button>

				</div>

				<Grid item xs={8}>
					<h2>Recipes: </h2>
					<div id='recipe-cards-container'>
						{recipeList.map((recipe, index) => {
							return <RecipeCard key={index} recipe={recipe} />;
						})}
					</div>
				</Grid>
			</Grid>
		</>
	);
};

interface Props {
	recipeList: RecipeInterface[];
	ingredientList: IngredientInterface[];
}

export default Recipes;
