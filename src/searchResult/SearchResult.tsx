import {Spinner} from "@/components";

const SearchResult = () => {
    return (
        <section className="bg-card p-8 text-3xl bg-section">

            <ul>
            <a href="#5ed6604591c37cdc054bc886">
                <div>
                <h4>Spicy Chicken and Pepper Jack Pizza</h4>
                </div></a>
            <a href="#664c8f193e7aa067e94e8297">
                <div>
                   <h4>Double Crust Stuffed Pizza</h4>
                </div>
            </a>
            </ul>
            <Spinner/>
        </section>
    );
};

export default SearchResult;