import React from 'react';
import './App.css';
import StartMenu from './components/startMenu'
import MainNavBar from './components/navbar'
import { Container, Row, Col, Media } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <StartMenu></StartMenu>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
