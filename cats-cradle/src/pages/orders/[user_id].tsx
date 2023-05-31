import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/router';
import {useEffect, useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";

function Order() {
    const router = useRouter();
    const id = router.query.user_id;

    const [orders,setOrders] = useState([])

    useEffect(() => {
        if (id)
            getData()
    },[id])

    const getData = async () => {
        const response = await axios.get(`https://thecatscradle.azurewebsites.net/order?buyer=306e6447-376a-455a-a46a-39ae0f4d4da8`)
        console.log("order",response.data)
        setOrders(response.data)
    }
    return (
        <div>
            <Header />
            {orders.map((order:any) => {
            const totalPrice = (order.listing_price + order.option_additional_price)*order.order_quantity;
            console.log(order)
            return (
                <div>
                    <a><Link href={`/listings/${order.listing_uuid}`}>{order.listing_name}</Link></a>
                    <p>{order.option_name}</p>
                    <p>${totalPrice}</p>
                </div>
            )
        })}
        <Footer /></div>
    )
}

export default Order