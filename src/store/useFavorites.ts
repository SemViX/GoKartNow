import {create} from "zustand"


export interface ITrackTypes{
    name:string;
    location:string;
    description:string;
    imageUrl: string;
    pricePerRace: number;
    duration: string;
}

interface IFavoritesStoreTypes{
    favorites: ITrackTypes[];
    addToFavorites: (track:ITrackTypes) => void;
    removeFromFavorites: (track:ITrackTypes) => void;
    isFavorite: (track:ITrackTypes) => boolean;   
}


const useFavoritesStore = create<IFavoritesStoreTypes>()((set, get) => ({
    favorites: [],
    addToFavorites: (track) => set((state) => ({favorites:[...state.favorites, track]})),
    removeFromFavorites: (track) =>
        set((state) => ({
            favorites: state.favorites.filter((item) => item.name !== track.name)
        })),
    isFavorite: (track) => {
        return get().favorites.some(item => item.name === track.name)
    } 
})) 

export default useFavoritesStore