import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center justify-between max-w-2xs gap-6 mt-4 lg:mt-0 ">
        <Image
            src="/favicon.png"
            alt="Recipe Hub logo"
            width={40}
            height={40}
        />
    <h1 className="text-3xl logo">
        Recipe Hub
    </h1>
        </div>
    );
}

