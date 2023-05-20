import Image from 'next/Image'
import { ListFormat } from 'typescript'

interface GridProps {
    images: staticImageData[]
}


export default function PhotoGrid({images}:GridProps) {

    return (
      <div className="grid gap-24 grid-cols-2 mx-24 grid-flow-row auto-rows-max">
          {images && images.map(img => (
            <div className="col" key={img.src}>
                {/* TODO: add alt prop to image to improve SEO */}
                <Image src={img} />
            </div>
          ))}
      </div>
    )
}
