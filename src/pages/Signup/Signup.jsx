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
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  
  const handleForm = async (e) => {
    try {
      e.preventDefault()
      const body = { email, password, first_name, last_name, phone_number }
      const response = await user.signup(body)
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
                <label> First Name </label>
                <Form.Control value={first_name} onChange={e => setFirstName(e.target.value)} placeholder="Enter your first name"></Form.Control>
              </FormGroup>
              <FormGroup>
                <label> Last Name </label>
                <Form.Control value={last_name} onChange={e => setLastName(e.target.value)} placeholder="Enter your last name"></Form.Control>
              </FormGroup>
              <FormGroup>
                <label> Phone Number </label>
                <Form.Control type="tel" value={phone_number} onChange={e => setPhoneNumber(e.target.value)} placeholder="Enter your phone"></Form.Control>
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

export default Signup