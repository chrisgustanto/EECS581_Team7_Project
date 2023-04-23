import React, { useState } from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { getAuth, onAuthStateChanged} from "firebase/auth";


const Navbar = () => {

	const auth = getAuth()

	const[userState, setUserState] = useState()

	onAuthStateChanged(auth, (user) => {
            if(user){
			console.log("user is signed in!!");
			setUserState(true);
		} else {
                  console.log("No user is signed in");
			setUserState(false);
            }
      })

return (
	<>
	<Nav>
		<NavMenu>
			<NavLink to="/" activeStyle text-decoration='none'>
				Home
			</NavLink>
			<div class="verticalLine"></div>
			<NavLink to="/ingredients" activeStyle>
				Ingredients
			</NavLink>
			<NavLink to="/recipes" activeStyle>
				Recipes
			</NavLink>
			<NavLink to="/meal_plan" activeStyle>
				Meal Plan
			</NavLink>
			<NavLink to="/grocery_list" activeStyle>
				Grocery List
			</NavLink>
			{userState === true &&
				<NavLink to="/account" activeStyle>
				Account
				</NavLink>
			}

			{userState === false &&
				<NavLink to="/login" activeStyle>
				Account
				</NavLink>
			}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
