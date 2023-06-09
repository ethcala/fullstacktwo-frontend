import Link from 'next/link'
import React from 'react'

const ListingComponent = (props:any) => {
  console.log("props",props.listinginfo)
  return (
    <div>
      <Link href={'/listings/' + props.listinginfo.listing_uuid}><h3>{props.listinginfo.listing_name}</h3></Link>
      
      <h6>${props.listinginfo.listing_price}</h6>
      <p>{props.listinginfo.listing_description}</p>
      <p>{props.listinginfo.seller_name}</p>
    </div>
  )
}

export default ListingComponent