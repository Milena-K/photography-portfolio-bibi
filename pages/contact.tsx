import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Logo from '@/components/Logo'
import ContactForm from '@/components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Favicon from '@/components/Favicon'


export default function Home() {

  return (
    <>
      <Head>
        <title>Biljana Kukolj Photography</title>
        <meta name="description" content="Biljana Kukolj Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
      </Head>
      <div className="md:px-24 md:py-20 min-[320px]:p-8 grid xs:grid-cols-1  md:grid-cols-2">

        <div className="col pr-8 pb-12">
          <p className="text-5xl  pb-8 font-bolder">Contact Biljana.</p>
          <p className="pb-5">Biljana is available for freelance work; if you would like to discuss a project please fill out the form below and she will get back to you soon!</p>
          <a href="https://www.instagram.com/kukolj.jpg/">
            <FontAwesomeIcon className="w-8 h-8" icon={faInstagram} />
          </a>
        </div>

        <div className="col">
          <ContactForm />
        </div>

      </div>
    </>
  )
}
