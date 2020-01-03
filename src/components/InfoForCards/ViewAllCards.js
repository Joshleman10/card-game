import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import BootstrapCard from './bootstrapCard';
import common from "./Common.json";
import rare from "./Rare.json";
import legendary from "./Legendary.json";
import exotic from "./Mythical.json";
import '../css/MainMenu.css';

export let allCards = [common, rare, legendary, exotic];
let mergedDeckOfAllCards = [].concat.apply([], allCards);

class ViewAllCards extends Component {
    state = {
        backToMenu: ["Back To Main Menu"],
        hero: mergedDeckOfAllCards,
        common: common,
        rare: rare,
        legendary: legendary,
        exotic: exotic
    };

    handleClick = (e, name) => {
        let buttonName = name;
        // console.log(buttonName);
        this.props.handleButtonClick(buttonName);
    }

    render() {
        return (
            <Container >
                {this.state.backToMenu.map((item, index) => (
                    <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                ))}
                <h1>HEROES</h1>
                <Row>
                    {this.state.hero.map((item, index) => (
                        <Col sm="3">
                            <BootstrapCard
                                key={index} onClick={((e) => this.handleClick(e, item))}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                rarity={item.rarity}
                                attack={item.attack}
                                defense={item.defense}
                                ability={item.ability}
                                cost={item.cost}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ViewAllCards;