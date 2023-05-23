import ScrollButton from "@/components/ScrollButton";
import UploadcareImage from "@uploadcare/nextjs-loader";

export default function About() {
    return (
        <div className="lg:pl-1/2 md:pl-14">
            <div className="grid xs:gap-0 md:gap-8 grid-cols-1 min-[320px]:p-8 px-24  lg:grid-cols-2" max-w-lg>
                <div className="col  text-left">
                    <p className="indent-8">Capturing moments through the lens and bringing them to life is an art, and Biljana, a budding freelance photographer, has mastered this craft with remarkable skill and passion. Despite being a student studying photography, Biljana possesses an innate talent and an eye for detail that sets them apart in the field.</p>
                    <br />
                    <p className="indent-8">From the first click of the camera to the final touches in post-processing, Biljana approaches each project with unwavering dedication and a desire to create stunning visual stories. Their portfolio showcases a diverse range of subjects, including portraits, landscapes, events, and conceptual art, each captured with a unique perspective and a keen understanding of light, composition, and emotion.</p>
                    <br />
                    <p className="indent-8">As a student studying photography, Biljana constantly seeks to expand their knowledge and technical expertise. They tirelessly explore new techniques, experiment with different equipment, and push the boundaries of their creativity. Through formal education, Biljana is honing their skills, learning the principles of visual storytelling, and developing a deep understanding of the history and evolution of photography. </p>
                    <br />
                    <p className="indent-8">What truly sets Biljana Kukolj apart is their ability to establish a genuine connection with their subjects. Whether photographing a corporate event, a wedding, or a personal portrait session, they effortlessly create a comfortable and relaxed atmosphere, allowing their clients' true personalities and emotions to shine through in every shot. </p>
                    <br />
                    <p className="indent-8">Contact Biljana Kukolj today to discuss your photography needs, and let their passion and expertise illuminate your moments like never before.</p>
                </div>
                <UploadcareImage
                    className="col pb-8 xs:pt-8 md:pt-0"
                    alt="Test image"
                    src='https://ucarecdn.com/61a657bc-0721-4b76-93a3-20af723242f3/'
                    width={416}
                    height={577}
                />
                <ScrollButton />
            </div>
        </div>
    )
}
