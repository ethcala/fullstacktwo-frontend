import React from 'react'

const ListingComponent = (props) => {
  return (
    <div>
      <h3>{props.listinginfo.listing_name}</h3>
      <h6>${props.listinginfo.listing_price}</h6>
      <p>{props.listinginfo.listing_description}</p>
    </div>
  )
}

export default ListingComponent