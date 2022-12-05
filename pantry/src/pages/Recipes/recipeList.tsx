import React, {FunctionComponent} from 'react';
import Recipe from './recipe';
import { Grid } from '@mui/material';
import { apiRecipeInterface } from './RecipeInterface';
import { NewsHeaderCard } from 'react-ui-cards';

const RecipeList: FunctionComponent<Props> = ({recipeData}) => {
	// const nutrients = recipeData.nutrients;

	return (
		<Grid container>
			{
				recipeData.map((elem) => {
					return (
						<Grid item>
							<NewsHeaderCard title={elem.title} author='' date='' href='' thumbnail={elem.image} />
						</Grid>
					)
				})
			}
		</Grid>
	)
}

interface Props {
	recipeData: apiRecipeInterface[]
}

export default RecipeList;