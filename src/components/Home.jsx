import React, { Component } from 'react';
import { Link }  from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button  } from 'react-bootstrap'
import '../styles/Home.css'
import NavLink from 'react-bootstrap/NavLink';

class Home extends Component {
  render() {
    return (

      <Container>
        <Jumbotron>
          <h2>TESTING TESTING</h2>
        </Jumbotron>
        <Link to='./about'>
         <Button bsStyle="primary">About</Button>
        </Link>
      </Container>

    );
  }
}

export default Home;