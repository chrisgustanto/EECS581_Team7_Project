import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
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
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
