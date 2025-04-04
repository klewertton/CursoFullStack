import axios from '../../api'
import React, { useEffect } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Modal from 'react-modal'


const ProdutoForm = () => {

  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
    quantidadeEstoque: "",
    fornecedorId: ""
  })
  //Lista para puxar os fornecedores para adicionar em cada produto
  const [fornecedores, setFornecedores] = useState([])

  const [tooltipAberto, setTooltipAberto] = useState(false)
  const [mensagensErro, setMensagensErro] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [modalErroAberto, setModalErroAberto] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/fornecedores')
      .then(response => setFornecedores(response.data))
      .catch(error => console.error('Erro ao tentar carregar os fornecedores.', error))

      //Se houver um id, significa que vai editar, preciso buscar o produto a ser editado.
      if (id) {
        axios.get(`/produtos/${id}`)
          .then(response => setProduto({
            ...response.data,
            fornecedorId: response.data.fornecedor.id ? response.data.fornecedor.id : ""
          }))
          .catch(error => console.error('Ocorreu um erro.', error))
      } else {
        setProduto({
          nome: "",
          preco: "",
          descricao: "",
          quantidadeEstoque: "",
          fornecedorId: ""
        })
      }
  }, [id])

  // useEffect(() => {
  //   if (id) {
  //     axios.get(`/produtos/${id}`)
  //       .then(response => setProduto(response.data))
  //       .catch(error => console.error('Erro ao tentar carregar o produto.', error))
  //   } else {
  //     setProduto({
  //       nome: "",
  //       preco: "",
  //       descricao: "",
  //       quantidadeEstoque: ""
  //     })
  //   }
  // }, [id])

  const toggleTooltip = () => {
    setTooltipAberto(!tooltipAberto)
  }

  // const formatarPreco = (valor) => {
  //   const numero = valor.replace(/\D/g, "") // Remove tudo que não for número
  //   const formatado = (Number(numero) / 100).toLocaleString("pt-BR", {
  //     style: "currency",
  //     currency: "BRL",
  //   })
  //   return formatado
  // }





  const handleSubmit = (e) => {
    e.preventDefault()
    setMensagensErro([])

    const precoFormatado = parseFloat(produto.preco).toFixed(2)
    const produtoData = {...produto, preco: precoFormatado}


    const request = id ? axios.put(`/produtos/${id}`, produto) : axios.post('/produtos', produto)
    request.then(() => setModalAberto(true))
      .catch(error => {
        if (error.response.status === 500) {
          setMensagensErro(['Erro no sistema, entre em contato com o suporte.'])
          setModalErroAberto(true)
        } else if (error.response && error.response.data) {
          setMensagensErro(Object.values(error.response.data))
          setModalErroAberto(true)
        } else {
          console.error('Ocorreu um erro', error)
        }
      })
  }

  const handleChangePreco = (e) => {
    let valor = e.target.value;
    
    valor = valor.replace(',', '.')
    valor - valor.replace(/[^0-9.]/g, '')

    if (valor.includes('.')) {
      const [parteInteira, parteDecimal] = valor.split('.')
      valor = parteInteira  + '.' + (parteDecimal ? parteDecimal.slice(0, 2) : '')
    }
    setProduto({...produto, preco: valor})
  }

  const fecharModal = () => {
    setModalAberto(false)
    navigate('/listar-produtos')
  }

  const fecharModalErro = () => {
    setModalErroAberto(false)
  }

  const adicionarOutroProduto = () => {
    setModalAberto(false)
    setProduto({
      nome: "",
      preco: "",
      descricao: "",
      quantidadeEstoque: ""
    })
  }

  return (
    <div className='form-container'>
      <h2 style={{ position: 'relative' }}>
        {id ? 'Editar Produto' : 'Adicionar Produto'}
        {' '}
        <FaQuestionCircle
          className='tooltip-icon'
          onMouseOver={toggleTooltip}
          onMouseOut={toggleTooltip}
        />
        {tooltipAberto && (<div className='tooltip'>
          {
            id ? 'Editar um produto existente.' : 'Adicionar um novo produto.'
          }
        </div>)}
      </h2>
      <form onSubmit={handleSubmit} className='produto-form'>
        <div className='form-group'>
          <label htmlFor="nome">Nome do produto:</label>
          <input
            type="text"
            className='form-control'
            id="nome"
            value={produto.nome}
            onChange={((e) => setProduto({ ...produto, nome: e.target.value }))}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="preco">Preço do produto:</label>
          <input
            type="text"
            className='form-control'
            id="preco"
            value={produto.preco}
            onChange={handleChangePreco}
            placeholder='R$ 0,00'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="descricao">Descrição do produto:</label>
          <input
            type="text"
            className='form-control'
            id="descricao"
            value={produto.descricao}
            onChange={((e) => setProduto({ ...produto, descricao: e.target.value }))}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="quantidadeEstoque">Quantidade do produto:</label>
          <input
            type="text"
            className='form-control'
            id="quantidadeEstoque"
            value={produto.quantidadeEstoque}
            onChange={((e) => setProduto({ ...produto, quantidadeEstoque: e.target.value }))}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="fornecedorId">Fornecedor:</label>
          <select
            className='form-control'
            id="fornecedorId"
            value={produto.fornecedorId}
            onChange={((e) => setProduto({ ...produto, fornecedorId: e.target.value }))}
            required
          >
            <option value="">Selecione um fornecedor</option>
            {fornecedores.map(fornecedor => (
              <option key={fornecedor.id} value={fornecedor.id}>
                {fornecedor.nome}
              </option>
            ))}
          </select>
          
        </div>
        <button type='submit' className='btn-success'>
          {id ? 'Editar' : 'Adicionar'}
        </button>
      </form>

      {/* Modal de sucesso */}
      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        className='modal'
        overlayClassName="overlay"
      >
        <div className='modalContent'>
          <FaCheckCircle className='icon successIcon' />
          <h2> {id ? 'Produto atualizado com sucesso!' : 'Fornecedor adicionado com sucesso!'}</h2>
          <div className='modalButton'>
            <button onClick={fecharModal} className='btn-success'>Fechar</button>
            {!id && <button onClick={adicionarOutroProduto} className='btn-secondary'>Adicionar outro produto</button>}
          </div>
        </div>
      </Modal>

      {/* MNodal de erro */}
      <Modal
        isOpen={modalErroAberto}
        onRequestClose={fecharModalErro}
        className="modal"
        overlayClassName="overlay"
      >
        <div className='modalContent'>
          <FaExclamationCircle className='icon errorIcon' />
          <h2>Erro ao adicionar o produto!</h2>

          {mensagensErro.map((mensagem, index) => (
            <h4 key={index}>{mensagem}</h4>
          ))}
          <br />
          <button onClick={fecharModalErro} className='btn-secondary'>Fechar</button>
        </div>
      </Modal>

    </div>
  )
}

export default ProdutoForm