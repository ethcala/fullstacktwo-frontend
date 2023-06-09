import Header from '@/components/header';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Listing() {
    const router = useRouter();
    const id = router.query.listing_id;

    const [listing, setListing]:any = useState({})

    const [orderData,setOrderData]:any = useState({buyer_id:12,order_quantity:0})
    const [optionsChosen,setOptionsChosen]:any = useState({})
    const [price,setPrice]:any = useState(0)

    const sendData = async () => {
        console.log("Sending Data:", orderData);
        const response = await axios.post("https://thecatscradle.azurewebsites.net/order",orderData)
        console.log(response);
        router.push("/orders/306e6447-376a-455a-a46a-39ae0f4d4da8")
        //Send orderData to /orders
    }

    useEffect(() => {
        if (id)
            getData()
    },[router.query.listing_id])

    const getData = async () => {
        const response = await axios.get(`https://thecatscradle.azurewebsites.net/listing/${id}`)
        const data = response.data
        setListing(data);
        console.log(data)
        setOrderData({...orderData,order_listing_id:data.listing_id})
        setPrice(data.listing_price)
    }

    const handleOptionChange = (evt:any) => {
        const value = JSON.parse(evt.target.value)
        const newOptions = {...optionsChosen,[value.group]:value.option}
        setOptionsChosen(newOptions);
        let newPrice = listing.listing_price;
        const ids = Object.keys(newOptions).map(key => {
            let option = newOptions[key]
            if (option?.name) {
                newPrice+= option.price;
                return option.id;
            }
        })
        setPrice(newPrice)
        console.log({...orderData,options:ids})
        setOrderData({...orderData,options:ids})
    }
    if (listing?.listing_name){
    return (
        <div>
            <Header current="Search" />
            <h2>{listing.listing_name}</h2>
            <p>{listing.listing_description}</p>
            <p>{listing.seller_name}</p>
            <p>{price}</p>
            <div>
                {listing?.tags?.length ? <div>
                    <h3>Tags:</h3>
                    <div><ul>{listing.tags.map((tag:any) => (
                        <li key={tag.id}><a>{tag.name}</a></li>
                    ))}</ul></div>
                </div> : <></>}
                {listing?.options ? <div>
                    <h3>Options:</h3>
                    <div>{Object.keys(listing.options).map(key => (
                        <div key={key}>
                            <p>{key}</p>
                            <select onChange={handleOptionChange}>{
                                listing.options[key].map((o:any) => (
                                    <option key={o.id} value={JSON.stringify({option:o,group:key})}>{o.name} (+${o.price})</option>
                                ))
                            }</select>
                        </div>
                    ))}</div>
                </div> : <></>}
                <input type='number' min="0" max="10" name="order_quantity" value={orderData.order_quantity} onChange={(evt) => setOrderData({...orderData,order_quantity:evt.target.value})} />
                <button onClick={sendData} id="buybtn">Buy</button>
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