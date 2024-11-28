import React from 'react'
import Arvore from '../assets/1.jpg'

const TrabalhandoComImagens = () => {
  return (
    <div>
        <h2>Imagem Publica</h2>
        <img src="2.jpg" alt="Imagem Publica" />
        <h2>Imagem Assets</h2>
        <img src={Arvore} alt="Imagem atraves do Assets" />
    </div>
  )
}

export default TrabalhandoComImagens