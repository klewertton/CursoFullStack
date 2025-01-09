import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FornecedorList from './Pages/Fornecedor/FornecedorList'
import FornecedorForm from './Pages/Fornecedor/FornecedorForm'
import Navbar from './components/Navbar'
import Inicial from './Pages/Inicial'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/listar-fornecedores" element={<FornecedorList />} />
        <Route path="/add-fornecedores" element={<FornecedorForm />} />
        <Route path="/edit-fornecedores/:id" element={<FornecedorForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App