import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";

const SearchForm = () => {
    return (
        <form className="flex lg:h-24 w-full lg:max-w-3xl text-xl lg:text-2xl lg:font-semibold items-center rounded-full bg-surface shadow-card " >
            <Input
                type="search"
                placeholder="Search over 1,000,000 recipes..."
                className='flex-1 border-0 bg-transparent px-12 mb-4 font-normal text-foreground placeholder:text-placeholder shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
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