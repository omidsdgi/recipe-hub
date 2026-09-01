import {Button} from "@base-ui/react";
import {ArrowRight} from "lucide-react";

interface RecipeDirectionsProps {
    publisher: string;
    sourceUrl: string;
}
const RecipeDirections = ({
                              publisher,
                              sourceUrl
}:RecipeDirectionsProps) => {
    return (
        <section className='flex flex-col items-center px-10 text-center'>
            <h2 className='mb-8 text-4xl font-semibold'>
                How to cook it
            </h2>

            <p className="mb-10 max-w-3xl text-2xl leadivg-relaxed text-muted-foreground">
                This recipe was carefully designed and tested {" "}
                <span className="font-bold text-foreground">
                    {publisher}
                </span>
                . Please check out directions at their website.
            </p>

                <a
                    href={sourceUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center mb-10 gap-3 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to
                    px-14 py-5 font-semibold uppercase text-primary-foreground transition-transform duration-300 hover:scale-105'
                >
                <span>Directions</span>
                    <ArrowRight className="size-5" />
                </a>

        </section>
    );
};

export default RecipeDirections;