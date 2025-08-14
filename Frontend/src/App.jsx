import React, { useEffect } from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from './Component/Nav'
import {asyncgetUsers} from './Store/UserAction'
import {useDispatch,useSelector} from 'react-redux'

const App = () => {
  const userdata = useSelector((state)=>state.UserReducer)
  // console.log(userdata);
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncgetUsers())
  },[])
  return (
    <div>
      <Nav />
      <MainRoutes/>
    </div>
  )
}

export default App