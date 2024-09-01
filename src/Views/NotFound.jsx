import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <>
    
    <Spinner animation="border" className='aling-item-center' />
    <p className='text-center'>Pagina no encontrada</p>
    <Link to="/">redirijir al Home</Link> 
    </>
  )
}

export default NotFound