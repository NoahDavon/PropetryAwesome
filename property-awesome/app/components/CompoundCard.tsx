import React from 'react'
import Property from '../types/Property'
import { Text, Flex } from '@chakra-ui/react'

type Props = {
    property: Property
}

export default function CompoundCard({property}: Props) {
  return (
    <div style={{backgroundImage: `url(compoundImages/${property.ID}.png)`}} className={` cursor-pointer bg-cover group hover:scale-110 transition-all rounded-xl w-64 lg:w-96 h-64 lg:h-96 relative`}>
        <Text className=' absolute top-0 left-0 text-black font-semibold group-hover:opacity-0 stroke-black p-4'>{property.Name}</Text>
        <Flex className=' p-4 z-10 bg-white w-full text-orange-300 opacity-0 font-semibold group-hover:opacity-75 transition-all rounded-xl'>
            <Text className=' '>{property.Name}</Text>
        </Flex>
        <div className='absolute bottom-0 left-0 lg:hidden flex w-full opacity-90 p-4 text-orange-300 rounded-xl bg-white '>Prices and all</div>
    </div>
  )
}