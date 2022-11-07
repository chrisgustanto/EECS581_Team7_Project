import React, {FunctionComponent} from 'react';
import { IngredientInterface, RecipeInterface } from '../../interfaces';
import './recipeCard.css';



const RecipeCard: FunctionComponent<Props> = ({recipe}) => {

	const formattedIngredients: string[] = [];
	recipe.ingredients?.forEach(ingredient => formattedIngredients.push(`${ingredient}, `));

  return (
	<>
		<div id='card'>
			<div id='name'>
				{recipe.name}
			</div>
			<div id='directions'>
				Directions: {recipe.directions}
			</div>
			<div id='ingredients'>
				Ingredients: {formattedIngredients}
			</div>
		</div>
	</>
  )
}

interface Props {
	recipe: RecipeInterface
}

export default RecipeCard;