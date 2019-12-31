import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import BootstrapCard from '../InfoForCards/bootstrapCard';
import { firstEverPlayerDeck } from '../gameStories/1stIntro'
import '../css/MainMenu.css';

class PlayersFullDeck extends Component {

    state = {
        playerDeck: [firstEverPlayerDeck]
    };

    handleClick = (e, name) => {
        console.log(this.state.playerDeck);
    }

    render() {
        return (
            <Container>
                <Row>
                {this.state.playerDeck.map((item, index) => (
                <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                ))}
                    {this.state.playerDeck.map((item, index) => (
                        <Col sm="3">
                            <BootstrapCard
                                key={index} onClick={((e) => this.handleClick(e, item))}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
};

export default PlayersFullDeck;

