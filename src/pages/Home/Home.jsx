import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return(
    <div>
      <Container >
        <Row>
          <Col className="postContainer">Post</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home