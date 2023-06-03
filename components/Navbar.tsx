import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const routePaths = ['About', 'Contact']
    const router = useRouter()
    const activePath = router.pathname;
    const categoryPaths = ['fingerboarding', 'product', 'skateboarding', 'skatehalle', 'studio', 'whiteshirt']
    const categoryTitles = ['Fingerboarding', 'Product', 'Skateboarding', 'Skate Halle', 'Studio', 'White Shirt']
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const handleClick = () => {
        setToggleDropdown(!toggleDropdown);
    }

    console.log()
    return (
        <nav className="min-[320px]:p-8 md:px-24 md:pt-14 gap-4 grid-flow-row-dense sm:pb-0">
            <div className='grid sm:grid-cols-2 min-[320px]:grid-cols-1'>
                <div className="col w-fit">
                    <Logo />
                </div>
                <div className="col md:justify-end items-center">
                    <ul className="flex md:justify-end text-md text-grey-600">
                        <li onMouseOver={handleClick} onClick={handleClick} className={'mr-6 border-b-2  hover:border-grey-500 ' + (activePath.includes('category') ? "border-black" : "border-white")}>
                            Portfolio
                        </li>
                        {
                            routePaths.map((route) => {
                                const path = "/" + route.toLowerCase()
                                const isActive = path == activePath
                                return <li onClick={() => setToggleDropdown(false)}>
                                    <Link href={path}
                                        className={"mr-6 border-b-2  hover:border-grey-500 " + (isActive ? "border-black" : "border-white")}
                                    >{route}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className=''>
                <div className="col pt-3 flex min-[300px]:justify-start sm:justify-end ">

                    <ul className={"border border-black p-2 gap-3 grid min-[300px]:grid-cols-2 sm:grid-cols-3 flex sm:justify-end text-md text-grey-600 " + (toggleDropdown ? 'inline-flex' : 'hidden')} >
                        {
                            categoryPaths.map((category, index) => {
                                return <li className='sm:text-center' onClick={handleClick}>
                                    <Link href={"/category/" + category}
                                        className=' border-b-2 hover:border-black border-white min-[300px]:text-right pt-2 '
                                    >{categoryTitles[index]}</Link>
                                </li>

                            })
                        }
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
