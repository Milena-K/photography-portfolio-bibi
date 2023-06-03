import UploadcareImage from "@uploadcare/nextjs-loader"
import { FileInfo } from "@uploadcare/rest-client"

export default function CategoryCard({ picture, category }: { picture: FileInfo, category: string }) {
    const width = picture.contentInfo?.image?.width
    return (
        <div className="container relative w-fit">
            <UploadcareImage
                className="hover:blur-sm transition duration-400 ease-out hover:ease-in"
                key={picture.url}
                alt="Test image"
                src={picture.originalFileUrl!}
                width={picture.contentInfo?.image?.width}
                height={picture.contentInfo?.image?.height}
            />
            <div>
                <h1 className="text-4xl text-black text-center fw-bold pt-2">{category}</h1>
            </div>
        </div >
    )
}
