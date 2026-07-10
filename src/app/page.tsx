import {Logo} from "@/components";

export default function Home() {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-[var(--color-gradient-from)] to-[var(--color-gradient-to)]">
        <div className="my-[4vw] w-full max-w-[120rem] min-h-[117rem] overflow-hidden rounded-[9px] bg-surface shadow-card">
            <header
                className=" flex h-[10rem] w-full items-center justify-between bg-background px-8 ">
                <Logo/>
                <h1>Omid</h1>
            </header>

            <main
                className="
          grid
          min-h-[107rem]
          grid-cols-[1fr_2fr]
        "
            >
                <section className="bg-surface p-8 text-3xl">
                    left
                </section>

                <section className="bg-background p-8 text-3xl">
                    right
                </section>
            </main>
        </div>
        </div>
    );
}
