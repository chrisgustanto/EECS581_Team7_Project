import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MealPlanInterface } from "./../interfaces";

const MealPlan = () => {
  // array of meal plans used to store data
  interface MealPlanArray extends Array<MealPlanInterface> {}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        component="form"
        sx={{
          flexDirection: "column",
          p: 1,
          m: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid item>
          <h1>Meal Plan!</h1>
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="DayOfTheWeek"
            label="Day of the week"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={8}>
          <TextField
            id="Meal"
            label="Meal (breakfast, lunch, dinner)"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={8}>
          <Button variant="contained">Add Meal</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MealPlan;
