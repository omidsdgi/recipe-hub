import { Sun} from "lucide-react";

export default function Spinner() {
    return (
        <div
            role="status"
            aria-live="polite"
            className="flex items-start justify-center py-24"
        >
            <Sun   className="size-20 animate-spin text-primary" />
            <span className="sr-only">Loading...</span>
        </div>
    );
}