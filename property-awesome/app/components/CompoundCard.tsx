import React from 'react'
import Property from '../types/Property'
import { Text, IconButton, Modal, ModalOverlay, CloseButton, useDisclosure, ModalHeader, ModalContent, ModalBody } from '@chakra-ui/react'
import Rounder from '../functions/Rounder'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import("@/app/components/MapComponent"), {
    ssr: false
})
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
    </div>
    </Link>
  )
}

function CompoundDetails({property}: Props){
    const {isOpen, onClose, onOpen} = useDisclosure();
    return (
        <div className='flex justify-between flex-grow items-center font-semibold text-orange-300'>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            
            <ModalContent>
            <ModalHeader>
            <CloseButton onClick={onClose}/>
            </ModalHeader>
                <ModalBody>
                    <div className='w-full h-[300px]'>
                    <Map position={[property.Long, property.Lat]} Name={property.Name}/>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
            <Text>{`£${Rounder(property["Price (Villa)"])}`}</Text>
            <Text>{`£${Rounder(property["Price/Meter"])} /m`}<sup>2</sup></Text>
            <IconButton variant={"unstyled"} className=' hover:scale-110 transition-transform' aria-label='location' fontSize={"30px"} icon={<FaMapMarkerAlt/>} onClick={e => {e.preventDefault(); onOpen()}}/>
            <FavoriteButton id={property.id}/>
        </div>
    )
}