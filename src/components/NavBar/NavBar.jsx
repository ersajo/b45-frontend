import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Button
} from 'react-bootstrap'
import './NavBar.css'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            Aplicación cool
          </Navbar.Brand>
        </Link>
        <Link
          className="ml-auto"
          to="/signup">
          <Button
            variant="warning">
            Registro
          </Button>
        </Link>
        <Link
          className="ml-4"
          to="/login">
          <Button
            variant="warning">
            Inicia sesión
          </Button>
        </Link>
      </Navbar>
    </div>
  )
}

export default Navigation