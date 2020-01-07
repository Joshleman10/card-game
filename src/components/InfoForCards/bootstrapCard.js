import React from "react";
import {
    Card, CardText, CardBody, Button,
    CardTitle, Row, Col, Container
} from 'reactstrap';
// import "../css/bootstrapCard.css"

function BootstrapCard(props) {
    return (
            <Card style={{ borderStyle: 'solid', borderWidth: '5px', borderColor: 'black', margin: '5px', maxHeight: '300px' }}>
                <CardTitle>
                    {props.name + '  ' + props.rarity}
                </CardTitle>
                <img style={{ width: '100%', height: '7vw', objectFit: 'cover' }} className="cardImage" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
                <CardBody style={{ width: '100%', height: '10vw', objectFit: 'cover' }}>
                    <CardText style={{ fontSize: '10px' }} className="cardText">{props.ability}</CardText>
                    <Button style={{ height: '20px', fontSize: '10px' }} href="#">Use Ability</Button>
                    <Button style={{ marginLeft:'10px', height: '20px', fontSize: '10px' }} href="#">{"Attack: " + props.attack}</Button>
                </CardBody>
            </Card>
    );
};

export default BootstrapCard;