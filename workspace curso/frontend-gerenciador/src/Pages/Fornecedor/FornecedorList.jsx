import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../../api'
import { Link } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'

const FornecedorList = () => {
    const [fornecedores, setFornecedores] = useState([])

    useEffect(() => {
        axios.get("/fornecedores")
        .then(response => setFornecedores(response.data))
        .catch(error => console.error("Erro ao carregar a lista de fornecedores", error))
    }, [])


  return (
    <div className='container mt-5'>
        <h2 className='mb-4' style={{ position: 'relative'}}>Listagem de Fornecedores</h2>
        <Link to="/add-fornecedores" className="btn btn-primary mb-2"><FaPlus className="icon" /> Adicionar Fornecedor</Link>

        <table className='table'>
            <thead>
                <th>Nome:</th>
                <th>CNPJ:</th>
                <th>E-mail:</th>
                <th>Ações:</th>
            </thead>
            <tbody>
                {
                    fornecedores.map(fornecedor => (
                        <tr key={fornecedor.id}>
                            <td>{fornecedor.nome}</td>
                            <td>{fornecedor.cnpj}</td>
                            <td>{fornecedor.email}</td>
                            <td>
                                <Link to={`/edit-fornecedores/${fornecedor.id}`} className='btn btn-sm btn-warning'><FaEdit className="icon icon-btn" />Editar</Link>
                                <button className="btn btn-sm btn-danger"><FaTrash className="icon icon-btn" /> Excluir</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default FornecedorList