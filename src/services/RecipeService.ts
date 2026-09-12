import {RecipeType} from "@/types/Recipe";
import {API_URL, TIMEOUT_SEC} from "@/config/constants";
import {timeout} from "@/helpers/timeout";

export  interface SearchResultType{
    id: string;
    title: string;
    publisher: string;
    image: string;
}

export async function getRecipe(id: string): Promise<RecipeType> {
    const res = await Promise.race([
        fetch(`${API_URL}${id}`),
        timeout(TIMEOUT_SEC)
    ])
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

export async function loadSearchResults  (
    query:string
):Promise<SearchResultType[]>  {
    const res = await Promise.race([
        fetch(`${API_URL}?search=${query}`),
        timeout(TIMEOUT_SEC)
    ])

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}${res.status}`);
    console.log(data.data.recipes);

    return data.data.recipes.map(
        (recipe:{
            id:string,
            title:string,
            publisher:string,
            image_url:string,
    }) => ({
            id:recipe.id,
            title:recipe.title,
            publisher:recipe.publisher,
            image:recipe.image_url,
    })
    )
}