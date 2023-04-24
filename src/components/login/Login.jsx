import React, { useContext } from 'react'
import './login.css'
import { authcontext } from '../contextApi/context'


const Login = () => {
const {setislogin,password,setpassword,inputvalue,setinputvalue}=useContext(authcontext)

const handleclick=()=>{
  if(inputvalue==="uday" && password==="uday@123"){
    setislogin(true)
  }
}

  return (
    <>
     <div className='loginContainer'>
        <div className='logindiv'>
          <div className='inputbox'>
            <input type="text" placeholder='username' value={inputvalue} onChange={(e)=>{
              setinputvalue(e.target.value)
            }}/>
            <input type="password" placeholder='password' value={password} onChange={(e)=>{
              setpassword(e.target.value)
            }}/>
          </div>
          <button onClick={handleclick}>login</button>
        </div>
     </div>
    </>
  )
}

export default Login;
