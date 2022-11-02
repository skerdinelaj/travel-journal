import React from 'react'
import Card from './Card'
import data from "./data"

export default function Body() {
  return (
    <div>
      {data.map((item)=>(
        <Card key={item.id} {...item}/>
      ))}
    </div>
  )
}
