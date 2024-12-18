"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-primary text-white w-full h-12 flex justify-between md:justify-evenly items-center px-4 md:px-8'>
      <div>
        <Image src="/Logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div className='hidden md:flex justify-center gap-4'>
        {[
          { name: "Products",  path: "/products" }, // used dynamic method
          { name: "Solutions", path: "/solutions" },
          { name: "Resources", path: "/resources" },
          { name: "Pricing",   path: "/pricing" },
        ].map((item) => (
          <li key={item.name} className='list-none'>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </div>
      <div className='hidden md:block'>
        <button className='bg-[#FFE492] text-black py-1 w-20 rounded-sm'>
          Login
        </button>
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white'>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-12 left-0 w-full bg-primary text-white flex flex-col items-center md:hidden'>
          {[
            { name: "Products", path: "/products" },
            { name: "Solutions", path: "/solutions" },
            { name: "Resources", path: "/resources" },
            { name: "Pricing", path: "/pricing" },
          ].map((item) => (
            <li key={item.name} className='list-none py-2'>
              <Link href={item.path} onClick={toggleMenu}>{item.name}</Link>
            </li>
          ))}
          <button className='bg-[#FFE492] text-black py-1 w-20 rounded-sm my-2'>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
