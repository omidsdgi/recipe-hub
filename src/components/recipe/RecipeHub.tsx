'use client'

import {useSearch} from "@/hooks/useSearch";
import {Header} from "@/components/layout";
import RecipePage from "./RecipePage";

const RecipeHub = () => {
    const {results, isLoading, error, search} = useSearch();

    return (
        <>
            <Header onSearch={search} isSearchLoading={isLoading}/>
            <main className="grid min-h-[107rem] grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
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
