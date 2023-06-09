import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

import {Reclamacao} from '../Pages/Reclamacoes'
import { Historico } from '../Pages/Historico'
import { Responder } from '../Pages/Resposta'

import { Home } from '../Pages/Home/Home'
import { Dados } from '../Pages/dados'
import { Solucoes } from '../Pages/solucoes'
import { Mostrarsolucoes } from '../Pages/solucoes/mostrarSoluções/index'

export const RoutesPages = () => {
    return (
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/reclamacao' element={<Reclamacao />} />
          <Route path='/home/solucoes' element={<Solucoes />} />
          <Route path='/home/dados' element={<Dados />} />
          <Route path='/home/historico' element={<Historico />} />
          <Route path='/home/responder' element={<Responder />} />
          <Route path='/home/mostrarsolucao' element={<Mostrarsolucoes />} />
          

    


          

          
      </Routes>
    )
  }

export default Routes;