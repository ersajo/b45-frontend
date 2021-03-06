import React, { useState } from 'react'
import { user } from '../../utils/http.js'
import {
  Form,
  Button,
  FormGroup,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './Login.css'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const handleForm = async(e) => {
    try {
      e.preventDefault()
      const body = { email, password }
      const response = await user.login(body)
      console.log(response)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <React.Fragment>
      <Container >
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleForm}>
              <FormGroup>
                <label> Email </label>
                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email"></Form.Control>
              </FormGroup>
              <FormGroup>
                <label> Password </label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"></Form.Control>
              </FormGroup>
              <Button type="Submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Login