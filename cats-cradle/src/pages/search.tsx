import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Search() {
    return (
        <div>
            <Header current="Search" />
            <form action="/search-info" method="post">
                <div className="row">
                    <input type="radio" id="sellers" name="type" value="sellers" />
                    <label htmlFor="sellers">Sellers</label>
                </div>
                <div className="row">
                    <input type="radio" id="listings" name="type" value="listings" defaultChecked />
                    <label htmlFor="listings">Listings</label>
                </div>
                <div className="row">
                    <input type="text" name="search" id="search"></input>
                    <button type="submit">Search</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}