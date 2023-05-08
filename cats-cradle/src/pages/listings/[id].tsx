export default function ListingDetail(id:string) {
    return (<div>

    </div>)
}

export async function getStaticPaths() {
    const paths = getSellerListingIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(params:any) {

}

// get all listing ids from getSellerIds
export function getSellerListingIds() {
    // link to api
}