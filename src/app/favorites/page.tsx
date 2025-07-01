import Favorites from './Favorites'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "GoKartNow | Favorites",
  description: "Favorite karts"
}

const FavoritesPage = () => {
  return <Favorites/>
}

export default FavoritesPage