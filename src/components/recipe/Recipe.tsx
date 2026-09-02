'use client'

import {useRecipe} from "@/hooks/useRecipe";
import {Spinner, Error, RecipeHero, RecipeDetails, IngredientList, RecipeDirections} from "@/components";
import EmptyState from "@/components/shared/EmptyState";

const Recipe = ({id}:{id:string}) => {
    const {recipe, isLoading, error}=useRecipe(id)

    if (!isLoading && !error && !recipe) return <EmptyState/>
    if (isLoading) return <Spinner/>
    if (error) return <Error message={error} />
    if(!recipe) return null

    return (
        <article className='flex flex-col h-full w-full bg-muted text-3xl '>
            <RecipeHero recipe={recipe} />
            <RecipeDetails recipe={recipe}/>
            <IngredientList ingredients={recipe.ingredients}/>
            <RecipeDirections publisher={recipe.publisher} sourceUrl={recipe.sourceUrl} />
        </article>
    );
};

export default Recipe;