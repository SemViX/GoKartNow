'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'

import { TRACKS } from '@/utils/constants';
import Image from 'next/image';

import "swiper/css";
import "swiper/css/navigation"
import 'swiper/css/pagination';
import Button from './UI/Button';
import { useRouter } from 'next/navigation';
import { pagesURL } from '@/config/pages-url.config';
  
const SwiperComponent = () => {
  const { push} = useRouter()
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={100}
      className='mt-10'
      navigation
      pagination={{clickable:true}}
    >
      {
        TRACKS.map((item) => (
          <SwiperSlide 
            key={item.id}
            className='mx-[10px] px-[50px] max-h-[500px] h-screen'  
          >
            <div
              className='flex gap-10 my-auto items-center justify-center'
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={200}
                className='max-w-[500px] max-h-[400px] w-full h-screen rounded-xl shadow-lg shadow-my-primary-dark z-0'
              />
              <div className='flex flex-col justify-start items-start gap-5 w-full'>
                <h3 className='text-my-primary text-3xl font-bold'>
                  {item.name}
                </h3>
                <p className='font-medium text-my-text-muted'>
                  {item.description}
                </p>
                <p>
                  Адреса: <span className='text-my-accent font-semibold'>{item.location}</span>
                </p>
                <p>
                  Тривалість: <span className='text-my-accent font-semibold'>{item.duration} мин.</span>
                </p>
                <p>
                  Вартість за рейс: <span className='text-my-accent font-semibold'>{item.pricePerRace} грн.</span>
                </p>
                <Button
                  text='Забронювати'
                  style='primary'
                  className='max-w-[250px] w-full h-[40px]'
                  onClick={() => push(pagesURL.BOOKING)}
                />
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SwiperComponent