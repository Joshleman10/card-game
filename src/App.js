import React from 'react';
import './App.css';
import MainMenu from './components/MainMenu'
import MainNavBar from './components/navbar'
import { Container, Row, Col, Collapse } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <MainNavBar></MainNavBar>
        </Col>
      </Row>
      <Row>
        <Col>
          <MainMenu></MainMenu>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
