import React from 'react'
import Adicao from './components/Adicao.jsx'
import Divisao from './components/Divisao.jsx'
import Multiplicacao from './components/Multiplicacao.jsx'
import Subtracao from './components/Subtracao.jsx'
import PrecisoEstudar from './components/PrecisoEstudar.jsx'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit.jsx'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius.jsx'
import QuilometroParaMilhas from './components/QuilometroParaMilhas.jsx'
import MilhasParaQuilometro from './components/MilhasParaQuilometro.jsx'
import ListaDeLivros from './components/ListaDeLivros.jsx'
import Mensagem from './components/Mensagem.jsx'
import TrabalhandoComImagens from './components/TrabalhandoComImagens.jsx'
import HookContador from './components/HookContador.jsx'
import TodoList from './components/TodoList.jsx'
import HookMegaSena from './components/HookMegaSena.jsx'
import HookContadorRevisao from './components/HookContadorRevisao.jsx'
import TodoListRevisao from './components/TodoListRevisao.jsx'
import AdicaoRevisao from './components/AdicaoRevisao.jsx'
import SubtracaoRevisao from './components/SubtracaoRevisao.jsx'
import PrecisoEstudarRevisao from './components/PrecisoEstudarRevisao.jsx'
import CParaF from './components/CParaF.jsx'

const App = () => {
  // const livros = [
  //   {titulo: '1984', autor: 'George', ano: '1984'},
  //   {titulo: '2000', autor: 'Teste', ano: '2000'},
  //   {titulo: '2024', autor: 'Kelson', ano: '2024'}
  // ]
  return (
    <div>
      <CParaF celsius={1}/>
    </div>
  )
    //<div>
    {/* <div className='container'>
      <h1>Renderização Condicional Simples</h1>
      <Mensagem tipo={"sucesso"} />
      <Mensagem tipo={"erro"} />
      <Mensagem tipo={"aviso"}/> */}
      {/* <Adicao num1={2} num2={3}/>
      <Divisao num1={10} num2={5}/>
      <Multiplicacao num1={10} num2={5}/>
      <Subtracao num1={10} num2={5}/>
      <PrecisoEstudar nomeDaTecnologia={"Java"}/>
      <CelsiusParaFahrenheit celsius={30}/>
      <FahrenheitParaCelsius fahrenheit={90}/>
      <QuilometroParaMilhas quilometros={100}/>
      <MilhasParaQuilometro milhas={50}/> */}
      {/* <h1>Lista de livros</h1>
      <ListaDeLivros livros = {livros}/> */}
      {/* <TrabalhandoComImagens/> */}

      {/* <HookContador />   */}
     // <TodoList/>
   // </div>
  

}

export default App