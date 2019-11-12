import React, { Component } from "react";
import cards from "../CardObjects.json";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle
} from 'reactstrap';


class BootstrapCard extends Component {
    state = {
        cards
    }

    render() {
        return (
            <ul className='boostrapCard'>
                <Card>
                    {this.state.cards.map(item => {
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                        </CardBody>
                            <img width="100%" src={item.image} alt="Card cap" />
                            <CardBody>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <CardLink href="#">Card Link</CardLink>
                                <CardLink href="#">Another Link</CardLink>
                            </CardBody>
                                        })};

                    </Card>
            </ul>
        );
    };
};

export default BootstrapCard;