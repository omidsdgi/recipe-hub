'use client'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";
import React, {useState} from "react";

interface SearchFormProps {
    onSearch: (query: string) => void;
    isLoading?:boolean;
}

const SearchForm = ({
                        onSearch,
                        isLoading=false,
}:SearchFormProps) => {
    const [query, setQuery] = useState("")

    function handleSubmit(e:React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const trimmedQuery=query.trim()
          if(!trimmedQuery) return
        onSearch(trimmedQuery)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="flex h-24 w-full items-center rounded-full bg-card text-xl shadow-card lg:max-w-3xl  lg:text-2xl lg:font-semibold" >
            <Input
                type="search"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search over 1,000,000 recipes..."
                className='h-24 flex-1 text-xl border-0 bg-transparent px-12  font-normal text-foreground placeholder:text-placeholder shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 md:text-2xl'
            />
            <Button
            type="submit"
           variant="recipe"
            size='recipe'
            disabled={isLoading}
            >
                <SearchIcon className='size-10 mr-6'/>
                Search
            </Button>


        </form>
    );
};

export default SearchForm;