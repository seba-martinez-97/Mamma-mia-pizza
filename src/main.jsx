import React from 'react'
import ReactDOM from 'react-dom/client'
import {PizzeriaApp} from './PizzeriaApp.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <PizzeriaApp />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
