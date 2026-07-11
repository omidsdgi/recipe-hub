import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";

const SearchForm = () => {
    return (
        <form className="flex h-22 w-full max-w-4xl text-3xl items-center rounded-full bg-surface shadow-card " >
            <Input
                type="search"
                placeholder="Search over 1,000,000 recipes..."
                className='flex-1 border-0 bg-transparent px-12 font-normal text-foreground placeholder:text-placeholder shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
            />
            <Button
            type="submit"
           variant="recipe"
            size='recipe'
            >
                <SearchIcon className='size-10 mr-6'/>
                Search
            </Button>


        </form>
    );
};

export default SearchForm;