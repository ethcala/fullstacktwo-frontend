import Header from '@/components/header';
import axios from 'axios';
import { useRouter } from 'next/router';
import {useEffect, useState } from 'react';

function Order() {
    const router = useRouter();
    const id = router.query.user_id;

    useEffect(() => {
        if (id)
            getData()
    },[router.query.listing_id])

    const getData = async () => {
        const response = await axios.get(`https://thecatscradle.azurewebsites.net/order/${id}`)
        console.log(response.data)
        console.log("keys",Object.keys(response.data.options))
    }
    return (
        <div>Order</div>
    )
}

export default Order