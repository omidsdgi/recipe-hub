import {RecipeType} from "@/types/Recipe";
import {API_URL} from "@/config/constants";

export async function getRecipe(id: string): Promise<RecipeType> {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}${res.status}`);

    console.log(data)
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

