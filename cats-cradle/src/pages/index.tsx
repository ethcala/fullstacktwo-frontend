import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat's Cradle</title>
        <meta name="description" content="A home for buyers and sellers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Header current={"Home"} /> 
        <div>
          <p>
            Give your items a cozy home while you sell them by hosting with Cat's Cradle.
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
