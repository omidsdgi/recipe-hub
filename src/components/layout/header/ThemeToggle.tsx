import {Button} from "@/components/ui/button";
import {Moon} from "lucide-react";

const ThemeToggle = () => {
    return (
        <Button
            variant='ghost'
            size='icon'
            className='h-16 w-16 rounded-full' aria-label='Toggle theme'
        >
            <Moon className="size-10" />
        </Button>
    );
};

export default ThemeToggle;