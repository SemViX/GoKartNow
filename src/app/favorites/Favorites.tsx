'use client'

import FavoritesItem from "@/components/FavoritesItem"
import useFavoritesStore from "@/store/useFavorites"

const Favorites = () => {
  const favorites = useFavoritesStore(state => state.favorites)

  return (
    <section className='min-h-screen container mx-auto'>
        <h1 className='text-4xl font-bold text-my-text mt-[100px] text-center'>
            Улюблені карти
        </h1>

        {favorites.length === 0?
          <h2 className="text-3xl text-my-text-muted font-semibold mt-10">У вас поки нема улюблених кратів!</h2>
          :
          <div className="flex flex-wrap gap-5 my-5">
            {favorites.map((item, index) => (
              <FavoritesItem
                key={index}
                name={item.name}
                location={item.location}
                duration={item.duration}
                description={item.description}
                pricePerRace={item.pricePerRace}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        }
    </section>
  )
}

export default Favorites