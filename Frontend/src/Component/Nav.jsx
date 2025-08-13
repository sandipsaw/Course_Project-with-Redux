import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center items-center gap-10 h-15  text-2xl font-semibold bg-[#FEE8D9]'>
      <NavLink to='/' className={(e)=> e.isActive ? "text-[#EDA35A] font-semibold":""} >Home</NavLink>
      <NavLink to='/cources' className={(e)=> e.isActive ? "text-[#EDA35A] font-semibold":""} >Cources</NavLink>
      <NavLink to='/create-cources' className={(e)=> e.isActive ? "text-[#EDA35A] font-semibold":""} >Create Cource</NavLink>
      <NavLink to='/login' className={(e)=> e.isActive ? "text-[#EDA35A] font-semibold":""} >LogIn</NavLink>
    </div>
  )
}

export default Nav