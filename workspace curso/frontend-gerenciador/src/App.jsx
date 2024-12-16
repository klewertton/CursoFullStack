import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import FornecedorList from './Pages/Fornecedor/FornecedorList'

const App = () => {
  return (
    <BrowserRouter>
      <FornecedorList />
    </BrowserRouter>

  )
}

export default App