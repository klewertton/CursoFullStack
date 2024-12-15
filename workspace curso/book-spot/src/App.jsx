import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicial from './pages/Inicial'
import SobreBookSpot from './pages/SobreBookSpot'
import Resenhas from './pages/Resenhas'
import VisualizaResenha from './pages/VisualizaResenha'

const App = () => {
  return (
    <BrowserRouter>
      <h1>BookSpot - Resenhas Literárias</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre-nos" element={<SobreBookSpot />} />
        <Route path="/resenhas" element={<Resenhas />} />
        <Route path="visualiza-resenha/:id" element={<VisualizaResenha />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App