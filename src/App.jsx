import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Card from './Pages/Card'
import Home from './Pages/Home'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>                        
    </div>
  )
}
