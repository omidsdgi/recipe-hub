'use client'

import {useEffect, useState} from "react";
import {EmptyState, Error, Recipe, SearchForm, Spinner} from "@/components";
import {SearchResult} from "@/searchResult";
import {useRecipe} from "@/hooks/useRecipe";
import {SearchResultType} from "@/services/RecipeService";

interface RecipePageProps {
    results: SearchResultType[];
    isSearchLoading: boolean;
    searchError: string;
    onSearch: (query: string) => void;
}

const RecipePage = ({
    results,
    isSearchLoading,
    searchError,
    onSearch,
}: RecipePageProps) => {
    const [id, setId] = useState("");
    const {recipe, isLoading: isRecipeLoading, error: recipeError} = useRecipe(id);

    useEffect(() => {
        const handleHashChange = () => {
            setId(decodeURIComponent(window.location.hash.slice(1)));
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const showEmptyState =
        !id &&
        !isSearchLoading &&
        !searchError &&
        results.length === 0;

    return (
        <>
            <div className="col-span-full lg:hidden">
                <SearchForm onSearch={onSearch} isLoading={isSearchLoading}/>
            </div>

            <aside className="bg-section">
                <SearchResult results={results} isLoading={isSearchLoading}/>
                {searchError && <Error message={searchError}/>}
            </aside>

            <section className="min-w-0">
                {id ? (
                    <>
                        {isRecipeLoading && (
                            <div className="bg-muted">
                                <Spinner/>
                            </div>
                        )}
                        {recipeError && <Error message={recipeError}/>} 
                        {!isRecipeLoading && !recipeError && recipe && (
                            <Recipe recipe={recipe}/>
                        )}
                    </>
                ) : (
                    showEmptyState && <EmptyState/>
                )}
            </section>
        </>
    );
};

export default RecipePage;
