import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const AdicionarAlunos = () => {
    const url = "http://localhost:3000/alunos"

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [curso, setCurso] = useState("")

    const enviarParaOBackend = async (dadosDoForm) => {
        const response = await axios.post(url, dadosDoForm)
        console.log("Aluno cadastrado com sucesso!")
        alert("Aluno cadastrado com sucesso!")
    }

    const handleSubmit = (event) => {
        event.preventDefault() // Nao deixa recarregar a pagina
        const dadosDoForm = {
            nome: nome, //pegando os valores dos USESTATES
            email: email, //pegando os valores dos USESTATES
            curso: curso //pegando os valores dos USESTATES
        }
        //Valos tranformar em JSON antes de enviar para o Backend
        //Nao vamos precisar mais disso, pois o Axios vai realizar essa conversão
        //const jsonParaEnviarParaOBack = JSON.stringify(dadosDoForm)
        enviarParaOBackend(dadosDoForm)

        setNome("");
        setCurso("");
        setEmail("");
    }

    

  return (
    <div>
        <h1>Cadastro de Alunos</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input 
                type="text" 
                id='nome'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input 
                type="text" 
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="curso">Curso:</label>
                <input 
                type="text" 
                id='curso'
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                required
                />
            </div>
            <button type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}

export default AdicionarAlunos