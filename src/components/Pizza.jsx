// import React from 'react'
// import { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Card } from 'react-bootstrap';
// const Pizza = () => {
//     const [pizza , setPizza] = useState ([])

//     const obtenerInformacion = async()=>{
//         const respuesta = await fetch('http://localhost:5000')
//         const data = await respuesta.json()
//         console.log(data)
//         setPizza(data)
//     }

//     useEffect(()=>{
//         obtenerInformacion()
//      },[])

//   return (
    
//     <div className='container'>
//       <div className='row'>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={pizza.img} />
//       <Card.Body>
//         <Card.Title>{pizza.desc}</Card.Title>
//         <Card.Text>
//          {pizza}
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>


//       </div>
//     </div>
//   )
// }

// export default Pizza
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import React from 'react'

// const Pizza = ({pizzas}) => { 
//   console.log(pizzas)
//   return (
//     <div className='container'>
// <div className='row'>

//     {
//       pizzas.map((pizza)=>(
//        <div className='col-md-4' key={pizza.id}>
// <Card >
//       <Card.Img variant="top" src={Pizza.img} />
//       <Card.Body>
//         <Card.Title>{pizza.name}</Card.Title>
//         <Card.Text>
//         {pizza.desc}
//         </Card.Text>
//         <Button variant="primary">{pizza.price}</Button>
//       </Card.Body>
//     </Card>
//        </div> 
//       ))
//     }
// </div>
//     </div>
//   )
// }

// export default Pizza
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

const Pizza = ({pizza}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pizza.img} />
    <Card.Body>
      <Card.Title>{pizza.name}</Card.Title>
      <Card.Text>
        {pizza.desc}
      </Card.Text>
      <Button className='' variant="primary">{pizza.price}</Button>
    </Card.Body>
  </Card>

  
  )
}

export default Pizza