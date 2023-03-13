import React, {FunctionComponent} from 'react';
import Recipe from './recipe';
import { Grid } from '@mui/material';
import { apiRecipeInterface } from './RecipeInterface';
import { NewsHeaderCard } from 'react-ui-cards';

const RecipeList: FunctionComponent<Props> = ({recipeData}) => {

	return (
		<Grid container>
			{
				//display cards for recipes retrieved from spoonacular api
				recipeData.map((elem) => {
					//create link that takes user to the specific recipe page on the spoonacular website which displays a lot more dietary information
					let link = 'https://spoonacular.com/recipes/' + elem.title.replace(' ', '-') + '-' + elem.id;
					return (
						//create display card
						<Grid item>
							<NewsHeaderCard title={elem.title} author='' date='' href={link} thumbnail={elem.image} />
						</Grid>
					)
				})
			}
		</Grid>
	)
}

//class parameter interface
interface Props {
	recipeData: apiRecipeInterface[]
}

export default RecipeList;