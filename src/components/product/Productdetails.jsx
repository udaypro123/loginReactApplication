import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { useParams } from 'react-router';
import { getProductData } from '../reduxx/store/productSlice';
import { additem } from '../reduxx/store/showprodutdetailsSlice';






const Productdetails = () => {

    const {id}=useParams();
    
  const dispatch=useDispatch()
  const {pdata,status}=useSelector((state)=>state.product)

  useEffect(()=>{
    dispatch(getProductData(id))
  },[id])
  
  const adddtocartanddetaisls=(ele)=>{
      dispatch(additem(ele))
  }
 

  if(status===false){
    return(

      <h2>loading...</h2> 
    )
  }
  return (
    <>
 
      <div className='products'>
          {
            pdata && pdata.map((ele,i)=>{
            
              return (
                <>
                  <ul>
                    <li onClick={()=>{adddtocartanddetaisls(ele)}}><NavLink to={`/products/${id}/${i}`}>{ele.title} </NavLink> </li>
                  </ul>
                </>
              )
            })
          }
      </div>

     
    </>
  )
}

export default Productdetails;
