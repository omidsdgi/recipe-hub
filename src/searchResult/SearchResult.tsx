import {Spinner} from "@/components";
import {SearchResultType} from "@/services/RecipeService";

interface SearchResultProps {
    results:SearchResultType[];
    isLoading: boolean;
}

const SearchResult = ({
    results,
    isLoading,
     }:SearchResultProps) => {
    if (!isLoading) return (
        <section className='bg-secondary'>
            <Spinner/>
        </section>
    )
    if (!results) return null

    return (
        <section className="bg-card p-8 text-3xl bg-section">
            <ul className='bg-section px-6 py-8'>
                {results.map((result) => (
                    <li key={result.id}>
                        <a
                            href={`#${result.id}`}
                            className='group flex items-center gap-6 px-4 py-5 transition-colors hover:bg-muted'
                        >
                            <img src={result.image}
                                 alt={result.id}
                                 className='size-20 shrink-0 rounded-full object-cover'
                            />
                            <div className="min-w-0">
                                <h4 className='truncate text-2xl font-semibold text-foreground group-hover:text-primary'>
                                     {result.title}
                                 </h4>
                                <p className='mt-1 text-xl text-muted-foreground'>
                                    {result.publisher}
                                </p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default SearchResult;