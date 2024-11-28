import React from 'react'

const SimuladorDeScrap = () => {
    const menuItems = ["Home", "Perfil", "Scraps", "Comnunidades", "Aplicativos"]
    const [para, setPara] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e)=>{
        e,preventDefault()

        const dadosDoScrap = {
            para: para,
            mensagem: mensagem
        }

        const jsonParaEnviarParaOBack = JSON.stringify(dadosDoScrap)
        console.log(`Para: ${para}\n
            Mensagem: ${mensagem}`)
    }


  return (
    <div>SimuladorDeScrap</div>
  )
}

export default SimuladorDeScrap