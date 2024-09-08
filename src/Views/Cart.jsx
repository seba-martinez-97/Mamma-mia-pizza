

import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext); 

  
  const increaseQuantity = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };


  const decreaseQuantity = (id) => {
    setCart(cart.map(pizza => {
      if (pizza.id === id) {
        const newQuantity = pizza.quantity - 1;
        return newQuantity > 0 
          ? { ...pizza, quantity: newQuantity } 
          : { ...pizza, agregado: false, quantity: 0 };
      }
      return pizza;
    }));
  };

 
  const total = cart
    .filter(pizza => pizza.agregado) 
    .reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  
  return (
    <div className="container mt-4 d-flex flex-column">
      <h3>🛒 Carrito de Compras</h3>
      {cart.filter(pizza => pizza.agregado).length > 0 ? ( 
        <>
          <ul className="list-group">
            {cart.filter(pizza => pizza.agregado).map((pizza) => ( 
              <li key={pizza.id} className="list-group-item container text-center">
                <div className='row align-items-center'>
                  <img className='col' src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
                  <div className='col'>{pizza.name}</div>
                  <div className='col'>${pizza.price.toLocaleString()}</div>
                  <div className='col'>
                    <button onClick={() => decreaseQuantity(pizza.id)} className="btn btn-outline-danger">-</button>
                    <span className="mx-2">{pizza.quantity}</span>
                    <button onClick={() => increaseQuantity(pizza.id)} className="btn btn-outline-success">+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="mt-4">Total: ${total.toLocaleString()}</h4>
          <button className="btn btn-primary mt-3">Pagar</button>
        </>
      ) : (
        <p className="text-center">Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;