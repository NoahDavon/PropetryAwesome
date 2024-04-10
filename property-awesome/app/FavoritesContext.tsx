import { createContext } from "react"

export const FavoritesContext = createContext({favorites:[0], setFavorites: ([])=> {}})
export default FavoritesContext