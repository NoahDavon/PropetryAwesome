'use client'
import { useState } from "react";
import FavoritesContext from "./FavoritesContext";
import CompoundCard from "./components/CompoundCard";

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([])
  return (
    <FavoritesContext.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
    <CompoundCard property={{Name: "Sodic East", ID: 10, Lat:0, Long: 0, "Price (Villa)": 1000, "Price/Meter": 10, Description: ""}}/>
    </FavoritesContext.Provider>
    
  );
}
