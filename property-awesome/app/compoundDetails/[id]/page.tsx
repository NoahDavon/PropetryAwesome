'use server'

import Property from "@/app/types/Property"

type Props = {
    params: {
        id: string
    }
}

async function getProperty(id : string): Promise<Property>{
    console.log("On server")
    return await fetch(`http://localhost:3001/properties/${id}`).then(r => r.json()) as Property;
}

export default async function Page({params: {id}}: Props) {
    console.log(id);
    const property = await getProperty(id);
    console.log(property)
  return (
    <div>{JSON.stringify(property)}</div> 
  )
}