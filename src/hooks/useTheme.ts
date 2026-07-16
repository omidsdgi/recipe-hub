import {useEffect, useState} from "react";
import {
    applyTheme,
    getInitialTheme, storeTheme,
    Theme,
    toggleTheme as toggleThemeCore,
    watchSystemTheme
} from "@/lib/ThemeCore";

export function useTheme() {
const [theme, setThemeState] = useState<Theme>(()=>getInitialTheme());

    useEffect(() => {
        applyTheme(theme);
        storeTheme(theme);
    }, [theme]);

    useEffect(() => {
        return watchSystemTheme((systemTheme)=>{
            setThemeState(systemTheme);
        });
    }, []);
        function  toggle (){
            setThemeState((current)=>toggleThemeCore(current));
        }
        return {
            theme,
            isDarkMode: theme === 'dark',
            toggleTheme:toggle,
        }
}