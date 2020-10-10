import React from 'react'
import {
  Navbar,
  Button
} from 'react-bootstrap'
import './NavBar.css'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h1>Aplicación cool</h1>
        </Navbar.Brand>
        <Button className="ml-auto" variant="info">Registro</Button>
        <Button className="ml-4" variant="info">Inicia Sesión</Button>
      </Navbar>
    </div>
  )
}

export default Navigation