import Navbar from './components/Navbar'
import Home from './Views/Home'
import Register from './Views/Register'
import Login from './Views/Login'
import Cart from './Views/Cart'
import Footer from './components/Footer'
import Pizza from './components/Pizza'
import {Route,Routes} from "react-router-dom"
import Profile from './Views/Profile'
import NotFound from './Views/NotFound'
export function PizzeriaApp() {
 
  return (
    <>
     <Navbar/>
     <Routes>
     <Route exact path="/home" element={<Home/>}/>
     <Route exact path='/register' element={<Register/>}/>
     <Route exact path='/login' element={<Login/>}/>
     <Route exact path='/profile' element={<Profile/>}/>
     <Route exact path='/cart' element={ <Cart/>}/>
     <Route exact path='/pizza/p001' element={<Pizza /> }/>
     <Route  path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}
