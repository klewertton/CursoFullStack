import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api'
import { FaCheckCircle, FaExclamationTriangle, FaQuestionCircle, FaTimesCircle } from 'react-icons/fa'
import InputMask from 'react-input-mask'
import Modal from 'react-modal'

const ClienteForm = () => {
  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    email: "",
    endereco: {
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      pais: "Brasil" //valor padrao inicial
      }
    })

  const [tooltipAberto, setTooltipAberto] = useState(false)
  const [mensagensErro, setMensagensErro] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [modalErroAberto, setModalErroAberto] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      axios.get(`/clientes/${id}`)
      .then(Response => setCliente(Response.data))
      .catch(error => console.error('Erro ao tentar carregar o cliente.', error))
    } else {
      setCliente({
        nome: "",
        cpf: "",
        email: "",
        endereco: {
          cep: "",
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          estado: "",
          pais: "Brasil" //valor padrao inicial
        }
      })
    }
  }, [id])

  //Função para trazer o oposto do estado do tooltip
  const toggleTooltip = () => {
    setTooltipAberto(!tooltipAberto)
  }

  const handleChange = (e) => {
    const cep = e.target.value.replace(/\D/g, '')//remove os caracteres nao numericos do cep.
    setCliente({ ...cliente, endereco: { ...cliente.endereco, cep: e.target.value }})
    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          if (!response.data.erro) {
            setCliente(prevCliente => ({
              ...prevCliente,
              endereco: {
                ...prevCliente.endereco,
                logradouro: response.data.logradouro,
                bairro: response.data.bairro,
                cidade: response.data.localidade,
                estado: response.data.uf
              }
            }))
          }
        })
        .catch(error => console.error('Erro ao buscar o CEP:', error))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault() //previne o comportamenteo de carregar a pagina
    setMensagensErro([])// limpa as mensagens de erro anteriores

    //remover a pontuacao do CNPJ antes de enviar para o backend
    const clienteData = {
      ...cliente,
      cpf: cliente.cpf.replace(/[^\d]+/g, '')//remove caracteres nao numericos
    }

    //Determiar se a função será um POST ou um PUT (edição)
    const request = id ? axios.put(`/clientes/${id}`, clienteData) : axios.post('/clientes', clienteData)
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

  const fecharModal = () => {
    setModalAberto(false)
    navigate('/listar-clientes')
  }

  const fecharModalErro = () => {
    setModalErroAberto(false)
  }

  const adicionarOutroCliente = () => {
    setModalAberto(false)
    setCliente({//limpando o form
      nome: "",
      cpf: "",
      email: "",
      endereco: {
        cep: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        pais: "Brasil" //valor padrao inicial
      }
    })
  }

  return (
    <div className='form-container'>
      <h2 style={{ position: 'relative'}}>
        {id ? 'Editar Cliente' : 'Adicionar Cliente'}
        {' '}
        <FaQuestionCircle
        className='tooltip-icon'
        onMouseOver={toggleTooltip}
        onMouseOut={toggleTooltip}
        />
        {tooltipAberto && (<div className='tooltip'>
          {
            id ? 'Nesta tela, você pode editar as informações de um cliente existente.' : 'Nesta tela, você pode adicionar um novo cliente.'
          }
        </div>)}
      </h2>
      <form onSubmit={handleSubmit} className='cliente-form'>
        <div className='form-group'>
          <label htmlFor="nome">Nome do cliente:</label>
          <input 
            type="text"
            className='form-control'
            id="nome"
            value={cliente.nome}
            onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="cpf">CPF do cliente:</label>
          <InputMask
            mask="999.999.999-99"
            className='form-control'
            id="cpf"
            value={cliente.cpf}
            onChange={(e) => setCliente({ ...cliente, cpf: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail do cliente:</label>
          <input 
            type="email"
            className='form-control'
            id='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            title='Por faovor, insira um e-mail válido'
            value={cliente.email}
            onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="cep">CEP:</label>
          <InputMask
            mask="99999-999"
            className='form-control'
            id="cep"
            value={cliente.endereco.cep}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="logradouro">Logradouro</label>
          <input 
            type="text"
            className='form-control'
            id='logradouro'
            name='logradouro'
            value={cliente.endereco.logradouro}
            onChange={e => setCliente({
              ...cliente, endereco: {...cliente.endereco, logradouro: e.target.value}
            })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="numero">Número</label>
          <input 
            type="text"
            className='form-control'
            id='numero'
            name='numero'
            value={cliente.endereco.numero}
            onChange={e => setCliente({
              ...cliente, endereco: {...cliente.endereco, numero: e.target.value}
            })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="complemento">Complemento</label>
          <input 
            type="text"
            className='form-control'
            id='logradouro'
            name='logradouro'
            value={cliente.endereco.logradouro}
            onChange={e => setCliente({
              ...cliente, endereco: {...cliente.endereco, logradouro: e.target.value}
            })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="bairro">Bairro</label>
          <input 
            type="text"
            className='form-control'
            id='bairro'
            name='bairro'
            value={cliente.endereco.bairro}
            onChange={e => setCliente({
              ...cliente, endereco: {...cliente.endereco, bairro: e.target.value}
            })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="cidade">Cidade</label>
          <input 
            type="text"
            className='form-control'
            id='cidade'
            name='cidade'
            value={cliente.endereco.cidade}
            onChange={e => setCliente({
              ...cliente, endereco: {...cliente.endereco, cidade: e.target.value}
            })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="estado">Estado</label>
          <input 
            type="text"
            className='form-control'
            id='estado'
            name='estado'
            value={cliente.endereco.estado}
            onChange={e => setCliente({
              ...cliente, endereco: {...cliente.endereco, estado: e.target.value}
            })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="pais">País</label>
          <input 
            type="text"
            className='form-control'
            id='pais'
            name='pais'
            value={cliente.endereco.pais}
            onChange={e => setCliente({
              ...cliente, endereco: {...cliente.endereco, pais: e.target.value}
            })}
            required
          />
        </div>
        <button type='submit' className='btn-success'>
          {id ? 'Editar' : 'Adicionar'}
        </button>
      </form>

      {/* Moidal de sucesso */}
      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        className='modal'
        overlayClassName='overlay'
      >
        <div className='modalContent'>
          <FaCheckCircle className='icon successIcon' />
          <h2>{id ? 'Cliente atualidado com sucesso!' : 'Cliente adicionado com sucesso!'}</h2>
          <div className='modalButton'>
            <button onClick={fecharModal} className='btn-success'>Fechar</button>
            {!id && <button onClick={adicionarOutroCliente} className='btn-secondary'>Adicionar outro cliente</button>}
          </div>
        </div>
      </Modal>

      {/* Modal de erro*/}
      <Modal
      isOpen={modalErroAberto}
      onRequestClose={fecharModalErro}
      className='modal'
      overlayClassName='overlay'
      >
        <div className='modalContent'>
          <FaExclamationTriangle className='icon errorIcon' />
          <h2>Ocorreram um ou mais erros:</h2>
          {
            mensagensErro.map((mensagem, index) => (
              <h4 key={index}>{mensagem}</h4>
            ))
          }
          <br />
          <button onClick={fecharModalErro} className='btn-secondary'>Fechar</button>
        </div>
      </Modal>
    </div>
  )
}

export default ClienteForm