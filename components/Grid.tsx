import Image from 'next/image'
import { ListFormat } from 'typescript'

interface GridProps {
  images: string[]
}


export default function PhotoGrid({ images }: GridProps) {

  return (
    <div className="grid gap-24 grid-cols-2 mx-24 grid-flow-row auto-rows-max">
      {images && images.map(img => (
        <div className="col" key={img}>
        </div>
      ))}
    </div>
  )
}
