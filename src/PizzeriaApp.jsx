// import Navbar from './components/Navbar'
// import Home from './Views/Home'
// import Register from './Views/Register'
// import Login from './Views/Login'
// import Cart from './Views/Cart'
// import Footer from './components/Footer'
// import Pizza from './components/Pizza'
// import {Route,Routes} from "react-router-dom"
// import Profile from './Views/Profile'
// import NotFound from './Views/NotFound'
// import "bootstrap/dist/css/bootstrap.min.css";
// import './assets/Style.css';


// import { useState, useEffect } from "react";

// import GlobalContext from "./context/GlobalContext";


// export function PizzeriaApp() {
//   const [galeria, setGaleria] = useState([]);
//   const globalState = { galeria, setGaleria };

//   useEffect(() => {
//     getPizzaData();
//   }, []);

//   async function getPizzaData() {
    
//     const res = await fetch("");
//     const data = await res.json()
//     setGaleria(data)
//   }
 
//   return (
//     <>
    
//      <Navbar/>
//      <Routes>
//      <Route exact path="/home" element={<Home/>}/>
//      <Route exact path='/register' element={<Register/>}/>
//      <Route exact path='/login' element={<Login/>}/>
//      <Route exact path='/profile' element={<Profile/>}/>
//      <Route exact path='/cart' element={ <Cart/>}/>
//      <Route exact path='/pizza:id' element={<Pizza /> }/>
//      <Route  path='/' element={<NotFound/>}/>
//      </Routes>
//      <Footer/>
//     </>
//   )
// }

import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//Componentes importados
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

//Pages importadas
import Home from "./Views/Home"
import Cart from "./Views/Cart";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Pizza from "./Views/Pizza";
import Profile from "./Views/Profile";
import NotFound from "./Views/NotFound";
import Logout from "./Views/Logout";

//Context importado
import CartProvider from "./context/CartContext";
import { useUser } from "./context/UserContext";

function App() {
  const { token } = useUser;

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />         
            <Route path="/Cart" element={<Cart />}/>
            <Route path="/Pizza/:id" element={<Pizza />}/>
            <Route path="/Profile"  element={token ? <Navigate to="/Login" /> : <Profile />}/>
            <Route path="/Logout" element={<Logout />} />   
            <Route path="404" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>   
  
    </>
  );
}

export default App;
