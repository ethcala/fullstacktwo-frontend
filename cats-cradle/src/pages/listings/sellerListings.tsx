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