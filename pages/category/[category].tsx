import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { PictureContext } from "../_app";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";
import UploadcareImage from "@uploadcare/nextjs-loader";
import { FileInfo } from "@uploadcare/rest-client";
import { ParsedUrlQuery } from "querystring";
import ScrollButton from "@/components/ScrollButton";


interface CategoryQuery extends ParsedUrlQuery {
    category: 'fingerboarding' | 'product' | 'skateboarding' | 'skatehalle' | 'studio' | 'whiteshirt'
}

export default function Category() {
    const picturesInCategories = useContext(PictureContext)
    const router = useRouter();
    const { category } = router.query as CategoryQuery;
    const [name, setName] = useState('');
    const categoriesTitles = ['Fingerboarding', 'Product', 'Skateboarding', 'Skate Halle', 'Studio', 'White Shirt']
    console.log(picturesInCategories)
    return (
        <div className="min-[320px]:p-8 md:px-24 md:pt-14 sm:pb-0">
            <h1 className=" text-2xl font-bold text-center">
                {category[0].toUpperCase() + category.slice(1)}
            </h1>
            <div className="grid grid-cols-2 gap-2 w-fit pt-8 place-items-start">
                {

                    picturesInCategories != undefined &&
                    picturesInCategories[category].map((picture: FileInfo) => {
                        return (
                            <UploadcareImage
                                className="col"
                                key={picture.url}
                                alt="Test image"
                                src={picture.originalFileUrl!}
                                width={picture.contentInfo?.image?.width}
                                height={400}
                            />
                        )
                    })
                }
            </div>
            <ScrollButton />
        </div>
    )
}
