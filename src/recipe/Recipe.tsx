import type {Recipe} from "@/types/Recipe";

const Recipe = ({recipe}:{recipe:Recipe}) => {
    return (
        <div>
            {recipe.title} 
        </div>
    );
};

export default Recipe;