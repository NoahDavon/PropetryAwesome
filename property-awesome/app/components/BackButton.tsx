import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'


type Props = {}

export default function BackButton({}: Props) {
  return (
    <Link href={"/"} className='fixed'><IconButton aria-label='Back to home' fontSize={"30px"} icon={<FaArrowLeft/>}/></Link>
  )
}