import { createContext } from "react"

export const FavoritesContext = createContext({favorites:[""], setFavorites: ([])=> {}})
export default FavoritesContext