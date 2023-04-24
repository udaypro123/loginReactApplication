
import { useContext } from "react"
import { authcontext } from "../contextApi/context"
import {Navigate} from 'react-router-dom'

const Protect=({children})=>{
    const {islogin}=useContext(authcontext)
    if(islogin){
        return children
    }else{
        return <Navigate to='/' />
    }
}
export default Protect;