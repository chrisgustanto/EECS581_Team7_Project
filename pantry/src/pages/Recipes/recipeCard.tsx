import React, {FunctionComponent} from 'react';
import { IngredientInterface, RecipeInterface } from '../../interfaces';



const RecipeCard: FunctionComponent<Props> = ({recipe}) => {

	const formattedIngredients: string[] = [];
	recipe.ingredients?.forEach(ingredient => formattedIngredients.push(`${ingredient}, `));

  return (
	<>
		<div>{recipe.name} - {formattedIngredients} - {recipe.directions}</div>
	</>
  )
}

interface Props {
	recipe: RecipeInterface
}

export default RecipeCard;