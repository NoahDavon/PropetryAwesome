'use client'
import { useState } from "react";
import FavoritesContext from "./FavoritesContext";
import CompoundCard from "./components/CompoundCard";
import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FaBuilding, FaHeart } from "react-icons/fa";
import FavoritesPanel from "./components/FavoritesPanel";

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([])
  return (
    <FavoritesContext.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
      <Tabs className=" text-orange-300" variant={"enclosed"} colorScheme="orange">
        <TabList display={"flex"} justifyContent={"center"} gap={"100px"}>
          <Tab><FaBuilding className="mx-4" size={"30px"}/></Tab>
          <Tab><FaHeart className="mx-4" size={"30px"}/></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CompoundCard property={{Name: "Sodic East", ID: 10, Lat:0, Long: 0, "Price (Villa)": 1000, "Price/Meter": 10, Description: ""}}/>
          </TabPanel>
          <FavoritesPanel/>
        </TabPanels>
      </Tabs>
    
    </FavoritesContext.Provider>
    
  );
}
