import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { FunctionComponent, useState } from 'react';
import { IngredientInterface } from '../../interfaces';
import Multiselect from 'multiselect-react-dropdown';

//https://mui.com/material-ui/react-dialog/

const FormDialog: FunctionComponent<Props> = ({ingredientList}) => {
  const [open, setOpen] = React.useState(false);
	const [name, setName] = useState("");
	const [directions, setDirections] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
		setName('');
		setDirections('');
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Custom Recipe
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
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
						id="recipe-instructions"
						label="Recipe Instructions"
						variant="outlined"
						multiline
						value={directions}
						onChange={(event) => setDirections(event.target.value)}
					/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create Recipe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

interface Props {
	ingredientList: IngredientInterface[];
}

export default FormDialog;