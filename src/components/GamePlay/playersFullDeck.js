import React, { Component } from "react";
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import ViewAllCards from '../InfoForCards/ViewAllCards'

class PlayersFullDeck extends Component {

    state = {
        cards: this.props
    };

    handleClick = (e, name) => {
        console.log("hey")
        console.log(this.state.cards)
    }

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