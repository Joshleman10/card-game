import React from "react";
import {
    Card, CardText, CardBody, Button, CardTitle
} from 'reactstrap';
// import "../artAndStyles/css/bootstrapCard.css"

function BootstrapCard(props) {
    return (
        <Card className='bootStrapCard' style={{ width: '115%', borderStyle: 'solid', borderWidth: '2px', borderColor: 'black', margin: '5px' }}>
            <CardTitle style={{ fontSize: '10px', width: '130%', marginLeft: '-15%' }}>
                {props.name + '  ' + props.rarity}
            </CardTitle>
            <img style={{ width: '100%', height: '7vw', objectFit: 'cover' }} className="cardImage" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
            <CardBody style={{ marginLeft: '-10%', width: '120%', height: '15vw' }}>
                <CardText style={{ fontSize: '10px' }} className="cardText">{props.ability}</CardText>
                <Button style={{ width: '75%', marginTop: "-15px", height: '20px', fontSize: '10px' }}>USE ABILITY</Button>
            </CardBody>
        </Card>
    );
};

export default BootstrapCard;