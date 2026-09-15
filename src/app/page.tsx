import {RecipeHub} from "@/components";

export default function Home() {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-gradient-from to-gradient-to">
            <div className="my-[4vw] w-full max-w-[120rem] overflow-hidden rounded-none bg-surface shadow-card sm:my-6 sm:rounded-none lg:my-[4vw] lg:min-h-[117rem] lg:rounded-xl">
                <RecipeHub/>
            </div>
        </div>
    );
}
