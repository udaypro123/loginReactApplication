import React, { useContext } from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import { authcontext } from '../contextApi/context'

const Navbar = () => {

  const {setislogin}=useContext(authcontext)
  const handlelogout=()=>{
    setislogin(false)
  }

  return (
    <>
    <div className='linksdiv'>

      <NavLink  to='/'> home</NavLink>
      <NavLink to='/products'> products</NavLink>
      <NavLink to='/users'> users</NavLink>
      <NavLink to='/contact'> contact</NavLink>
      <button onClick={handlelogout}>Logout</button>
      <NavLink to='/addtocart'>  <img src="https://img.icons8.com/color/256/shopping-cart--v1.png" alt="" /></NavLink>
    </div>
    </>
  )
}

export default Navbar
