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
// export const fetcher: Fetcher<FileInfo[], string> = async (url) => {
// fetch(url).then((result) => {
//   if (result.status == 200) {
//     result.json().then((r) => { return r.pictures })
//   }
// })
// }

export default function Home() {
  // const pictures = useContext(Context)
  // const [pictures, setPictures] = useState<FileInfo[]>([])
  const { data: pictures, error, isLoading } = useSWR('/api/pictures', fetcher)

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
        {pictures != undefined ? pictures.pictures.map((picture: FileInfo) => {
          return (
            <UploadcareImage
              className="col"
              key={picture.url}
              alt="Test image"
              src={picture.originalFileUrl!}
              width={picture.contentInfo?.image?.width}
              height={picture.contentInfo?.image?.height}
            />
          )
          // return <CategoryCard key={picture.uuid} picture={picture} />
        }) : <></>
        }
      </div>
      <ScrollButton />
    </>
  )
}

