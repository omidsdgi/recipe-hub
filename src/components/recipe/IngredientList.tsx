import IngredientItem from "./IngredientItem";
import {IngredientType} from "@/types/Recipe";

interface IngredientsProps {
    ingredients: IngredientType[];
}
const IngredientList = ({ingredients}:IngredientsProps) => {
    return (
        <section>
            <h2>
                Recipe Ingredients
            </h2>
            <ul>
                {ingredients.map((ingredient,index) => (
                      <IngredientItem ingredient={ingredient} key={`${ingredient.description}-${index}`} />
                ))}
            </ul>

        </section>
    );
};

export default IngredientList;