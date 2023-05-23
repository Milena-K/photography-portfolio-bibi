import UploadcareImage from "@uploadcare/nextjs-loader"
import { FileInfo } from "@uploadcare/rest-client"

export default function CategoryCard({ picture }: { picture: FileInfo }) {
    const width = picture.contentInfo?.image?.width
    console.log()
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
                <h1 className="text-4xl text-white fw-bold absolute top-8 left-8">Category 1</h1>
            </div>
        </div >
    )
}
