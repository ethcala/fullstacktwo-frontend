import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Listing() {
    const router = useRouter();
    const id = router.query.listing_id;

    const [listing, setListing]:any = useState({})

    useEffect(() => {
        if (id)
            getData()
    },[router.query.listing_id])

    const getData = async () => {
        const response = await axios.get(`https://thecatscradle.azurewebsites.net/listing/${id}`)
        setListing(response.data);
        console.log(response.data)
    }
    return (<p>
        {listing.listing_name}
    </p>)
};

// export async function getStaticProps(params:any) {
//     const listing = await fetch("https://thecatscradle.azurewebsites.net/listing/" + params.listing_uuid);
//     return {
//         props: { ...listing }
//     };
// };