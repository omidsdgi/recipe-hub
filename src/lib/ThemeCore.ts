export type Theme='light' | 'dark'
const STORAGE_KEY = 'theme'

export function getSystemTheme():Theme {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme:dark)').matches
        ? 'dark'
        :'light'
}

export function getStoredTheme():Theme| null {
    if (typeof window === 'undefined') return null
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'dark' || stored==='light' ? stored : null
}

export function getInitialTheme():Theme {
    return getStoredTheme() ?? getSystemTheme();
}

export function storeTheme(theme:Theme) {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, theme);
}

export function applyTheme(theme:Theme):void {
    if (typeof document === 'undefined') return;
    const root=document.documentElement
    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-theme', theme);
}

export function setTheme(theme:Theme):void {
    storeTheme(theme);
    applyTheme(theme);
}

export function toggleTheme(current:Theme):Theme {
    const next:Theme = current === 'dark'? 'light' : 'dark';
    setTheme(next);
    return next
}
export function watchSystemTheme(
   callback:(theme:Theme)=>void ):() => void {
    if (typeof window === 'undefined') return()=>{}
    const mediaQuery=window.matchMedia("(prefers-color-scheme: dark)")
    const listener = (event:MediaQueryListEvent)=>{
        if (!getStoredTheme()){
            callback((event.matches ? 'dark' : 'light'));
        }
    }
    mediaQuery.addEventListener('change',listener);
    return () => {mediaQuery.removeEventListener('change',listener);
    }

}
