import React from 'react'
import SwiperComponent from './SwiperComponent'

const TrackSection = () => {
  return (
    <section className='min-h-screen container mx-auto'>
        <h2 className='text-center text-4xl font-bold mt-[100px]'>
            Обери свій трек
        </h2>
        <SwiperComponent/>
    </section>
  )
}

export default TrackSection