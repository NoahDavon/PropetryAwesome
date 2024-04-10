'use client'
import { useState } from "react";
import FavoritesContext from "./FavoritesContext";
import CompoundCard from "./components/CompoundCard";
import { TabList, Tabs, Tab, TabPanels, TabPanel, Text } from "@chakra-ui/react";
import { FaBuilding, FaHeart } from "react-icons/fa";
import FavoritesPanel from "./components/FavoritesPanel";
import Property from "./types/Property";
import PropertiesPanel from "./components/PropertiesPanel";

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([]) 
  return (
    <FavoritesContext.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
      <Tabs className=" text-orange-300" variant={"enclosed"} colorScheme="orange">
        <TabList display={"flex"} justifyContent={"center"} gap={"100px"}>
          <Tab><FaBuilding className="mx-4" size={"30px"}/></Tab>
          <Tab><FaHeart className="mx-4" size={"30px"}/><Text>{favorites.length? favorites.length : ""}</Text></Tab>
        </TabList>
        <TabPanels>
          <PropertiesPanel/>
          <FavoritesPanel/>
        </TabPanels>
      </Tabs>
    
    </FavoritesContext.Provider>
    
  );
}
