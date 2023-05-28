import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchResults from "@/components/searchresults";

export default function Search() {
    return (
        <div>
            <Header current="Search" />
            <div className="search-form">
                <form action="/search-info" method="post">
                    <div className="rows">
                        <input type="radio" id="sellers" name="type" value="sellers" />
                        <label htmlFor="sellers">Sellers</label>
                    </div>
                    <div className="rows">
                        <input type="radio" id="listings" name="type" value="listings" defaultChecked />
                        <label htmlFor="listings">Listings</label>
                    </div>
                    <div className="stack">
                        <input className="w-100 mb-1" type="text" name="search" id="search"></input>
                        <button type="submit">Search</button>
                    </div>
                    <SearchResults/>
                </form>
            </div>
            <Footer />
        </div>
    )
}