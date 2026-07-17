'use client'

import {createContext, ReactNode, useContext} from "react";
import {Theme} from "@/lib/ThemeCore";
import {useTheme} from "@/hooks/useTheme";

interface DarkModeContextProps {
    theme: Theme;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined)

export function DarkModeProvider({ children }:{ children: ReactNode }) {
    const value = useTheme()

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode():DarkModeContextProps {
    const context=useContext(DarkModeContext);
    if (context === undefined) throw new Error('DarkModeContext was used outside of DarkModeProvider');
    return context;
}
