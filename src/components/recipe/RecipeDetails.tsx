import {RecipeType} from "@/types/Recipe";
import {Bookmark, Clock, MinusCircle, PlusCircle, User} from "lucide-react";
import {Button} from "@/components/ui/button";

interface RecipeDetailsProps {
    recipe: RecipeType;
}

const RecipeDetails = ({recipe}:RecipeDetailsProps) => {
    const{cookingTime, servings}=recipe
    return (

        <section className="flex items-center justify-between w-full  py-[7.5rem] px-[8rem] ">
            {/*left*/}
            <div className="flex items-center gap-22">
                {/*cooking time*/}
                <div className="flex items-center gap-4">
                    <Clock size={26} className="text-primary" />
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-semibold ">
                            {cookingTime}
                        </span>
                        <span className="text-2xl font-semibold uppercase tracking-wide ">
                            minutes
                        </span>
                    </div>
                </div>
                    {/*servings*/}
                    <div className="flex items-center gap-3">
                        <User size={24} className="text-primary" />
                        <div className="flex items-baseline gap-2 ">
                            <span className="text-2xl font-semibold">22</span>
                            <span className="text-2xl font-semibold ">
                                {servings}
                            </span>
                        </div>
                        <div className="ml-4 flex items-center gap-2">
                            <Button size="icon" variant='ghost' className='rounded-full' arial-label="Decrease servings" >
                                <MinusCircle className='size-8 text-primary' />
                            </Button>
                            <Button size="icon" variant='ghost' className='rounded-full' arial-label="Increase servings" >
                                <PlusCircle className='size-8 text-primary' />
                            </Button>
                        </div>
                    </div>
            </div>
                {/*right*/}
                <div className="flex items-center gap-10">
                    <User size='24' className="text-primary" />
                    <Button size='icon-5xl' variant='bookmark' aria-label="Bookmark recipe" >
                        <Bookmark className='size-10 fill-background stroke-background' />
                    </Button>

            </div>
        </section>
    );
};

export default RecipeDetails;