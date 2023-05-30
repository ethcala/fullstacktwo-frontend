/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import {useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import ListingComponent from '@/components/ListingComponent'
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  const [listings, setListing]:any = useState({})

  useEffect(() => {
    getListingsData()
  },[router.query.listing_id])

  const getListingsData = async () => {
      const response = await axios.get(`https://thecatscradle.azurewebsites.net/all-listings/`)
      setListing(response.data);
      console.log(response.data)
      redirect('/orders/12')
  }
  if (listings[0]){
    return (
      <>
        <Head>
          <title>Cat's Cradle | Home</title>
          <meta name="description" content="A home for buyers and sellers" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className={`${inter.className}`}>
          <Header current={"Home"} /> 
          <div>
            {listings.map((listing: { listing_name: string, listing_price: number, lising_description: string}) => (
              <ListingComponent listinginfo={listing}/>
            ))}
          </div>
          <Footer />
        </main>
      </>
    )
  }
  else{
    return(
      <>
        <Head>
          <title>Cat's Cradle | Home</title>
          <meta name="description" content="A home for buyers and sellers" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${inter.className}`}>
          <Header current={"Home"} /> 
          <Footer />
        </main>
      </>
    )
  }
}
