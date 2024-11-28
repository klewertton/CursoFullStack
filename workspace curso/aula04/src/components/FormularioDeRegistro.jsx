import React from 'react'
import { useState } from 'react'

const FormularioDeRegistro = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassWord, setConfirmPassword] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, SetTelefone] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        const dadosdoForm = {
            userName: userName,
            email: email,
            password: password,
            confirmPassWord: confirmPassWord,
            endereco: endereco,
            telefone: endereco
        }

        const jsonParaEnviarParaOBack = JSON.stringify(dadosdoForm)

        console.log(`O seguinte JSON será enviado via HTTP POST para o Backend: ${jsonParaEnviarParaOBack}`)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="userName">Nome:</label>
                <input type="text"
                id="userName"
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
                 />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
                <input type="email"
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                 />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <input type="password"
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                 />
            </div>
            <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password"
                id="confirmPassword"
                value={confirmPassWord}
                onChange={(e)=> setConfirmPassword(e.target.value)}
                 />
            </div>
            <div>
            <label htmlFor="endereco">Endereço:</label>
                <input type="text"
                id="endereco"
                value={endereco}
                onChange={(e)=> setEndereco(e.target.value)}
                 />
            </div>
            <div>
            <label htmlFor="telefone">Telefone:</label>
                <input type="tel"
                id="telefone"
                value={telefone}
                onChange={(e)=> SetTelefone(e.target.value)}
                 />
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default FormularioDeRegistro