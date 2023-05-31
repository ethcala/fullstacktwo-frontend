import Header from '@/components/header';
import React, { useEffect, useState } from 'react'

export default function CreateListing (this: any) {
    const [listingName, setListingName] = useState("");
    const [listingSellerID, setListingSellerID] = useState(12);
    const [listingDescription, setListingDescription] = useState("");
    const [listingPublic, setListingPublic] = useState(true);
    const [listingPrice, setListingPrice] = useState("");
    const [listingTags, setListingTags] = useState([]);
    const [listingOptions, setListingOptions] = useState([]);
    const [listingOptionsName, setListingOptionsName] = useState("")
    const [listingOptionsOptionName, setListingOptionsOptionName] = useState("");
    const [listingOptionsOptionPrice, setListingOptionsOptionPrice] = useState("")
    const [listingData, setListingData] = useState({})
    useEffect(() => {
        console.log(listingData)
    }, [listingData])
    
    const createListingData = async() => {
        setListingSellerID(12)
        setListingPublic(true)
        setListingPrice("10.99")
        setListingOptionsName("size")
        setListingOptionsOptionName("extwa lawge")
        setListingOptionsOptionPrice("12")

        let tempData = {
            "seller_id": listingSellerID,
            "name": listingName,
            "description": listingDescription,
            "is_public": listingPublic,
            "price": listingPrice,
            "tags": [""],
            "options": {
                [listingOptionsName]:[
                    {
                        "option_name":listingOptionsOptionName,
                        "option_price":listingOptionsOptionPrice
                    }
                ]
            }
        }
        await setListingData(tempData);
        await postData(listingData)
    }
    async function postData(data = listingData) {
        console.log(JSON.stringify(data))
        // Default options are marked with *
        const response = await fetch("https://thecatscradle.azurewebsites.net/listing", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
        console.log("POST response:\n", JSON.stringify(response.json))
        // return response.json(); // parses JSON response into native JavaScript objects
    }
  return (
    <div >
        <Header current="Create" />
        <div className='container text-center'>
            <form className='flex-col'>
                <input
                    type={'text'}
                    onChange={(e)=>setListingName(e.target.value)}
                    value={listingName}
                    placeholder='Listing Name'
                    className='m-1 p-0_5 input'
                />
                <input
                    type={'text'}
                    onChange={(e)=>setListingDescription(e.target.value)}
                    value={listingDescription}
                    placeholder='Listing Description'
                    className='m-1 p-0_5 input'
                />
                <input
                    type={'text'}
                    onChange={(e)=>setListingPrice(e.target.value)}
                    value={listingPrice}
                    placeholder='Listing Price'
                    className='m-1 p-0_5 input'
                />
                <div>
                    <input
                        type={'text'}
                        onChange={(e)=>setListingOptionsName(e.target.value)}
                        value={listingOptionsName}
                        placeholder='Listing Option Category'
                        className='m-1 p-0_5 input'
                    />
                    <input
                        type={'text'}
                        onChange={(e)=>setListingOptionsOptionName(e.target.value)}
                        value={listingOptionsOptionName}
                        placeholder='Listing Option Name'
                        className='m-1 p-0_5 input'
                    />
                    <input
                        type={'text'}
                        onChange={(e)=>setListingOptionsOptionPrice(e.target.value)}
                        value={listingOptionsOptionPrice}
                        placeholder='Additional Price'
                        className='m-1 p-0_5 input'
                    />
                </div>
                
                {/*
                "description": listingDescription,
                "is_public": listingPublic,
                "price": listingPrice,
                "tags": ["UwU", "OwO"],
                "options": {
                    [listingOptionsName]:[
                        {
                            "option_name":listingOptionsOptionName,
                            "option_price":listingOptionsOptionPrice
                        }
                    ]
                } */}
            </form>
            <button onClick={createListingData} className='button'>Click To Create!</button>
        </div>
    </div>
  )
}