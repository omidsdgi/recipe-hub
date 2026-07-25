
import {Header} from "@/components/layout";
import {getRecipe} from "@/services/RecipeService";
import {Recipe} from "@/recipe";


export default async function Home() {
    const recipe =await getRecipe("664c8f193e7aa067e94e8823")

    return (
        <div
            className="flex items-center justify-center bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)]">
            <div
                className="my-[4vw] sm:my-6 lg:my-[4vw] w-full max-w-[140rem] lg:min-h-[117rem] overflow-hidden rounded-none sm:roundede:lg lg:rounded-xl bg-surface shadow-card">
                <Header/>
                <main
                    className=" grid min-h-[107rem] grid-cols-[1fr_2fr] " >
                    <section className="bg-card p-8 text-3xl">
                        left
                    </section>

                    <section className=" bg-muted p-8 text-3xl">
                        <Recipe recipe={recipe} />
                    </section>
                </main>
                {/*<RecipeHero image='/Maryam.jpg' title='mehraneh'/>*/}
            </div>
        </div>
    );
}
