import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BiLeftArrow } from 'react-icons/bi'

type Props = {}

export default function BackButton({}: Props) {
  return (
    <Link href={"/"}><div className=' sticky text-orange-300'><IconButton aria-label='Back to home' fontSize={"30px"} icon={<BiLeftArrow/>}/></div></Link>
  )
}