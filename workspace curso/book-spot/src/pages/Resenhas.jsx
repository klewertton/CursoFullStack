import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Resenhas = () => {
    const [resenhas, setResenhas] = useState([])
    /*
    Pegar as resenhas no backend, 
    esse useeffect vai ser executado quando a pagina for carregada => []
    */
   useEffect(() => {
    axios.get("http://localhost:3000/resenhas")
    .then(response =>setResenhas(response.data))
    .catch(error => console.error("Erro ao carregar as resenhas", error))
   }, [])



  return (
    <div>
        <h1>Resenhas de livros</h1>
        {
            resenhas.map(resenha => (
                <div key={resenha.id}>
                    <a href={`/visualiza-resenha/${resenha.id}`}>
                    <h2 >{resenha.tituloLivro}</h2>
                    </ a>
                    <h3>{resenha.autor}</h3>
                    <p>{resenha.resumo}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Resenhas