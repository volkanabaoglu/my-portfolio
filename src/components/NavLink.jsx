import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const NavLink = ({ link }) => {
    const pathName = usePathname();

    return (
        <Link href={link.path}>
            <motion.div
                className={`p-1 rounded relative ${pathName === link.path ? "text-white" : "text-black"}`}
            >
                {link.name}
                {pathName === link.path && (
                    <motion.div
                        className="absolute inset-0 bg-black z-[-1]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </motion.div>
        </Link>
    );
}

export default NavLink;
