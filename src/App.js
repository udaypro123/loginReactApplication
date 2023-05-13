import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login'
import Home from './components/home/Home'
import Products from './components/product/Products'
import Users from './components/user/Users'
import Contact from './components/contact/Contact'
import Navbar from './components/navbar/Navbar';
import { authcontext } from './components/contextApi/context';
import { useContext } from 'react';
import Cartitem from './components/Cart/Cartitem';
import Showproductdetails from './components/product/Showproductdetails';
import Homedetails from './components/home/Homedetails';

import Protect from './components/login/protect';





function App() {

  const { islogin } = useContext(authcontext)

  return (
    <>
      <BrowserRouter>
        <div className='Appcontainer'>
          <div className='Appmaindiv'>
            {
              islogin ? <>
                <div className='navbarforALLdiv'>
                  <Navbar />
                </div>
              </> : null
            }

            <div className='RoutespgesforALLdiv'>
              <Routes>
                <Route path='/' element={ islogin ? <Protect><Home /></Protect> : <Login /> }/>
                <Route path='/:i' element={ <Homedetails /> }/>

                <Route path='/products' element={ <Protect><Products /></Protect> }/>
                <Route path='/products/:id' element={ <Products /> }/>
                <Route path='/products/:id/:i' element={ <Showproductdetails /> }/>

                <Route path='/users' element={ <Protect><Users /> </Protect> }/>
                <Route path='/contact' element={ <Protect> <Contact /></Protect> }/>
                <Route path='/addtocart' element={ <Protect><Cartitem /></Protect> }/>
                <Route path='/*' element={ <Home /> }/>
              </Routes>
            </div>

          </div>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

