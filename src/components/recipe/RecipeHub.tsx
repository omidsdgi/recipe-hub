'use client'

import {useSearch} from "@/hooks/useSearch";
import {Header} from "@/components/layout";
import RecipePage from "./RecipePage";

const RecipeHub = () => {
    const {results, isLoading, error, search} = useSearch();

    return (
        <>
            <Header onSearch={search} isSearchLoading={isLoading}/>
            <main className="grid min-h-[107rem] grid-cols-[1fr_2fr]">
                <RecipePage
                    results={results}
                    isSearchLoading={isLoading}
                    searchError={error}
                    onSearch={search}
                />
            </main>
        </>
    );
};

export default RecipeHub;
