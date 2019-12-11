import React from 'react';
import './App.css';
import PrimaryJumbotron from './components/jumbotron'
// import StartMenu from './components/startMenu'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container>
      <PrimaryJumbotron></PrimaryJumbotron>
    </Container>
  );
}

export default App;
