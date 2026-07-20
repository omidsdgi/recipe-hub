import Image from "next/image";

type RecipeHeroProps = {
    title: string;
    image: string;
};

export default function RecipeHero({
                                       title,
                                       image,
                                   }: RecipeHeroProps) {
    return (
        <figure className="relative h-[32rem] overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover "

            />

            <div className="absolute inset-0 bg-black/20" />

            <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <span
            className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-10 py-4 text-5xl font-bold uppercase text-surface shadow-lg "
        >
          {title}
        </span>
            </h1>
        </figure>
    );
}