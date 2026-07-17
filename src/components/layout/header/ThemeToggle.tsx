import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {useDarkMode} from "@/context/DarkModeContext";

export default function ThemeToggle() {
    const {isDarkMode,toggleTheme}=useDarkMode()
    return (
        <Button onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className='h-16 w-16 rounded-full'
            aria-label='Toggle Theme'
        >
            {isDarkMode ? <Sun className='size-8'/> : <Moon className='size-8'/> }
        </Button>
    )
}

