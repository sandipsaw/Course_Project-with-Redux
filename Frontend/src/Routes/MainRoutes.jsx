import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from '../Pages/Home'
import LogIn from '../Pages/LogIn'
import Cources from '../Pages/Cources'
import CreateCource from '../Pages/Admin/CreateCource'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/cources' element={<Cources />} />
      <Route path='/create-cources' element={<CreateCource />} />
    
    </Routes>
  )
}

export default MainRoutes