import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {

    const pathName = usePathname();
  return (
    <Link href={link.path} className={`${pathName===link.path ? "bg-black text-white rounded p-1 " : "" }`}>{link.name}</Link>
  )
}

export default NavLink