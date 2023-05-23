import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import { Overpass_Mono } from 'next/font/google'
import Head from 'next/head'
import Favicon from '@/components/Favicon'

const overpass = Overpass_Mono({
  weight: '300',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Biljana Kukolj Photography</title>
        <meta name="description" content="Biljana Kukolj Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
      </Head>
      <main className={overpass.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  )
}
