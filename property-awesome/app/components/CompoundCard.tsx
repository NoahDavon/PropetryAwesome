import React, { useContext } from 'react'
import Property from '../types/Property'
import { Text, Flex, IconButton } from '@chakra-ui/react'
import Rounder from '../functions/Rounder'
import { FaHeart, FaMapMarkerAlt, FaRegHeart } from 'react-icons/fa'
import FavoritesContext from '../FavoritesContext'
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

type Props = {
    property: Property
}

export default function CompoundCard({property}: Props) {
  return (
    <Link href={`/compoundDetails/${property.id}`}><div style={{backgroundImage: `url(compoundImages/${property.id}.png)`}} className={` cursor-pointer bg-cover group hover:scale-110 transition-all rounded-xl w-80 lg:w-96 h-80 lg:h-96 relative`}>
        <Text className=' absolute top-0 left-0 text-black font-semibold lg:group-hover:opacity-0 stroke-black p-2'>{property.Name}</Text>
        <div className=' p-2 z-10 bg-white w-full text-orange-300 opacity-0 font-semibold lg:group-hover:opacity-75 transition-all rounded-xl'>
            <Text className=' '>{property.Name}</Text>
            <CompoundDetails property={property}/>
        </div>
        <div className='absolute bottom-0 left-0 lg:hidden flex w-full opacity-90 p-2 text-orange-300 rounded-xl bg-white '><CompoundDetails property={property}/></div>
    </div></Link>
  )
}

function CompoundDetails({property}: Props){
    const {favorites, setFavorites} = useContext(FavoritesContext)
    return (
        <div className='flex justify-between flex-grow items-center font-semibold text-orange-300'>
            <Text>{`£${Rounder(property["Price (Villa)"])}`}</Text>
            <Text>{`£${Rounder(property["Price/Meter"])} /m`}<sup>2</sup></Text>
            <IconButton variant={"unstyled"} className=' hover:scale-110 transition-transform' aria-label='location' fontSize={"30px"} icon={<FaMapMarkerAlt/>}/>
            <FavoriteButton id={property.id}/>
        </div>
    )
}