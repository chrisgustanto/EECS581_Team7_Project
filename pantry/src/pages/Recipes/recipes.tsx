import React, { useState, Fragment, FunctionComponent } from "react";
import Grid from "@mui/material/Grid";
import { IngredientInterface, RecipeInterface } from "../../interfaces";
import RecipeCard from "./recipeCard";
import { TextField, Button, Box } from "@mui/material";
// import { MultiSelectCheckBox } from 'multi-select-checkbox/dist/MultiSelectCheckBox';

const Recipes: FunctionComponent<Props> = ({ recipeList, ingredientList }) => {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState<string[]>([]);
  const [directions, setDirections] = useState("");
  const [idk, setIdk] = useState<number>(0);

  function addRecipe(
    inputName: string,
    inputIngredients: string[],
    inputDirections: string
  ) {
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
        <Grid item xs={8}>
          <h2>Add Recipe</h2>
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="RecipeName"
            label="Enter Recipe Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>

        <Grid item xs={8}>
          {/* <h4>Ingredient Options: </h4> */}
          <Box display="block">
            {ingredientList.map((ingredient, index) => {
              return (
                <div key={index}>
                  <input
                    value={ingredient.name}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span>{ingredient.name}</span>
                </div>
              );
            })}
          </Box>
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="RecipeInstructions"
            label="Enter Recipe Instructions"
            variant="outlined"
            value={directions}
            onChange={(event) => setDirections(event.target.value)}
          />
        </Grid>

        <Grid item xs={8}>
          <Button
            variant="contained"
            onClick={() => addRecipe(name, checked, directions)}
          >
            Add
          </Button>
        </Grid>

        <Grid item xs={8}>
          <h2>Recipes: </h2>
          {recipeList.map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} />;
          })}
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
