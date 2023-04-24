import React from 'react'
import './product.css'
import {NavLink} from 'react-router-dom'

import Productdetails from './Productdetails'



const Products = () => {

  
  return (
    <>
      <div className='productdiv'>
      <div className='productmaindiv'>
        <div className='ProductNavlinks'>

          <NavLink to='/products/electronics'>Electronices</NavLink>
          <NavLink to='/products/jewelery'>Jewelery</NavLink>
          <NavLink to="/products/men's clothing">MensClothing</NavLink>
          <NavLink to="/products/women's clothing">WomensClothing</NavLink>
        </div>



        <div className='productroute'>
       
        <div className='productpage'>

           <Productdetails/>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Products;


