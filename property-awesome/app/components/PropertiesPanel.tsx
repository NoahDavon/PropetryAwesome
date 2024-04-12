'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Property from '../types/Property'
import { Spinner, TabPanel } from '@chakra-ui/react'
import CompoundCard from './CompoundCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import parse from 'parse-link-header'
type Props = {
}

export default function PropertiesPanel({}: Props) {
    const [properties, setProperties] = useState<Property[]>([]);
    const [nextLink, setNextLink] = useState<string|undefined>("1");
    useEffect(()=> {fetchMore();}, [])
    const fetchMore = useCallback(()=>{
        console.log("FETCHING")
        fetch(`http://localhost:3001/properties?_page=${nextLink}&_limit=9`).then(r => {
          const nextPage = parse(r.headers.get("link"))?.next?._page;
          setNextLink(nextPage)
          return r.json();
        }).then(r => {
          setProperties([...properties, ...r]);
        })
      }, [nextLink, properties]);
  return (
    <TabPanel>
        <InfiniteScroll
            dataLength={properties.length}
            hasMore= {typeof nextLink !== "undefined"}
            style={{display: "flex", justifyContent: "center", width: "100%", gap: "40px", flexWrap: "wrap", paddingTop: "1.25rem"}}
            next={fetchMore}
            loader= {<Spinner colorScheme='orange'/>}
        >
            {properties.map(x => <CompoundCard property={x}/>)}
        </InfiniteScroll>
        
    </TabPanel>
  )
}