import { RecipeType } from "@/types/Recipe";
import { useEffect, useState } from "react";
import { getRecipe } from "@/services/RecipeService";

export function useRecipe(id: string) {
    const [recipe, setRecipe] = useState<RecipeType | null>(null);
    const [error, setError] = useState<{
        id: string;
        message: string;
    } | null>(null);

    useEffect(() => {
        if (!id) return;

        let cancelled = false;

        async function loadRecipe() {
            try {
                const data = await getRecipe(id);

                if (cancelled) return;

                setRecipe(data);
            } catch (err) {
                if (cancelled) return;

                if (err instanceof Error) {
                    setError({
                        id,
                        message: err.message,
                    });
                }
            }
        }

        void loadRecipe();

        return () => {
            cancelled = true;
        };
    }, [id]);

    const currentError = error?.id === id ? error.message : "";

    const isLoading =
        Boolean(id) &&
        recipe?.id !== id &&
        !currentError;

    return {
        recipe: recipe?.id === id ? recipe : null,
        isLoading,
        error: currentError,
    };
}