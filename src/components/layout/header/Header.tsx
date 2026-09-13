import BookmarkButtons from "./BookmarkButtons";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
    onSearch: (query: string) => void;
    isSearchLoading: boolean;
}
const Header = ({
    onSearch,
    isSearchLoading,
                }:HeaderProps) => {
    return (
        <header
            className=" flex flex-col lg:flex-row gap-6 lg:h-40 h-70 w-full lg:items-center lg:justify-between bg-muted px-6 lg:px-8 ">
            <Logo/>
            <SearchForm onSearch={onSearch}  isLoading={isSearchLoading}/>
            <div className="flex items-center gap-4">
                <ThemeToggle/>
                <BookmarkButtons/>
            </div>
        </header>
    );
};

export default Header;