import {RecipeType} from "@/types/Recipe";

interface RecipeHeroProps {
    recipe: RecipeType;
}

export default function RecipeHero({recipe}:RecipeHeroProps) {
    const {title, image}=recipe;
    return (
        <figure className="relative h-[32rem] ">
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0  bg-gradient-to-br from-gradient-from to-gradient-to opacity-60"/>

            <h1
                className="absolute bottom-0 left-1/2 z-10 w-1/2 -translate-x-1/2 translate-y-1/5 -skew-y-6 text-center text-5xl font-bold uppercase leading-[1.95] text-white max-md:w-[70%]"
            >
  <span
      className=" box-decoration-clone bg-gradient-to-br from-gradient-from to-gradient-to px-8 py-5"
  >
    {recipe.title}
  </span>
            </h1>
        </figure>
    );
}