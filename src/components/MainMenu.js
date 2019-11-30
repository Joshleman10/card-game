import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import BootstrapCard from './InfoForCards/bootstrapCard';
import common from "./InfoForCards/Common.json";
import rare from "./InfoForCards/Rare.json";
import legendary from "./InfoForCards/Legendary.json";
import exotic from "./InfoForCards/Exotic.json";
import './css/MainMenu.css';

// const shuffle = require("shuffle-array");
let allCards = [common, rare, legendary, exotic];
let mergedDeckOfAllCards = [].concat.apply([], allCards);

class MainMenu extends Component {
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
                <Row>
                    {this.state.hero.map((item, index) => (
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

export default MainMenu;

//Get JSON image paths to work using require in bootstrapCard "image"