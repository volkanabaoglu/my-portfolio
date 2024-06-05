"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
const Navbar = () => {

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' }
    ]

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className='hidden md:flex justify-center items-center gap-8 w-1/3'>
                {links.map((link, index) => (
                    <NavLink key={index} link={link} href={link.path} className='hidden md:block text-lg font-semibold text-black hover:text-white'>
                        {link.name}
                    </NavLink>
                ))}
            </div>

            {/* LOGO */}
            <div className='md:hidden lg:flex w-1/3 xl:justify-center'>
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-2 pl-2">Volkan</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center px-9">Abaoglu</span>
                </Link>
            </div>

            <div className='hidden md:flex justify-center items-center gap-6 w-1/3'>
                <Link href={""}>
                    <Image src='/github.png' width={24} height={24} alt='' />
                </Link>
                <Link href={""}>
                    <Image src='/instagram.png' width={24} height={24} alt='' />
                </Link>
                <Link href={""}>
                    <Image src='/linkedin.png' width={24} height={24} alt='' />
                </Link>
            </div>

            
            {/* Responsive Menu */}
            <div className='md:hidden'>
                <button  onClick={() => setToggleMenu(!toggleMenu)} className='w-10 h-6 flex flex-col justify-between z-50 relative'>
                    <div className={`w-8  h-1 ${toggleMenu ? "bg-white" : "bg-black"} rounded`}></div>
                    <div className={`w-8  h-1 ${toggleMenu ? "bg-white" : "bg-black"} rounded`}></div>
                    <div className={`w-8  h-1 ${toggleMenu ? "bg-white" : "bg-black"} rounded`}></div>
                </button>
            </div>

            {toggleMenu && (
                <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                {links.map((link, index) => (
                    <Link key={index} href={link.path}>
                        {link.name}
                    </Link>
                ))}
            </div>
            )}


        </div>
    );
}

export default Navbar;