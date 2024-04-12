import { Input, List, ListItem, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import React from 'react'

type Props = {}

export default function Searchbar({}: Props) {
  const {isOpen, onOpen, onClose} = useDisclosure()
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
        <input onClick={e=> {e.preventDefault()}} onBlur={onClose} onFocus={onOpen} type='text' className=' w-full sticky top-5 h-5 bg-slate-200 rounded-full p-4 border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300' placeholder='Search for properties and compounds...'/>
      </PopoverTrigger>
    </div>
    <PopoverArrow zIndex={20}/>
    <PopoverContent zIndex={20} overflow={"visible"}>
      <PopoverBody zIndex={20}>
        <List zIndex={20}>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
        </List>
      </PopoverBody>
    </PopoverContent>
    </Popover>
  )
}