export interface DataInterface {
    name?: string;
}

export interface IngredientInterface extends DataInterface {
    quantity?: number;
}

export interface RecipeInterface extends DataInterface {
    type?: string;
    label?: string;
}

export interface GroceryListInterface extends DataInterface {
    quantity?: number;
    price?: number;
}

export interface MealPlanInterface extends DataInterface {
    day?: string;
    diet?: string;
}