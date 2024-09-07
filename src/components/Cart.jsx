import React, { useState } from 'react'
import { pizzaCart } from '../data/pizzas'
import {Card,Container,Button} from 'react-bootstrap'



 function Cart({ onSuma, onResta }) {


    const [cart, setCart] = useState(pizzaCart)

    const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0)

    const sumarCantidad = (index) => {
        const newCart = [...cart]
        newCart[index].count += 1
        setCart(newCart)
    }

    const restarCantidad = (index) => {
        const newCart = [...cart]
        if (newCart[index].count > 1) {
            newCart[index].count -= 1
        } else {
           
            newCart.splice(index, 1) 
        }
        setCart(newCart)
    }

    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className='cart'>
                <Card.Header>
                    <Card.Title className='text-center p-2'>Carrito de Compras 🛒</Card.Title>
                </Card.Header>
                <Card.Body className='text-center'>
                    { <Card.Subtitle>Ingredientes:</Card.Subtitle> }
                    <Card.Text>
                        {cart.map((item, index) => (
                            <div className='cart-producto d-flex justify-content-between align-items-center my-2'>
                            <div className="info-cart text-start">
                                <h6>🍕 Pizza {item.name}</h6>
                                <p>Precio: ${item.price.toLocaleString()}</p>
                                <div className='d-flex gap-2 align-items-center'>
                                    <p>Cantidad: {item.count}</p>
                                    <Button variant="outline-dark" size="sm" onClick={() => onSuma(index)}>+</Button>
                                    <Button variant="outline-dark" size="sm" onClick={() => onResta(index)}>-</Button>
                                </div>
                                    
                            </div>
                            <img src={item.img} alt="Imagen producto" />
                        </div>
                        ))}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='p-3'>
                    <Card.Title className='text-center'>Total: ${total.toLocaleString()}</Card.Title>
                    <div className="card-btn d-flex gap-2 justify-content-around">
                        <Button variant="dark">Pagar 🛒</Button>
                    </div>
                </Card.Footer>
            </Card>
        </Container>
    )
}
export default Cart;


