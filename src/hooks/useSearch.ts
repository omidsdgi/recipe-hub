import {useState} from "react";
import {loadSearchResults, SearchResultType} from "@/services/RecipeService";

export function useSearch() {
    const [results, setResults] = useState<SearchResultType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    async function search(query: string) {
        if(!query.trim()) return
        try {
            setIsLoading(true)
            setError("")
            setResults([])

            const data = await loadSearchResults(query.trim())
            setResults(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load search results.")
        } finally {
            setIsLoading(false)
        }
    }
    return {
        results,
        isLoading,
        error,
        search
    }
}