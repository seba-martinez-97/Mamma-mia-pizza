import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//Componentes importados
import Navbar from "./components/Navbar";
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
            <Route path="/Login" element={token ? <Navigate to="/" /> : <Login />} />
            <Route path="/Register" element={<Register />} />         
            <Route path="/Cart" element={<Cart />}/>
            <Route path="/Pizza/:id" element={<Pizza />}/>
            <Route path="/Profile"  element={token ?  <Navigate to="/Login" /> : <Profile />}/>
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