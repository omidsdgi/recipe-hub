import {Spinner} from "@/components";
import {SearchResultType} from "@/services/RecipeService";
import {RESULTS_PER_PAGE} from "@/config/constants";
import {useState} from "react";

interface SearchResultProps {
    results: SearchResultType[];
    isLoading: boolean;
}

const SearchResult = ({results, isLoading}: SearchResultProps) => {
    const [currPage, setCurrPage] = useState(1)
    if (isLoading) {
        return (
            <section className="bg-secondary">
                <Spinner/>
            </section>
        );
    }

    if (!results.length) return null;

    return (
        <section className="bg-card bg-section p-8 text-3xl">
            <ul className="bg-section px-6 py-8">
                {results.map((recipe) => (
                    <li key={recipe.id}>
                        <a
                            href={`#${encodeURIComponent(recipe.id)}`}
                            className="group flex items-center gap-6 px-4 py-5 transition-colors hover:bg-muted"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="size-20 shrink-0 rounded-full object-cover"
                            />
                            <div className="min-w-0">
                                <h4 className="truncate text-2xl font-semibold text-foreground group-hover:text-primary">
                                    {recipe.title}
                                </h4>
                                <p className="mt-1 text-xl text-muted-foreground">
                                    {recipe.publisher}
                                </p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            {results.length > RESULTS_PER_PAGE && (
            <div className="flex justify-center px-6 py-6">
                <button
                type="button"
                onClick={() => setCurrPage(currPage + 1)}
                className="rounded-full bg-primary px-6 py-3 text-xl font-semibold  text-white"
                >
                  Page {currPage}
                </button>
            </div>
            )}
        </section>
    );
};

export default SearchResult;
