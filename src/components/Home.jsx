// import React, { useState} from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import Cart from './Cart'
import { Container, Row, Col } from 'react-bootstrap'
import { pizzaCart, pizzas } from '../utils/pizzas'

// export default function Home() {
//     const [cart, setCart] = useState(pizzaCart || [])

//     const agregarAlCarrito = (pizza) => {
//         const existingPizza = cart.find(item => item.name === pizza.name)
//         if (existingPizza) {
//             setCart(cart.map(item =>
//                 item.name === pizza.name
//                     ? { ...item, count: item.count + 1 }
//                     : item
//             ))
//         } else {
//             setCart([...cart, { ...pizza, count: 1 }])
//         }
//     }

//     const sumarCantidad = (index) => {
//         const newCart = [...cart]
//         newCart[index].count += 1
//         setCart(newCart)
//     }

//     const restarCantidad = (index) => {
//         const newCart = [...cart]
//         if (newCart[index].count > 1) {
//             newCart[index].count -= 1
//         } else {
//             newCart.splice(index, 1)
//         }
//         setCart(newCart)
//     }
//     return (
//         <>
//             <Header/>
//             <Container fluid className="productos my-5 border-warning">
//                 <Row className="cards d-flex margin-cards">
//                     {pizzas.map((pizza, index) => (
//                         <Col key={index} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
//                             <CardPizza
//                                 name={pizza.name}
//                                 price={pizza.price}
//                                 ingredients={pizza.ingredients}
//                                 img={pizza.img}
//                                 onAddToCart={() => agregarAlCarrito(pizza)}
//                             />
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>

//             <Cart 
//                 cart={cart}
//                 onSuma={sumarCantidad}
//                 onResta={restarCantidad}
//             />
            
            {/* <Container fluid className="productos my-5 border-warning">
                <Row className="cards d-flex margin-cards">
                    <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                        <CardPizza
                            name="Napolitana"
                            price={5950}
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                        />
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                        <CardPizza
                            name="Española"
                            price={6950}
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                        />
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                        <CardPizza
                            name="Pepperoni"
                            price={6950}
                            ingredients={["mozzarella", "pepperoni", "orégano"]}
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                        />
                    </Col>
                </Row>
            </Container> */}
//         </>
//     )
// }

// import { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react'
// import Pizza from './Pizza'
// const Home = () => {
//     const [pizzas , setPizzas] = useState ([])

//     const obtenerInformacion = async()=>{
//         const respuesta = await fetch('http://localhost:5000/api/pizzas')
//         const data = await respuesta.json()
//         console.log(data)
//         setPizzas(data)
//     }

//     useEffect(()=>{
//         obtenerInformacion()
//      },[])

//   return (
//     <>
//     <Pizza pizzas={pizzas}/>
//     </>
//   )
// }

// export default Home

import React,{ useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'






const Home = () => {
    const [pizzas, setPizzas] = useState ([])
    
    const obtenerInformacion = async ()=>{
        const respuesta = await fetch('http://localhost:5000/api/pizzas')
        const data = await respuesta.json()
        setPizzas(data)
    }

    useEffect(()=>{
        obtenerInformacion()
    },[])

  return (
    <>
    <CardPizza pizzas={pizzas}/>
   
    </>
  )
}

export default Home