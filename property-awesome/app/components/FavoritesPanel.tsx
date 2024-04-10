import { Button, TabPanel } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import FavoritesContext from '../FavoritesContext'
import CompoundCard from './CompoundCard';
import Property from '../types/Property';

type Props = {
}

export default function FavoritesPanel({}: Props) {
    const [properties, setProperties] = useState<Property[]>([]);
    useEffect(() => {
        fetch(`http://localhost:3000/properties`).then(r => r.json()).then(r => {
          setProperties([...properties, ...r]);
        })
      }, [])
    const {favorites, setFavorites} = useContext(FavoritesContext);
  return (
    <TabPanel display={"flex"} alignItems={"center"} flexDir={"column"} width={"100%"}>
        <Button width={"5rem"} colorScheme='orange' onClick={()=> setFavorites([])}>Clear</Button>
        <div className='flex content-center gap-5 flex-wrap'>{properties?.filter(property => favorites.find(id => property.ID == id)).map(property => <CompoundCard property={property}/>)}</div>
        
    </TabPanel>
  )
}