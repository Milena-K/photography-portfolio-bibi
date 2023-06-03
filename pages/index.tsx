import UploadcareImage from '@uploadcare/nextjs-loader';
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { FileInfo, UploadcareSimpleAuthSchema, listOfFiles } from '@uploadcare/rest-client';
import useSWR, { Fetcher } from 'swr';
import CategoryCard from '@/components/CategoryCard';
import ScrollButton from '@/components/ScrollButton';
import Favicon from '@/components/Favicon';
import Link from 'next/link';
import { PictureContext } from './_app';

export default function Home() {
    const categoriesTitles = ['Fingerboarding', 'Product', 'Skateboarding', 'Skate Halle', 'Studio', 'White Shirt']
    const picturesInCategories = useContext(PictureContext)
    const categories = ['fingerboarding', 'product', 'skateboarding', 'skatehalle', 'studio', 'whiteshirt'] as (keyof typeof picturesInCategories)[];

    /* if (isLoading) return <div>Loading...</div>
* if (error) return <div>No pictures for now.</div> */
    return (
        <>
            <Head>
                <title>Biljana Kukolj Photography</title>
                <meta name="description" content="Biljana Kukolj Photography" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Favicon />
            </Head>
            <div className='p-8 grid place-items-center gap-8 xs:grid-cols-1 lg:grid-cols-3'>
                {
                    picturesInCategories != null &&
                    categories.map((category, index) => {
                        const picture = picturesInCategories[category][0]
                        return <Link href={`/category/${encodeURIComponent(category)}`}>
                            <CategoryCard picture={picture} category={categoriesTitles[index]} />
                        </Link>
                    })
                }
            </div>
            <ScrollButton />
        </>
    )
}

