import {NavButton} from "@/components/layout";
import {Bookmark, SquarePen} from "lucide-react";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex h-full item-stretch">
            <li>
                <NavButton
                    icon={<SquarePen className='size-10'/> }
                    label='Add Recipe'
                />
            </li>
            <li>
                <NavButton
                    icon={<Bookmark className='size-10'/> }
                    label='Bookmarks'
                />
            </li>
            </ul>
        </nav>
    );
};

export default Navigation;
