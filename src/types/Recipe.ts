export interface Ingredient {
    quantity:number;
    unit:string;
    description:string;
}

export interface RecipeType {
    id: string;
    title: string;
    publisher: string;
    sourceUrl: string;
    image: string;
    servings: number;
    cookingTime: number;
    ingredients:Ingredient[];
}