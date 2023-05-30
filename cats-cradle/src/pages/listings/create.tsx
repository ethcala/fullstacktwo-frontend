import React, { useEffect, useState } from 'react'

export default function CreateListing () {
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
        setListingName("Name UwU")
        setListingDescription("Description OwO")
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
            "tags": ["UwU", "OwO"],
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
    <div>
        <form>
            <input></input>
        </form>
        <button onClick={createListingData}>Click To Test</button>
    </div>
  )
}