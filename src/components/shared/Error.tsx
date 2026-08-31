import { AlertTriangle } from "lucide-react";

export default function Error({message = "No recipes found for your query. Please try again!",}:{message: string}) {
    return (
        <div
            role="alert"
            className="flex flex-col min-h-[120rem] items-center justify-start gap-6 rounded-3xl border border-border bg-card px-10 py-14 text-center shadow-sm"
        >
            <div className="flex size-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <AlertTriangle className="size-10" />
            </div>

            <p className="max-w-md text-2xl font-semibold leading-relaxed text-foreground">
                {message}
            </p>
        </div>
    );
}