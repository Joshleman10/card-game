import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import BootstrapCard from './bootstrapCard';
import common from "./Common.json";
import rare from "./Rare.json";
import legendary from "./Legendary.json";
import exotic from "./Mythical.json";
import '../css/MainMenu.css';

// const shuffle = require("shuffle-array");
let allCards = [common, rare, legendary, exotic];
let mergedDeckOfAllCards = [].concat.apply([], allCards);

class ViewAllCards extends Component {
    state = {
        hero: mergedDeckOfAllCards,
        common: common,
        rare: rare,
        legendary: legendary,
        exotic: exotic
    };

    render() {
        return (
            <Container >
                <h1>COMMON</h1>
                <Row>
                    {this.state.common.map((item, index) => (
                        <Col sm="3">
                            <BootstrapCard
                                key={item.id} onClick={((e) => this.handleClick(e, item))}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                            />
                        </Col>
                    ))}
                </Row>
                <h1>RARE</h1>
                <Row>
                    {this.state.rare.map((item, index) => (
                        <Col sm="3">
                            <BootstrapCard
                                key={item.id} onClick={((e) => this.handleClick(e, item))}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                            />
                        </Col>
                    ))}
                </Row>
                <h1>LEGENDARY</h1>
                <Row>
                    {this.state.legendary.map((item, index) => (
                        <Col sm="3">
                            <BootstrapCard
                                key={item.id} onClick={((e) => this.handleClick(e, item))}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                            />
                        </Col>
                    ))}
                </Row>
                <h1>MYTHICAL</h1>
                <Row>
                    {this.state.exotic.map((item, index) => (
                        <Col sm="3">
                            <BootstrapCard
                                key={item.id} onClick={((e) => this.handleClick(e, item))}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ViewAllCards;