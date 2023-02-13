import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
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
			<NavLink to="/account" activeStyle>
				Account
			</NavLink>
			<NavLink to="/login" activeStyle>
				Login
			</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
