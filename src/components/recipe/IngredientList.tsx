import IngredientItem from "./IngredientItem";
import {IngredientType} from "@/types/Recipe";

interface IngredientsProps {
    ingredients: IngredientType[];
}
const IngredientList = ({ingredients}:IngredientsProps) => {
    return (
        <section className=" px-[8rem] py-[3rem] ">
            <h2 className='mb-10 text-3xl font-bold text-primary uppercase tracking-wide text-center'>
                Recipe Ingredients
            </h2>
            <ul className="grid md:grid-cols-2 gap-12">
                {ingredients.map((ingredient,index) => (
                      <IngredientItem ingredient={ingredient} key={`${ingredient.description}-${index}`} />
                ))}
            </ul>

        </section>
    );
};

export default IngredientList;