import React from 'react'
import {easeInOut, motion} from 'motion/react'
import { headerLinks } from '@/utils/headerLinks'
import Link from 'next/link'

interface IDropdownHeaderProps { 
    isOpen:boolean
    resetState: () => void
}

const DropdownHeader = ({isOpen, resetState}:IDropdownHeaderProps) => {
  return (
    <motion.div
        className='absolute top-0 left-0 w-screen bg-my-surface z-40 flex justify-center items-center'
        variants={{
            open:{
                height: '100vh',
                opacity: 100
            },
            close:{
                height: 0,
                opacity: 0,

            }
        }}
        animate={isOpen? "open" : "close"}
    >
        <ul className='flex flex-col gap-10'>
            {
                headerLinks.map((item) => (
                    <motion.li
                        key={item.id}
                        className="before:content-none"
                        onClick={() => resetState()}
                        initial={{ x: 10, opacity: 0 }}
                        animate={isOpen ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easeInOut, delay: 0.2 + (item.id / 10) }}
                    >
                        <Link 
                            className='text-xl font-semibold hover:text-my-accent transition-colors duration-200' 
                            href={item.link}
                        >
                            {item.name}
                        </Link>
                    </motion.li>
                ))
            }
        </ul>
    </motion.div>
  )
}

export default DropdownHeader