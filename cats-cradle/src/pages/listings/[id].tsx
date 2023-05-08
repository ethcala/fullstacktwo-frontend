export default function ListingDetail() {
    return <div></div>
}

export async function getStaticPaths() {
    const paths = getSellerListingIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

}

// get all listing ids from getSellerIds
export function getSellerListingIds() {
    // link to api
}