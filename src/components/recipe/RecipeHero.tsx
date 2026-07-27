import {RecipeType} from "@/types/Recipe";

interface RecipeHeroProps {
    recipe: RecipeType;
}

export default function RecipeHero({recipe}:RecipeHeroProps) {
    const {title, image}=recipe;
    return (
        <figure className="relative h-[32rem] overflow-hidden">
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0  bg-gradient-to-br from-gradient-from to-gradient-to opacity-60"/>

            <h1 className="absolute bottom-6 left-1/2 -translate-x-1/2 rotate-[-3deg] bg-gradient-to-r from-primary to-primary-hover px-10 py-4 text-center text-4xl font-semibold uppercase tracking-wide text-white shadow-xl"
            >
                {recipe.title}
            </h1>
        </figure>
    );
}