import {Smile} from "lucide-react";

const EmptyState = () => {
    return (
        <div className="flex h-full min-h-[120rem] items-start justify-center bg-muted">
            <div className="flex  items-center gap-6 text-center mt-8">
                <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                    <Smile/>
                </div>

                <p className="max-w-md text-2xl font-semibold leading-relaxed text-foreground">
                    Start by searching for a recipe or an ingredient. Have fun!
                </p>
            </div>
        </div>
    );
};

export default EmptyState;