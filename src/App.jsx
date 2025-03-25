import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("general");

  return (
    <>
      <Router>
        <Navbar onCategoryChange={setSelectedCategory}/>
        <Routes>
          <Route path="/" element={<Home selectedCategory={selectedCategory} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
