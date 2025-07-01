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
import useFavoritesStore from '@/store/useFavorites';
import { useMemo } from 'react';
  
const SwiperComponent = () => {
  const { push} = useRouter()
  const addToFavorites = useFavoritesStore(state => state.addToFavorites)
  const removeFromFavorites = useFavoritesStore(state => state.removeFromFavorites)
  const favorites = useFavoritesStore((state) => state.favorites);


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
        TRACKS.map((item) => {

          const isFavorite = favorites.some((favoriteItem) => favoriteItem.name === item.name);

          return (
          <SwiperSlide 
            key={item.id}
            className='mx-[10px] px-[50px] h-screen mb-15'  
          >
            <div
              className='flex flex-col md:flex-row gap-10 my-auto items-center justify-center'
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
                {isFavorite?
                  <Button
                    text="Видалити з улюблених"
                    style='secondary'
                    className='max-w-[250px] w-full h-[40px]'
                    onClick={() => removeFromFavorites(item)}
                  />
                  :
                  <Button
                    text='Додати в улюблені'
                    style='secondary'
                    className='max-w-[250px] w-full h-[40px]'
                    onClick={() => addToFavorites(item)}
                  />
                }
                
              </div>
            </div>
          </SwiperSlide>
        )})
      }
    </Swiper>
  )
}

export default SwiperComponent