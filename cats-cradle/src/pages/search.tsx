import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchResults from "@/components/searchresults";
import axios from 'axios';
import Link from "next/link";
import { useState } from "react";

export default function Search() {
    const [data, setData]: any = useState([
        {
            "listing_name": "Listing not found.",
            "listing_description": "Enter a search to begin",
            "listing_price": "Searching listings and shops.",
            "listing_uuid": 0
        }
    ]);
    console.log(data);
    async function getSearchResults(evt:any) {
        evt.preventDefault()
        let searchText = (document.getElementById('searchText') as HTMLInputElement)?.value;
        //let url = `https://thecatscradle.azurewebsites.net/search?q=${searchText}`;
        let url = `http://localhost:4000/search?q=${searchText}`;
        const response = await axios.get(url);
        setData(response.data);
        console.log(data);
    }


    return (
        <div>
            <Header current="Search" />
            <div className="search-form">
                <form>
                    <div className="rows">
                        <input type="radio" id="sellers" name="type" value="sellers" />
                        <label htmlFor="sellers">Sellers</label>
                    </div>
                    <div className="rows">
                        <input type="radio" id="listings" name="type" value="listings" defaultChecked />
                        <label htmlFor="listings">Listings</label>
                    </div>
                    <div className="together">
                        <input className="w-100 mb-1" type="text" name="search" id="searchText"></input>
                        <button onClick={(evt) => getSearchResults(evt)}>Search</button>
                    </div>
                    {
                        data.map((listing: any) => (
                            <div>
                                <Link href={'/listings/' + listing.listing_uuid}><h3>{listing.listing_name}</h3></Link>
                                <p>{listing.listing_description}</p>
                                <p>{listing.listing_price}</p>
                            </div>
                        ))
                    }
                    {/*{
                        data != [] ? <SearchResults data={data}/> : <div>No results found.</div>
                    }*/}
                </form>
            </div>
            <Footer />
        </div>
    )
}