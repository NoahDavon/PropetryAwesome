'use server'

import BackButton from "@/app/components/BackButton"
import Rounder from "@/app/functions/Rounder"
import Property from "@/app/types/Property"
import { Divider, Image, Text } from "@chakra-ui/react"

type Props = {
    params: {
        id: string
    }
}

async function getProperty(id : string): Promise<Property>{
    return await fetch(`http://localhost:3001/properties/${id}`).then(r => r.json()) as Property;
}

export default async function Page({params: {id}}: Props) {
    const property = await getProperty(id);
  return (
    <div className="p-2">
        <BackButton/>
        <div className="w-full lg:w-2/3 mx-auto border-2  border-orange-300 p-2 rounded-xl">
        <Image className=" lg:w-2/3 mx-auto rounded-xl" src={`/compoundImages/${property.id}.png`} aspectRatio={"1/1"}/>
        <Text className="text-orange-400 font-bold text-5xl p-4">{property.Name}</Text>
        <div className="flex justify-between lg:justify-center gap-8 p-4">
            <div className="text-center">
                <Text className="text-orange-300 font-semibold text-2xl">Average Price</Text>
                <Text className="text-xl">{`£${Rounder(property["Price (Villa)"])}`}</Text>
            </div>
            <Divider width={"2px"} orientation="vertical" h={"50px"}/>
            <div className="text-center">
                <Text className="text-orange-300 font-semibold text-2xl">Price /m<sup>2</sup></Text>
                <Text className="text-xl">{`£${Rounder(property["Price/Meter"])}`}</Text>
            </div>
        </div>
        <Text className="text-xl p-4">{property.Description}</Text>
        </div>
    </div> 
  )
}