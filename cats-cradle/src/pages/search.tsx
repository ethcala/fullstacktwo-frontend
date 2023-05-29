import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchResults from "@/components/searchresults";
import axios from 'axios';
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null);
    async function doSearch() {
        const response = await axios.get(`https://thecatscradle.azurewebsites.net/search?q=` + search);
        setResult(response.data);
    }

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
                        <input className="w-100 mb-1" type="text" name="search" id="search" onChange={(event) => setSearch(event.target.value)}></input>
                        <button type="submit" onClick={() => doSearch()}>Search</button>
                    </div>
                    <SearchResults data={result}/>
                </form>
            </div>
            <Footer />
        </div>
    )
}