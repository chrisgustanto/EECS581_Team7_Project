export interface DataInterface {
    name?: string;
}

export interface IngredientInterface extends DataInterface {
    quantity?: number;
    id?: number;
}

export interface RecipeInterface extends DataInterface {
    directions?: string;
    ingredients?: string[];
}

export interface GroceryListInterface extends DataInterface {
    quantity?: number;
    id?: number;
}

export interface MealPlanInterface extends DataInterface {
    day?: string;
    diet?: string;
    id?: number;
}