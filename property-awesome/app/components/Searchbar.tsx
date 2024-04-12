import { Input, List, ListItem, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import Property from '../types/Property'
import Link from 'next/link'

type Props = {
  property: Property
}

export default function Searchbar() {
  const [queryResults, setQueryResults] = useState<Property[]>([]);
  const {isOpen, onOpen, onClose} = useDisclosure()
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.value === ""){
      setQueryResults([]); return;
    }
    fetch(`http://localhost:3001/properties?Name_like=${e.target.value}`).then(r => r.json()).then(setQueryResults);
  }
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      closeOnBlur={false}
      returnFocusOnClose={false}
      autoFocus={false}
      matchWidth={true}
    >
    <div className=' w-full sticky top-[46px] z-10 p-2 bg-white' >
      <PopoverTrigger>
        <input onChange={handleChange} onClick={e=> {e.preventDefault()}} onBlur={onClose} onFocus={onOpen} type='text' className=' w-full sticky top-5 h-5 bg-slate-200 rounded-full p-4 border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300' placeholder='Search for properties and compounds...'/>
      </PopoverTrigger>
    </div>
    <PopoverArrow zIndex={20}/>
    <PopoverContent zIndex={20} overflow={"visible"}>
      <PopoverBody zIndex={20}>
        {queryResults.length>0?
        <List zIndex={20}>
          {queryResults.map(x => <SearchItem property={x}/>)}
        </List> :
        <Text>Search compunds by name...</Text>}
      </PopoverBody>
    </PopoverContent>
    </Popover>
  )
}

function SearchItem({property} : Props){
  return(
    <ListItem>
      <Link href={`/compoundDetails/${property.id}`}>
        <Text fontWeight={"bold"}>{property.Name}</Text>
      </Link>
    </ListItem>
  )
}