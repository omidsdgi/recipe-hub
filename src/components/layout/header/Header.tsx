import {Logo} from "@/components";
import {Navigation, SearchForm, ThemeToggle} from "@/components/layout";

const Header = () => {
    return (
        <header
            className=" flex flex-col lg:flex-row gap-6 lg:h-40 h-70 w-full lg:items-center lg:justify-between bg-muted px-6 lg:px-8 ">
            <Logo/>
            <SearchForm/>
            <div className="flex items-center gap-4">
                <ThemeToggle/>
                <Navigation/>
            </div>
        </header>
    );
};

export default Header;