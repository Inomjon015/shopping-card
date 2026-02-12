import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-sky-300'>
      <nav className='container mx-auto flex items-center justify-between py-2'>
        <Link className='text-2xl font-semibold' to='/'>Logo</Link>
        <ul className='flex gap-6'>
            <li>
                <Link className='text-lg font-medium' to='/about'>About</Link>
            </li>
            <li>
                <Link className='text-lg font-medium' to='/card'>Card</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}
