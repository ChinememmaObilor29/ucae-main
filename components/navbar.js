import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const navigation = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Contact Support", href: "/contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-blue-400 dark:text-gray-100 cursor-pointer">
              <span>
                <Image
                  src="/img/WhatsApp Image 2024-02-03 at 19.23.09_1b9b2ddf.jpg.png"
                  alt="N"
                  width={32}
                  height={70}
                  className="w-8"
                />
              </span>
              <span className="spann">UCAE Global Services</span>
            </span>
          </Link>
          {/* Burger Menu Icon */}
          <div className="block lg:hidden mt-2">
            <button onClick={toggleMobileMenu} className="text-gray-600 dark:text-gray-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="w-full lg:hidden">
            <ul className="flex flex-col items-center py-4">
              {navigation.map((menuItem, index) => (
                <li key={index} className="mb-4">
                  <Link href={menuItem.href}>
                    <span className="text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 cursor-pointer">
                      {menuItem.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menuItem, index) => (
              <li className="mr-2 nav__item" key={index}>
                <Link href={menuItem.href}>
                  <span className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 cursor-pointer">
                    {menuItem.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
