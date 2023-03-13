//auto-generated interface from http request to spoonacular api

export interface apiRecipeInterface {
    id:                    number;
    title:                 string;
    image:                 string;
    imageType:             ImageType;
    usedIngredientCount:   number;
    missedIngredientCount: number;
    missedIngredients:     SedIngredient[];
    usedIngredients:       SedIngredient[];
    unusedIngredients:     SedIngredient[];
    likes:                 number;
}

export enum ImageType {
    Jpg = "jpg",
}

export interface SedIngredient {
    id:            number;
    amount:        number;
    unit:          string;
    unitLong:      string;
    unitShort:     string;
    aisle:         string;
    name:          string;
    original:      string;
    originalName:  string;
    meta:          string[];
    image:         string;
    extendedName?: string;
}
