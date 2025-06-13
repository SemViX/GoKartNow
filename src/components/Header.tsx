'use client'
import { pagesURL } from '@/config/pages-url.config'
import { headerLinks } from '@/utils/headerLinks'
import Link from 'next/link'
import React, { useState } from 'react'
import {Menu, X} from 'lucide-react'
import DropdownHeader from './DropdownHeader'

const Header = () => {
    const [isDropdownOpen, SetOpen] = useState<boolean>(false)

    const resetState = () => {
        SetOpen(false)
    }
  return (
    <header className="flex gap-10 justify-between px-10 min-h-[100px] items-center bg-my-surface/50 shadow-lg shadow-my-accent/20 fixed top-0 w-screen z-50">
        <Link href={pagesURL.MAIN} className="text-4xl font-bold z-50">
            Go<span className='text-my-accent'>Kart</span>Now
        </Link>
        <ul className='gap-10 justify-between items-center hidden md:flex'>
            {headerLinks.map((item) => (
                <li key={item.id}>
                    <Link href={item.link} className='text-xl font-semibold hover:text-my-accent transition-colors duration-200'>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
        <div className='block md:hidden z-50' onClick={() => SetOpen((prev) => !prev)}>
            {isDropdownOpen? <X size={40}/>: <Menu size={40}/> }
        </div>
        <DropdownHeader isOpen={isDropdownOpen} resetState={resetState}/>
    </header>
  )
}

export default Header