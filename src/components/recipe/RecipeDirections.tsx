import {Button} from "@base-ui/react";
import {ArrowRight} from "lucide-react";

interface RecipeDirectionsProps {
    publisher: string;
    sourceUrl: string;
}
const RecipeDirections = ({publisher,sourceUrl}:RecipeDirectionsProps) => {
    return (
        <section>
            <h2>
                How to cook it
            </h2>
            <p>
                This recipe was carefully designed and tested {" "}
                <span>
                    {publisher}
                </span>
                . Please check out directions at their website.
            </p>
            <Button>
                <a href={sourceUrl}>
                Directions
                    <ArrowRight/>
                </a>

            </Button>
        </section>
    );
};

export default RecipeDirections;