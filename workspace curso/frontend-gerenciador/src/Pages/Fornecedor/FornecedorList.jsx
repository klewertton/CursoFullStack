import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../../api'
import { Link } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash, FaCheckCircle, FaExclamation, FaExclamationTriangle } from 'react-icons/fa'
import Modal from 'react-modal'

const FornecedorList = () => {
    const [fornecedores, setFornecedores] = useState([])
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null)//O usuario quando abre a pagina nao seleciona nenhum fornecedor, quando selecionar o estado deixa de ser null e passa a ser o id.
    const [modalAberto, setModalAberto] = useState(false)//falso pois ao abrir a pagina nao abre o modal, quando abrir ele se torna verdadeiro
    const [modalSucessoAberto, setModalSucessoAberto] = useState(false)
    const [tooltipAberto, setTooltipAberto] = useState(false)


    useEffect(() => {
        axios.get("/fornecedores")
        .then(response => setFornecedores(response.data))
        .catch(error => console.error("Erro ao carregar a lista de fornecedores", error))
    }, [])

    const abrirModal = (fornecedor) => {
        setFornecedorSelecionado(fornecedor)
        setModalAberto(true)
    }

    const fecharModal = () => {
        setModalAberto(false)
        setFornecedorSelecionado(null)
    }

    const abrirModalSucesso = () => {
        setModalSucessoAberto(true)
        setTimeout(() => setModalSucessoAberto(false), 2000)
    }

    const removerFornecedor = () => {
        axios.delete(`/fornecedores/${fornecedorSelecionado.id}`)
        .then(() => {
            setFornecedores(prevfornecedores => prevfornecedores.filter(fornecedor => fornecedor.id !== fornecedorSelecionado.id))
        })
        fecharModal()
        abrirModalSucesso()
    }

    const toggleTooltip = () => {
        setTooltipAberto(!tooltipAberto)
    }


  return (
    <div className='container mt-5'>
        <h2 className='mb-4' style={{ position: 'relative'}}>Listagem de Fornecedores
        <FaCheckCircle
            className='tooltip-icon'
            onClick={toggleTooltip}
            />
             {tooltipAberto && (<div className="tooltip">
                Aqui você pode ver, editar ou excluir fornecedores cadastrados no sistema.
            </div>)}
            
        </h2>


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
                            <td>{fornecedor.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")}</td>
                            <td>{fornecedor.email}</td>
                            <td>
                                <Link to={`/edit-fornecedores/${fornecedor.id}`} className='btn btn-sm btn-warning'><FaEdit className="icon icon-btn" />Editar</Link>
                                <button onClick={() => abrirModal(fornecedor)} className="btn btn-sm btn-danger"><FaTrash className="icon icon-btn" /> Excluir</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        <Modal
            isOpen={modalAberto}
            onRequestClose={fecharModal}
            className="modal"
            overlayClassName="overlay"
        >
            <div className='modalContent'>
                <FaExclamationTriangle className='icon' />
                <h2>Confirmar exclusão</h2>
                <p>Tem certeza que deseja excluir o fornecedor <br />
                    {fornecedorSelecionado && fornecedorSelecionado.nome}?
                </p>
                <div className='modalButtons'>
                    <button onClick={fecharModal} className='btn btn-secondary'>Cancelar</button>
                    <button onClick={removerFornecedor} className='btn btn-danger'>Excluir</button>
                </div>
            </div>
        </Modal>

        <Modal 
            isOpen={modalSucessoAberto}
            onRequestClose={() => setModalSucessoAberto(false)}
            className="modal"
            overlayClassName="overlay"
        >
            <div className='modalContent'>
                <FaCheckCircle className='icon successIcon' />
                <h2>Fornecedor excluído com sucesso!</h2>
            </div>
        </Modal>

    </div>
  )
}

export default FornecedorList