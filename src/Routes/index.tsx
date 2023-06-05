import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

import {Reclamacao} from '../Pages/Reclamacoes'
import { Historico } from '../Pages/Historico'
import { Responder } from '../Pages/Resposta'

import { Home } from '../Pages/Home/Home'

export const RoutesPages = () => {
    return (
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/reclamacao' element={<Reclamacao />} />
          <Route path='/home/historico' element={<Historico />} />
          <Route path='/home/responder' element={<Responder />} />

    


          

          
      </Routes>
    )
  }

export default Routes;