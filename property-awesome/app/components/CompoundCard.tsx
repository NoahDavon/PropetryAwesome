import React from 'react'
import Property from '../types/Property'

type Props = {
    property: Property
}

export default function CompoundCard({property}: Props) {
  return (
    <div className={`bg-[url(/compoundImages/${property.ID}.png)] hover:scale-110 transition-all rounded-xl w-64 lg:w-96 h-64 lg:h-96 relative`}>

    </div>
  )
}