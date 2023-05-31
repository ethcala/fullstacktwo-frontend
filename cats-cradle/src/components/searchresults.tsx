import React, { useEffect, useState } from 'react'
import ListingComponent from './ListingComponent'

const searchresults = (data: any) => {
    const [listings, setListings]: any = useState([]);

    useEffect(() => {
        setListings(data);
        console.log(listings);
    })

    /*function reloadReturnData() {*/
        /*if (listings.length > 0) {*/
            return (
                <div>
                    {listings.map((listing: any) => {
                            <ListingComponent listinginfo={listing} />
                        })}
                </div>
            )

        /*} else {
            return (
                <div>Results not found</div>
            )
        }    */    
    /*}*/

}

export default searchresults