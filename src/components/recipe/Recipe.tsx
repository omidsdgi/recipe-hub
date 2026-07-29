'use client'

import {useRecipe} from "@/hooks/useRecipe";
import {Spinner, Error, RecipeHero, RecipeDetails, IngredientList, RecipeDirections} from "@/components";

const Recipe = () => {
    const {recipe, isLoading, error}=useRecipe("664c8f193e7aa067e94e8823")

    if (isLoading) return <Spinner/>
    if (error) return <Error message={error} />
    if(!recipe) return null

    return (
        <article className='flex flex-col h-full w-full bg-muted text-3xl '>
            <RecipeHero recipe={recipe} />
            <RecipeDetails recipe={recipe}/>
            <IngredientList ingredients={recipe.ingredients}/>
            <RecipeDirections recipe={recipe}/>
        </article>
    );
};

export default Recipe;