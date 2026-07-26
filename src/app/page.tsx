
import {Header} from "@/components/layout";
import {Sidebar} from "@/sidebar";
import {Recipe} from "@/components";


export default async function Home() {
    return (
        <div
            className="flex items-center justify-center bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)]">
            <div
                className="my-[4vw] sm:my-6 lg:my-[4vw] w-full max-w-[140rem] lg:min-h-[117rem] overflow-hidden rounded-none sm:roundede:lg lg:rounded-xl bg-surface shadow-card">
                <Header/>
                <main
                    className=" grid min-h-[107rem] grid-cols-[1fr_2fr] " >
                   <Sidebar/>
                    <Recipe/>
                </main>
            </div>
        </div>
    );
}
