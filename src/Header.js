import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'

export default function Header() {
  return (
    <header>
        <FaGlobeAmericas className='header-icon'/>
        <span>my travel journal.</span>
    </header>
  )
}
