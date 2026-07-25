import {RecipeType} from "@/types/Recipe";

const Recipe = ({recipe}:{recipe:RecipeType}) => {
    return (
        <div>
            {recipe.title}
        </div>
    );
};

export default Recipe;