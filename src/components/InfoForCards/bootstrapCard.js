import React from "react";
import {
    Card, CardText, CardBody, Button,
    CardTitle
} from 'reactstrap';
// import "../css/bootstrapCard.css"

function BootstrapCard(props) {
    return (
        <div>
            <Card style={{ borderStyle: 'solid', borderWidth: '5px', borderColor: 'black', margin: '5px', maxHeight: '300px', overflow: 'none' }}>
                <CardTitle>
                    {props.name + '  ' + props.rarity}
                </CardTitle>
                <img style={{ width: '100%', height: '10vw', objectFit: 'cover' }} className="cardImage" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
                <CardBody>
                    <CardText className="cardText">{props.ability}</CardText>
                    <Button href="#">{props.attack + props.defense}</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default BootstrapCard;