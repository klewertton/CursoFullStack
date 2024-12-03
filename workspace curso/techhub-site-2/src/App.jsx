import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import SobreNos from './pages/SobreNos'
import Artigos from './pages/Artigos'
import VisualizarArtigo from './pages/VisualizarArtigo'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
    <h1>TechHub 2 - Artigos de tecnologia</h1>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Inicial />}/>
      <Route path="/sobre-nos" element={<SobreNos />}/>
      <Route path="/artigos" element={<Artigos />}/>
      <Route path='/visualizar-artigo/:id' element={<VisualizarArtigo />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App