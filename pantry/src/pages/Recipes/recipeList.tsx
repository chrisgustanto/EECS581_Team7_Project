import React, {FunctionComponent} from 'react';
import Recipe from './recipe';

const wordStyle = {
	fontFamily: "Rockwell",
	color: "rgb(210, 132, 33)",
	fontSize: "25px",
  };

const RecipeList: FunctionComponent<Props> = ({recipeData}) => {
	// const nutrients = recipeData.nutrients;

	return (
		<main>
			<section className='nutrients'>
				<h1 style={wordStyle}>Macros</h1>
				<ul>
					{recipeData.title}
					{/* <li>Calories: {nutrients.calories.toFixed(0)}</li>
					<li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
					<li>Fat: {nutrients.fat.toFixed(0)}</li>
					<li>Protein: {nutrients.protein.toFixed(0)}</li> */}
				</ul>
			</section>
		</main>
	)
}

interface Props {
	recipeData: any
}

export default RecipeList;