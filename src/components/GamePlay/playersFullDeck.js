import React, { Component } from "react";
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';

class PlayersFullDeck extends Component {

    state = {
        playerDeck: []
    };



    render() {
        return (
            <Jumbotron>
                {this.state.cards.map((item, index) => (
                    <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                ))}
            </Jumbotron>
        )
    }
};

export default PlayersFullDeck;

