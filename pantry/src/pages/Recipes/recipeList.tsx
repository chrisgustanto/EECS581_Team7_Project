import React, {FunctionComponent, useState} from 'react';
import Recipe from './recipe';
import { Grid } from '@mui/material';
import { apiRecipeInterface } from './RecipeInterface';
import { TextField, Button, Box } from "@mui/material";
import { NewsHeaderCard } from 'react-ui-cards';
import { addDoc, collection, getFirestore } from "@firebase/firestore"
import { firestore } from "../../firebase_setup/firebase"
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import { firebaseApp } from "../../firebase_setup/firebase";
import { db } from "../../firebase_setup/firebase";

//init services
const auth = getAuth(firebaseApp);

const RecipeList: FunctionComponent<Props> = ({recipeData, savedRecipes}) => {


	//update existing ingredient in list
	function updateSavedRecipes(id: number) {
		if(savedRecipes.includes(id)) {
			return;
		}
		savedRecipes.push(id);	
		checkLoggedIn();
	  }
	
	  function checkLoggedIn(): boolean {
		auth.onAuthStateChanged(user => {
		  if(user) {
			console.log('logged in');
			updateDatabase(user.email!);
			return true;
		  } else {
			console.log('not logged in');
			return false;
		  }
		})
		return false;
	  }

	function updateDatabase(userEmail: string) {
		// console.log(auth.currentUser);
		const colRef = collection(db, 'UserData');
		getDocs(colRef).then(querySnap => {
		  querySnap.docs.forEach(docSnap => {
			// console.log(docSnap.data());
			if(docSnap.data().email == userEmail) {
			  // console.log(docSnap.data());
			  let newUserData = {...docSnap.data(), savedRecipes: savedRecipes};
			  setDoc(doc(db, 'UserData', auth.currentUser!.uid), newUserData);
			}
		  })
		})
	  }

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
							<div>
								<NewsHeaderCard title={elem.title} author='' date='' href={link} thumbnail={elem.image} />
								<Button
									variant='contained'
									onClick={() => updateSavedRecipes(elem.id)}>
									Save
								</Button>
							</div>
						</Grid>
					)
				})
			}
		</Grid>
	)
}

//class parameter interface
interface Props {
	recipeData: apiRecipeInterface[];
	savedRecipes: number[];
}

export default RecipeList;