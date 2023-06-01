import UploadcareImage from '@uploadcare/nextjs-loader';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Logo from '@/components/Logo'
import PhotoGrid from '@/components/Grid'
import { useContext, useEffect, useState } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { FileInfo, UploadcareSimpleAuthSchema, listOfFiles } from '@uploadcare/rest-client';
import Image from 'next/image';
import useSWR, { Fetcher } from 'swr';
import CategoryCard from '@/components/CategoryCard';
import ScrollButton from '@/components/ScrollButton';
import Favicon from '@/components/Favicon';

const fetcher: Fetcher<{ pictures: FileInfo[] }, string> = (url) => fetch(url).then(r => r.json())

interface PictureCategories {
    'fingerboarding': Array<FileInfo>,
    'product': Array<FileInfo>,
    'skateboarding': Array<FileInfo>,
    'skatehalle': Array<FileInfo>,
    'studio': Array<FileInfo>,
    'whiteshirt': Array<FileInfo>,
}
export default function Home() {
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
        pictures!.pictures.forEach((picture) => {
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
            <div className='p-8 grid place-items-center gap-8 xs:grid-cols-1 lg:grid-cols-4'>
                {
                    picturesInCategories != undefined ? categories.map((category) => {
                        const picture = picturesInCategories[category][0];
                        return <CategoryCard picture={picture} category={category} />
                    }
                    ) : (<p>Awesomeness loading...</p>)
                }
            </div>
            <ScrollButton />
        </>
    )
}

/*
*                 {pictures != undefined ? pictures.pictures.map((picture: FileInfo) => {
*                     return (
*                         <UploadcareImage
*                             className="col"
*                             key={picture.url}
*                             alt="Test image"
*                             src={picture.originalFileUrl!}
*                             width={picture.contentInfo?.image?.width}
*                             height={picture.contentInfo?.image?.height}
*                         />
*                     )
*                     // return <CategoryCard key={picture.uuid} picture={picture} />
*                 }) : <></>
*                 } */
