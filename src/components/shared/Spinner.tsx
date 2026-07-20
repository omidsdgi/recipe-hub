import { LoaderCircle } from "lucide-react";

export default function Spinner() {
    return (
        <div
            role="status"
            aria-live="polite"
            className="flex items-center justify-center py-24"
        >
            <LoaderCircle className="size-20 animate-spin text-primary" />
            <span className="sr-only">Loading...</span>
        </div>
    );
}