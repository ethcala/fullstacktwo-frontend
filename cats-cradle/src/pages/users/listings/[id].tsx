import Link from 'next/link';

export default function SellerListings(listings:any) {
    return (
        <div>
            <ul>
                {listings.map((listing: any) => (
                    <li>
                        <div>
                            <Link href={`/listings/itemListing/${encodeURIComponent(listing.listing_uuid)}`}>{listing.name}</Link>
                            <p>{listing.description}</p>
                            <p>{listing.price}</p>
                        </div>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}

export async function getStaticPaths(params:any) {
    console.log("PARAMS:" + params);
    const res = await fetch("https://thecatscradle.azurewebsites.net/orders/seller/" + params.id);
    const listings = await res.json();

    const paths = listings.map((listing:any) => ({
        params: {id: listing.listing_uuid},
    }));

    return { paths, fallback: false };
}