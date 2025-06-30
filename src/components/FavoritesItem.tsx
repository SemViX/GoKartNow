'use client'
import useFavoritesStore, { ITrackTypes } from '@/store/useFavorites'
import Image from 'next/image'
import Button from './UI/Button'
import { pagesURL } from '@/config/pages-url.config'
import { useRouter } from 'next/navigation'
import {motion} from "motion/react"

const FavoritesItem = (item:ITrackTypes) => {
    const {push} = useRouter()
    const addToFavorites = useFavoritesStore(state => state.addToFavorites)
    const removeFromFavorites = useFavoritesStore(state => state.removeFromFavorites)
    const isFavorite = useFavoritesStore(state => state.isFavorite)
  return (
    <motion.div
        initial={{y:-10, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:false}}
        transition={{duration:0.4, delay:0.2, ease:"easeInOut"}} 
        className='bg-my-surface max-w-[300px] min-h-[400px] w-full shadow-lg shadow-my-accent/30 rounded-lg p-4 flex flex-col gap-2'
    >
        <Image
            src={item.imageUrl}
            width={300}
            height={300}
            alt={item.name}
            className='max-w-[300px] w-[100%] h-[300px]'
        />
        <h3 className='text-2xl font-semibold text-my-accent'>
            {item.name}
        </h3>
        <p className='text-my-accent'>
            <span className='text-my-text font-semibold'>Локація:</span> {item.location}
        </p>
        <p className='text-my-accent'>
            <span className='text-my-text font-semibold'>Ціна за рейс:</span> {item.pricePerRace} грн.
        </p>
        <p className='text-my-accent'>
            <span className='text-my-text font-semibold'>Тривалість:</span> {item.duration} хв.
        </p>

        <Button
            text='Забронювати'
            style='primary'
            className='max-w-[250px] w-full h-[40px]'
            onClick={() => push(pagesURL.BOOKING)}
        />
        {isFavorite(item)?
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
    </motion.div>
  )
}

export default FavoritesItem