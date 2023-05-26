import Header from '@/components/header';
import axios from 'axios';
import { useRouter } from 'next/router';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';

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
        console.log("keys",Object.keys(response.data.options))
    }
    if (listing?.listing_name){
    return (
        <div>
            <Header current="Search" />
            <h2>{listing.listing_name}</h2>
            <p>{listing.listing_description}</p>
            <p>{listing.seller_name}</p>
            <div>
                {listing?.listing_tags ? <div>
                    <h3>Tags:</h3>
                    <div><ul>{listing.tags.map((tag:any) => (
                        <li><a>{tag.name}</a></li>
                    ))}</ul></div>
                </div> : <></>}
                {listing?.listing_options ? <div>
                    <h3>Options:</h3>
                    <div>{Object.keys(listing.options).map(key => (
                        <div>
                            <p>{key}</p>
                            <select>{
                                listing.options[key].map((o:any) => (
                                    <option>{o.name} (+${o.price})</option>
                                ))
                            }</select>
                        </div>
                    ))}</div>
                </div> : <></>}
            </div>
        </div>
    )}
};

// export async function getStaticProps(params:any) {
//     const listing = await fetch("https://thecatscradle.azurewebsites.net/listing/" + params.listing_uuid);
//     return {
//         props: { ...listing }
//     };
// };