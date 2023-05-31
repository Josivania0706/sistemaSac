import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import { Homealuno } from '../Pages/Home/HomeAluno'
import {Reclamacao} from '../Pages/Reclamacoes'

export const RoutesPages = () => {
    return (
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Home/aluno' element={<Homealuno />} />
          <Route path='/Home/aluno/reclamacoes' element={<Reclamacao />} />


          

          
      </Routes>
    )
  }

export default Routes;