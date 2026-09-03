
import {Header} from "@/components/layout";
import RecipePage from "@/components/RecipePage";

export default async function Home() {
    return (
        <div
            className="flex items-center justify-center bg-gradient-to-br from-gradient-from to-gradient-to">
            <div
                className="my-[4vw] sm:my-6 lg:my-[4vw] w-full max-w-[120rem] lg:min-h-[117rem] overflow-hidden rounded-none sm:roundede:lg lg:rounded-xl bg-surface shadow-card">
                <Header/>
                <main
                    className=" grid min-h-[107rem] grid-cols-[1fr_2fr] " >
                 <RecipePage/>
                </main>
            </div>
        </div>
    );
}
