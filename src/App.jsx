import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <BrowserRouter basename='Bakery'>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
