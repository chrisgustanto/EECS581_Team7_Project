import React, {FunctionComponent} from 'react';
import { IngredientInterface, RecipeInterface } from '../../interfaces';
import './recipeCard.css';



const RecipeCard: FunctionComponent<Props> = ({recipe}) => {

	const formattedIngredients: string[] = [];
	recipe.ingredients?.forEach(ingredient => formattedIngredients.push(`${ingredient}, `)); //format ingredients to be displayed

  return (
	<>
		{/* display card for user-created recipes, note this has been replaced by the spoonacular api recipe display card */}
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

//interface for class parameter
interface Props {
	recipe: RecipeInterface
}

export default RecipeCard;