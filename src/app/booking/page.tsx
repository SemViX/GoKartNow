import BookingForm from '@/components/UI/BookingForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title: "GoKartNow | Booking"
}

const booking = () => {
  return (
    <section className='min-h-screen container mx-auto'>
        <h1 className='text-4xl font-bold text-center mt-[100px]'>
            Забронюйте свій заїзд
        </h1>
        <BookingForm/>
    </section>
  )
}

export default booking