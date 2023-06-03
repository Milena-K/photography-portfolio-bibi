import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import { Overpass_Mono } from 'next/font/google'
import Head from 'next/head'
import Favicon from '@/components/Favicon'
import useSWR, { Fetcher } from 'swr';
import { FileInfo } from '@uploadcare/rest-client'
import { createContext, useEffect, useState } from 'react'

const overpass = Overpass_Mono({
    weight: '300',
    subsets: ['latin'],
})

const fetcher: Fetcher<{ pictures: FileInfo[] }, string> = (url) => fetch(url).then(r => r.json())

export interface PictureCategories {
    'fingerboarding': Array<FileInfo>,
    'product': Array<FileInfo>,
    'skateboarding': Array<FileInfo>,
    'skatehalle': Array<FileInfo>,
    'studio': Array<FileInfo>,
    'whiteshirt': Array<FileInfo>,
}

export const PictureContext = createContext<PictureCategories | undefined>(undefined)

export default function App({ Component, pageProps }: AppProps) {
    const { data: pictures, error, isLoading } = useSWR('/api/pictures', fetcher)
    const [picturesInCategories, setPicturesInCategories] = useState<PictureCategories>();
    const categories = ['fingerboarding', 'product', 'skateboarding', 'skatehalle', 'studio', 'whiteshirt'] as (keyof typeof picturesInCategories)[];

    const categorize_photos = () => {
        const picInCat: PictureCategories = {
            'fingerboarding': [],
            'product': [],
            'skateboarding': [],
            'skatehalle': [],
            'studio': [],
            'whiteshirt': [],
        }
        const categories = Object.keys(picInCat) as (keyof typeof picInCat)[]
        pictures!.pictures.forEach((picture: FileInfo) => {
            for (let i = 0; i < categories.length; i++) {
                if (picture.originalFileUrl!.includes(categories[i])) {
                    picInCat[categories[i]].push(picture);
                    break;
                }
            }
        })
        setPicturesInCategories(picInCat);
    }

    useEffect(() => {
        if (pictures != undefined)
            categorize_photos()
    }, [pictures])


    if (isLoading) return <div>Loading...</div>
    if (error) return <div>No pictures for now.</div>
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
                <PictureContext.Provider value={picturesInCategories}>
                    <Component {...pageProps} />
                </PictureContext.Provider>
            </main>
        </>
    )
}
