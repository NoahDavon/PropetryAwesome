'use client'
import { IconButton } from '@chakra-ui/react';
import React, { useContext } from 'react'
import FavoritesContext from '../FavoritesContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

type Props = {
    id: string
}

export default function FavoriteButton({id}: Props) {
    const {favorites, setFavorites} = useContext(FavoritesContext)
  return (
    <div className=' hover:scale-110 transition-transform relative text-orange-300'>
                <IconButton variant="unstyled" position={"absolute"} className='right-0 -top-5' onClick={(e) => {e.preventDefault(); favorites.find(x => x == id)? setFavorites(favorites.filter(x => x !== id)) : setFavorites([...favorites, id]);}} aria-label='favorite' fontSize={"30px"} icon={<FaRegHeart/>}/>
                <IconButton variant="unstyled" position={"absolute"} className={`transition-opacity duration-1000 right-0 -top-5 opacity-${favorites.find(x => x == id)? "100" : "0"}`} onClick={(e) => {e.preventDefault(); favorites.find(x => x == id)? setFavorites(favorites.filter(x => x !== id)) : setFavorites([...favorites, id]);}} aria-label='favorited' fontSize={"30px"} icon={<FaHeart/>}/>
            </div>
  )
}