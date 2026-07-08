import Image from "next/image";

export default function Home() {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-[var(--color-gradient-from)] to-[var(--color-gradient-to)]">
        <div className="my-[4vw] w-full max-w-[120rem] min-h-[117rem] overflow-hidden rounded-[9px] bg-surface shadow-card">
            <header
                className="
          flex
          h-[10rem]
          items-center
          gap-8
          bg-background
          px-8
        "
            >
                <Image
                    src="/favicon.png"
                    alt="Recipe Hub logo"
                    width={40}
                    height={40}
                />

                <h1 className="text-3xl font-bold">
                    Recipe Hub
                </h1>
            </header>

            <main
                className="
          grid
          min-h-[107rem]
          grid-cols-[1fr_2fr]
        "
            >
                <section className="bg-surface p-8">
                    left
                </section>

                <section className="bg-background p-8">
                    right
                </section>
            </main>
        </div>
        </div>
    );
}
