export default function SearchResults(searchTerm: any) {
    const [results, setResults] = ();

    
}

export function getStaticProps() {
    
}

export async function SearchListings(searchTerm:any) {
    fetch(`https://thecatscradle.azurewebsites.net/search?q=${searchTerm}`, {  // change this
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).catch((err) => console.log(err));
}