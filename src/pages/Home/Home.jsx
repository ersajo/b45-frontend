import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import './Home.css'

const Home = () => {
  return(
    <Container >
      <Row>
        <Col className="postContainer">Post</Col>
      </Row>
    </Container>
  )
}

export default Home