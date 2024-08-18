
import { toLocalString } from '../utils/toLocalString'
import React from 'react'   
import {Card, Button} from 'react-bootstrap'


const CardPizza = ({name, price, ingredients, img, onAddToCart }) => {
    return (
        <Card className='my-3'>
            <Card.Img variant="top" src={img} />
            <Card.Header>
                <Card.Title>🍕 Pizza {name}</Card.Title>
            </Card.Header>
            <Card.Body className='text-center p-3'>
                <Card.Subtitle>Ingredientes:</Card.Subtitle>
                <Card.Text>
                    
                    <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer className='p-3'>
                <Card.Title className='text-center'>Precio: {toLocalString(price)}</Card.Title>
                <div className="card-btn d-flex gap-2 justify-content-around">
                    <Button variant="outline-dark">Ver más</Button>
                    <Button variant="dark" onClick={onAddToCart}>Añadir 🛒</Button>
                </div>
            </Card.Footer>
        </Card>
    )
}
export default CardPizza; 

