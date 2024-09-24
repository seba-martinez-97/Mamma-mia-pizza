// import "bootstrap/dist/css/bootstrap.min.css";
// import '../assets/Style.css';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

// import GlobalContext from "../context/GlobalContext";


// import Navbar from "../components/Navbar";


// import Home from "./Home";
// import Pizza from "../components/Pizza";
// import Carrito from "./Cart";

// function App() {
//   const [galeria, setGaleria] = useState([]);
//   const globalState = { galeria, setGaleria };

//   useEffect(() => {
//     getPizzaData();
//   }, []);

//   async function getPizzaData() {
    
//     const res = await fetch("http://localhost:5000/api/pizzas");
//     const data = await res.json()
//     setGaleria(data)
//   }
//   return (
//     <div className="App">
//       <GlobalContext.Provider value={globalState}>
//         <BrowserRouter>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/pizza/:id" element={<Pizza />} />
//             <Route path="/carrito" element={<Carrito />} />
//           </Routes>
//         </BrowserRouter>
//       </GlobalContext.Provider>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Pizza() {
  const  { id } = useParams()
  const [pizza, setPizza] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const pizzaData = await res.json();

    setPizza(pizzaData);
  };

  const Home = () => {
    navigate(`/`);
};

  return (
    <>
    <Container className="mt-4">
        <Row className="justify-content-center">        
            <Col md={4} className="mb-4 d-flex">
                <Card className="border border-dark">
                <Card.Img  variant="top" src={pizza.img}/>      
                    <Card.Body>          
                        <Card.Title className="text-center">
                            <h5>{pizza.name}</h5> 
                            <h6>{pizza.desc}</h6></Card.Title> 
                            <hr/>
                            <ul>
                                {pizza.ingredients?.map((ingredient) => (
                                <li key={ingredient}>🍕 {ingredient}</li>))}
                            </ul>
                            <hr/>
                            <Card.Text className="text-center">
                            <strong>Precio: </strong>${pizza.price}</Card.Text>           
                            <div className="d-flex justify-content-around" >
                                <Button className="btn btn-dark"  onClick={Home}>👈 Volver</Button> 
                            </div>
                    </Card.Body>
                </Card>   
            </Col>          
        </Row>
    </Container>     
    </>
 )
}

export default Pizza