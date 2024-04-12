'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import FavoritesContext from "./FavoritesContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [favorites, setFavorites] = useState<string[]>([]) 
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossOrigin=""/>
     <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossOrigin=""></script>
      </head>
      <ChakraProvider>
      <FavoritesContext.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
      <body className={inter.className}>{children}</body>
      </FavoritesContext.Provider>
      </ChakraProvider>
      
    </html>
  );
}
