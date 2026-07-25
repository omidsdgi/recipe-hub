export interface Ingredient {
    quantity:number;
    unit:string;
    description:string;
}

export interface Recipe {
    id: string;
    title: string;
    publisher: string;
    sourceUrl: string;
    image: string;
    servings: number;
    cookingTime: number;
    ingredients:Ingredient[];
}