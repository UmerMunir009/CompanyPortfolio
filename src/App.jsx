import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/footer'



const App = () => {
  return (
    <div >
      <Routes>
      <Route path='/' element={<Home/>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
