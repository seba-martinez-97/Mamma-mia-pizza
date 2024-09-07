import React from 'react'
import Button from 'react-bootstrap/Button';



const Profile = () => {
  return (
    <div className='profile'>
      <h1>
      Datos personales:
      </h1>
      <br />
      <h4>
        Holamundo@gmail.com
      </h4>

    <Button variant="primary" size="lg">
          Cerrar sesion
        </Button>
    </div>
  )
}

export default Profile