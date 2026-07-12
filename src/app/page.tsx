import {Logo} from "@/components";
import {SearchForm} from "@/components/layout/header";

export default function Home() {
    return (
        <div
            className="flex items-center justify-center bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)]">
                <div
                    className="my-[4vw] sm:my-6 lg:my-[4vw] w-full max-w-[140rem] lg:min-h-[117rem] overflow-hidden rounded-none sm:roundede:lg lg:rounded-xl bg-surface shadow-card">
                    <header
                        className=" flex flex-col lg:flex-row gap-6 lg:h-40 h-70 w-full lg:items-center lg:justify-between bg-muted px-6 lg:px-8 ">
                        <Logo/>
                        <SearchForm/>
                        <h1>Omid</h1>
                    </header>
                            <main
                                className=" grid min-h-[107rem] grid-cols-[1fr_2fr] " >
                                <section className="bg-card p-8 text-3xl">
                                    left
                                </section>

                                <section className=" bg-muted p-8 text-3xl">
                                    right
                                </section>
                            </main>
                    </div>
                </div>
                );
                }
