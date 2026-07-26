import {RecipeType} from "@/types/Recipe";
import {useEffect, useState} from "react";
import {getRecipe} from "@/services/RecipeService";

export function useRecipe(id: string) {
    const [recipe, setRecipe] = useState<RecipeType | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function loadRecipe() {
            try{
                setIsLoading(true);
                const data=await getRecipe(id)
                setRecipe(data)
            }catch(err){
                if (err instanceof Error) {
                    setError('Something went wrong')
                }
            }finally {
                setIsLoading(false)
            }
        }
        void  loadRecipe()
    },[id])
    return {recipe, isLoading, error}
}

