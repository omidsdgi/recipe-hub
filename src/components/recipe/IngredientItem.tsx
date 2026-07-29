import {IngredientType} from "@/types/Recipe";
import {Check} from "lucide-react";

interface IngredientItemProps {
    ingredient: IngredientType
}

const IngredientItem = ({ingredient}: IngredientItemProps) => {
    const {quantity, unit, description} = ingredient;
    return (
        <li>
            <Check />
            <span> </span>
            <p >{quantity}
                {unit && (
                    <span >{unit}
                        {unit}
                </span>)}
                {description}
            </p>
        </li>
    );
};

export default IngredientItem;
