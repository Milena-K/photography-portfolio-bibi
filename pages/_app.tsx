import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'

import { Overpass_Mono } from 'next/font/google'

const overpass = Overpass_Mono({
  weight: '300',
  subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={overpass.className}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  )
}
