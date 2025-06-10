import { Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen min-h-[100px] bg-my-surface mt-auto flex justify-around p-5 flex-col md:flex-row md:flex-wrap'>
        <div className='max-w-[200px]'>
            <h3 className='text-lg font-semibold'>
                Про нас
            </h3>
            <p className='mt-5'>
                Go<span className='text-my-accent'>Kart</span>Now — сервіс, який пропонує адреналін, швидкість і незабутні враження.
            </p>
        </div>
        <div>
            <h3 className='text-lg font-semibold'>
                Контакти
            </h3>
            <ul className='flex flex-col gap-4 mt-5'>
                <li><span className='font-semibold'>Email:</span> support@gokartnow.com</li>
                <li><span className='font-semibold'>Телефон:</span> +1 (800) 555-1234</li>
            </ul>
        </div>
        <div>
             <h3 className='text-lg font-semibold'>
                Соцмережі
            </h3>
            <div className='flex justify-between gap-3 mt-5 flex-wrap'>
                <Link href="https://www.instagram.com" className='p-2 border-2 border-white rounded-xl hover:border-my-accent hover:text-my-accent transition-colors duration-200 '>
                    <Instagram size={30}/>
                </Link>
                <Link href="https://www.facebook.com" className='p-2 border-2 border-white rounded-xl hover:border-my-accent transition-colors duration-200 hover:text-my-accent'>
                    <Facebook size={30}/>
                </Link>
                <Link href="https://www.youtube.com" className='p-2 border-2 border-white rounded-xl hover:border-my-accent transition-colors duration-200 hover:text-my-accent'>
                    <Youtube size={30}/>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer