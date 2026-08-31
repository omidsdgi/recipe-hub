import {RecipeType} from "@/types/Recipe";
import {useEffect, useState} from "react";
import {getRecipe} from "@/services/RecipeService";

export function useRecipe(id: string) {
    const [recipe, setRecipe] = useState<RecipeType | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function loadRecipe() {
            if (!id) return
            try{
                setIsLoading(true);
                setError("")

                const data=await getRecipe(id)
                setRecipe(data)
            }catch(err){
                if (err instanceof Error) {
                    setError(err.message    )
                }
            }finally {
                setIsLoading(false)
            }
        }
        void  loadRecipe()
    },[id])
    return {recipe, isLoading, error}
}

