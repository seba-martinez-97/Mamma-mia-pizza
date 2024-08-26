import React,{useEffect,useState} from 'react'
import CardPizza from './CardPizza'

const Detalle = () => {

    const[pizza,setPizza] = useState([])

    const obtenerInformacion = async()=>{
        const respuesta = await fetch('http://localhost:5000/api/pizzas/p001')
        const datos = await respuesta.json()
        setPizza(datos)
    }

    useEffect(()=>{
        obtenerInformacion()
    },[])
  return (
    <div>
<CardPizza/>

    </div>
  )
}

export default Detalle




