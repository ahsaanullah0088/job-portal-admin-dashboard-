import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Applyjob from './Pages/Applyjob'
import Applications from './Pages/Applications'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applyjob/:id" element={<Applyjob />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </div>
  )
}

export default App
