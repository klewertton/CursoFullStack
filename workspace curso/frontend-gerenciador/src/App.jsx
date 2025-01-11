import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FornecedorList from './Pages/Fornecedor/FornecedorList'
import FornecedorForm from './Pages/Fornecedor/FornecedorForm'
import ClienteList from './Pages/Cliente/ClienteList'
import ClienteForm from './Pages/Cliente/ClienteForm'
import Navbar from './components/Navbar'
import Inicial from './Pages/Inicial'
import ProdutoList from './Pages/Produto/ProdutoList'
import ProdutoForm from './Pages/Produto/ProdutoForm'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/listar-fornecedores" element={<FornecedorList />} />
        <Route path="/add-fornecedores" element={<FornecedorForm />} />
        <Route path="/edit-fornecedores/:id" element={<FornecedorForm />} />
        <Route path='/listar-clientes' element={<ClienteList />} />
        <Route path='/add-clientes' element={<ClienteForm />} />
        <Route path='/edit-clientes/:id' element={<ClienteForm />} />
        <Route path='listar-produtos' element={<ProdutoList />} />
        <Route path='add-produtos' element={<ProdutoForm />} />
        <Route path='edit-produtos/:id' element={<ProdutoForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App