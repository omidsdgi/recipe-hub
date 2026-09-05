import {IngredientType} from "@/types/Recipe";
import {Check} from "lucide-react";
import {Fraction} from 'fractional'

interface IngredientItemProps {
    ingredient: IngredientType
}

const IngredientItem = ({ingredient}: IngredientItemProps) => {
    const {quantity, unit, description} = ingredient;
    return (

        <li className="grid grid-cols-[2.4rem_4rem_1fr] items-start ">
            <Check className='mt-1 size-8 shrink-0 text-primary' strokeWidth={2}/>
            <span className="text-2xl font-medium text-foreground">{new Fraction (quantity) ?? 'null'}</span>
            <p className="text-2xl leading-8 text-foreground">{quantity}
                {unit && (
                    <span className='mr-2 font-semibold '>{unit}
                        {unit}
                </span>)}
                {description}
            </p>
        </li>
    );
};

export default IngredientItem;
