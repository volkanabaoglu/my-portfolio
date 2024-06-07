"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import { motion } from 'framer-motion';

const Navbar = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' }
    ];

    const [toggleMenu, setToggleMenu] = useState(false);

    const topVariants = {
        closed: { rotate: 0, backgroundColor: "rgb(0, 0, 0)" },
        open: { rotate: 45, backgroundColor: "rgb(255, 255, 255)" }
    };

    const centerVariants = {
        closed: { opacity: 1 },
        open: { opacity: 0 }
    };

    const bottomVariants = {
        closed: { rotate: 0, backgroundColor: "rgb(0, 0, 0)" },
        open: { rotate: -45, backgroundColor: "rgb(255, 255, 255)" }
    };

    const listVariants = {
        open: {
            x: 0
            , transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
        closed: { x: "100vw" }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 50 },
        open: { opacity: 1, x: 0 }
    };

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
            <div className='flex justify-center items-center w-1/3'>
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-2 pl-2">Volkan</span>
                    <span className="w-16 h-8 rounded bg-white text-black flex items-center justify-center px-4">Abaoglu</span>
                </Link>
            </div>


            <div className='hidden md:flex justify-center items-center gap-6 w-1/3'>
                <Link href={"https://github.com/volkanabaoglu"}>
                    <Image src='/github.png' width={24} height={24} alt='github' />
                </Link>
                <Link href={"https://www.instagram.com/volkanabaoglu/"}>
                    <Image src='/instagram.png' width={24} height={24} alt='instagram' />
                </Link>
                <Link href={"https://www.linkedin.com/in/vabaoglu/"}>
                    <Image src='/linkedin.png' width={24} height={24} alt='linkedin' />
                </Link>
                <Link href={"https://x.com/volkanabaoglu0"}>
                    <Image src='/twitter.png' width={24} height={24} alt='x' />
                </Link>
            </div>

            {/* Responsive Menu */}
            <div className='md:hidden'>
                <button onClick={() => setToggleMenu(!toggleMenu)} className='w-10 h-6 flex flex-col justify-between z-50 relative'>
                    <motion.div variants={topVariants} animate={toggleMenu ? "open" : "closed"} className={`w-8 h-1 ${toggleMenu ? "bg-white" : "bg-black"} rounded origin-left`}></motion.div>
                    <motion.div variants={centerVariants} animate={toggleMenu ? "open" : "closed"} className={`w-8 h-1 ${toggleMenu ? "bg-white" : "bg-black"} rounded`}></motion.div>
                    <motion.div variants={bottomVariants} animate={toggleMenu ? "open" : "closed"} className={`w-8 h-1 ${toggleMenu ? "bg-white" : "bg-black"} rounded origin-left`}></motion.div>
                </button>
            </div>

            {toggleMenu && (
                <motion.div variants={listVariants} animate={toggleMenu ? "open" : "closed"} initial="closed" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                    {links.map((link, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Link href={link.path}>
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default Navbar;
