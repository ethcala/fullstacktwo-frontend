import React from 'react'

const searchresults = (data: any) => {
    console.log(data);
    if (data != null) {
        return (
            <div>
                Data found.
                /*{data.articles.map((res:any) => <p>{res.name}</p>)}*/
            </div>
        )

    } else {
        return (
            <div>Data not found.</div>
         )
    }
}

export default searchresults