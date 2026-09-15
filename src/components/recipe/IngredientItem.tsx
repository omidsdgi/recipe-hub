import {IngredientType} from "@/types/Recipe";
import {Check} from "lucide-react";
import {Fraction} from "fractional";

interface IngredientItemProps {
    ingredient: IngredientType;
}

const IngredientItem = ({ingredient}: IngredientItemProps) => {
    const {quantity, unit, description} = ingredient;
    const formattedQuantity = quantity == null ? "" : new Fraction(quantity).toString();

    return (
        <li className="grid grid-cols-[2.4rem_4rem_1fr] items-start">
            <Check className="mt-1 size-8 shrink-0 text-primary" strokeWidth={2}/>
            <span className="text-2xl font-medium text-foreground">
                {formattedQuantity}
            </span>
            <p className="text-2xl leading-8 text-foreground">
                {unit && <span className="mr-2 font-semibold">{unit}</span>}
                {description}
            </p>
        </li>
    );
};

export default IngredientItem;
