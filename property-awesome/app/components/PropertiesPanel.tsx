'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Property from '../types/Property'
import { Spinner, TabPanel } from '@chakra-ui/react'
import CompoundCard from './CompoundCard'
import InfiniteScroll from 'react-infinite-scroll-component'

type Props = {
}

export default function PropertiesPanel({}: Props) {
    const [properties, setProperties] = useState<Property[]>([]);
    const [nextLink, setNextLink] = useState(1);
    useEffect(()=> {fetchMore();}, [])
    const fetchMore = useCallback(()=>{
        console.log("FETCHING")
        fetch(`http://localhost:3000/properties?_page=${nextLink}&_per_page=16`).then(r => r.json()).then(r => {
          setNextLink(r.next);
          setProperties([...properties, ...r.data]);
        })
      }, [nextLink]);
      console.log(properties)
  return (
    <TabPanel>
        <InfiniteScroll
            dataLength={properties.length}
            hasMore= {nextLink!==null}
            style={{display: "flex", justifyContent: "center", width: "100%", gap: "40px", flexWrap: "wrap"}}
            next={fetchMore}
            loader= {<Spinner colorScheme='orange'/>}
        >
            {properties.map(x => <CompoundCard property={x}/>)}
        </InfiniteScroll>
        
    </TabPanel>
  )
}