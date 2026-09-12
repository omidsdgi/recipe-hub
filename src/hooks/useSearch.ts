import {useState} from "react";
import {loadSearchResults, SearchResultType} from "@/services/RecipeService";

export function useSearch() {
    const [results, setResults] = useState<SearchResultType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    async function search(query: string='pizza') {
        if(!query.trim()) return
        try{
            setIsLoading(true)
            setError("")
            const data = await loadSearchResults(query.trim())
            setResults(data)

        } catch(err){
            if (err instanceof Error) {
                setError(err.message)
            }
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