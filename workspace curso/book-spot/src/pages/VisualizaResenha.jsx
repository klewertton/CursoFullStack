import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const VisualizaResenha = () => {

    const {id} = useParams()
    const [resenha, setResenha] = useState({})

    /*
    Useeffect para fazer o get na resenha especifica. ID so carrega quando tiver o ID
    */

    useEffect(() =>{
        axios.get(`http://localhost:3000/resenhas/${id}`)
        .then(response => setResenha(response.data))
        .catch(error => console.error('Erro ao tentar carregar essa resenha.', error))

    }, [id])



  return (
    <div>
        <h2>{resenha.tituloLivro}</h2>
        <h3>Por {resenha.autor}</h3>
        <p>{resenha.conteudoCompleto}</p>
    </div>
  )
}

export default VisualizaResenha