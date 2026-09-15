import {RecipeType} from "@/types/Recipe";
import RecipeHero from "./RecipeHero";
import RecipeDetails from "./RecipeDetails";
import IngredientList from "./IngredientList";
import RecipeDirections from "./RecipeDirections";

interface RecipeProps {
    recipe: RecipeType;
}

const Recipe = ({recipe}: RecipeProps) => {
    return (
        <article className="flex h-full w-full flex-col bg-muted text-3xl">
            <RecipeHero recipe={recipe} />
            <RecipeDetails recipe={recipe}/>
            <IngredientList ingredients={recipe.ingredients}/>
            <RecipeDirections publisher={recipe.publisher} sourceUrl={recipe.sourceUrl}/>
        </article>
    );
};

export default Recipe;
