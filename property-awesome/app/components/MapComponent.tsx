'use client'
import { LatLngExpression } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css';

type Props = {
    position: LatLngExpression,
    Name: string
}

export const MapComponent = ({position, Name}: Props) => {
  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        {Name}
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default MapComponent