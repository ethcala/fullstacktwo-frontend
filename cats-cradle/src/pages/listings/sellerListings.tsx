import Link from 'next/link';

export default function SellerListings(listings:any) {
    return (
        <div>
            <ul>
                {listings.map((listing: any) => (
                        <div>
                            <li>{listing.name}</li>
                            <Link href="/listings/itemListing">View Listing</Link>
                        </div>
                    )
                )}
            </ul>
        </div>
    );
}