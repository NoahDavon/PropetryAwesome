import { Button, TabPanel } from '@chakra-ui/react'
import React, { useContext } from 'react'
import FavoritesContext from '../FavoritesContext'
import CompoundCard from './CompoundCard';

type Props = {

}

export default function FavoritesPanel({}: Props) {
    const {favorites, setFavorites} = useContext(FavoritesContext);
  return (
    <TabPanel display={"flex"} alignItems={"center"} flexDir={"column"} width={"100%"}>
        <Button width={"5rem"} colorScheme='orange' onClick={()=> setFavorites([])}>Clear</Button>
        {/* <div className='flex content-center gap-5 flex-wrap'>{favorites.map(x => <CompoundCard/>)}</div> */}
        
    </TabPanel>
  )
}