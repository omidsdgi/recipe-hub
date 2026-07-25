import {Recipe} from "@/types/Recipe";

const API_URL = "https://forkify-api.jonas.io/api/v2/recipes";

export async function getRecipe(id: string): Promise<Recipe> {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) throw new Error("Failed to fetch recipe");

    const data = await res.json();

    const {recipe} = data.data;

    return {
        id:recipe.id,
        title:recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
    }
}

