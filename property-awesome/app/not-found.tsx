import React from 'react'
import BackButton from './components/BackButton'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className=' p-8 h-[100vh] bg-cover font-extrabold text-orange-500' style={{backgroundImage: `url(404/notFound.png)`}}><BackButton/> <div className='py-12'></div>The page you're looking for hasn't been built yet!</div>
  )
}