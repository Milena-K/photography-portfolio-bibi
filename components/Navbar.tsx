import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <nav className="grid px-24 py-14 md:grid-cols-2 xs:grid-cols-1 gap-4">
      <div className="col">
        <Logo />
      </div>
      <div className="col">
        <ul className="flex h-fit md:justify-end text-md text-gray-600">
          <li className="mr-6 border-b-2 border-white hover:border-gray-500">
            <Link href="/">Portfolio</Link>
          </li>
          <li className="mr-6 border-b-2 border-white hover:border-gray-500">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-6 border-white border-b-2 hover:border-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
