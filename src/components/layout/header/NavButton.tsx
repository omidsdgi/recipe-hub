import React from "react";

interface NavButtonProps {
    icon: React.ReactNode;
    label: string;
}
const NavButton = ({icon,label}:NavButtonProps) => {
    return (
        <button className="flex h-full items-center gap-3 px-6  text-xl font-semibold uppercase transition-colors hover:bg-muted">
            <span className='text-primary'>{icon}</span>
            <span className='text-foreground text-2xl font-bold'>{label}</span>
        </button>
    );
};

export default NavButton;