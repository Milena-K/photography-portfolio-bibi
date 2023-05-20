import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <nav className="grid px-24 py-14 grid-cols-2">
      <div className="col">
        <Logo />
      </div>
      <div className="col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="xs:hidden block inline-flex p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          aria-label="Main menu"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden lg:block `}>
          <ul className="flex flex-row-reverse text-md text-gray-600">
            <li className="mr-6 border-b-2 border-white hover:border-gray-500">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="mr-6 border-b-2 border-white hover:border-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-6 border-white border-b-2 hover:border-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
