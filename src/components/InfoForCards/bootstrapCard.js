import React from "react";
import {
    Card, CardText, CardBody, Button, CardTitle
} from 'reactstrap';
// import "../css/bootstrapCard.css"

function handleClick(e, name) {
    console.log(this.children)
}

function BootstrapCard(props) {
    return (
        <Card style={{ borderStyle: 'solid', borderWidth: '5px', borderColor: 'black', margin: '5px', maxHeight: '250px' }}>
            <CardTitle style={{ fontSize: '10px', width: '130%', marginLeft: '-15%' }}>
                {props.name + '  ' + props.rarity}
            </CardTitle>
            <img style={{ width: '100%', height: '7vw', objectFit: 'cover' }} className="cardImage" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
            <CardBody style={{ marginLeft: '-15%', width: '130%', height: '15vw' }}>
                <CardText style={{ fontSize: '10px' }} className="cardText">{props.ability}</CardText>
                <Button onClick={handleClick} style={{ width: '40%', marginTop: "-15px", height: '20px', fontSize: '10px' }}>ABI</Button>
                <Button onClick={handleClick} style={{ width: '40%', marginTop: "-15px", marginLeft: '5px', height: '20px', fontSize: '10px' }}>{"ATT:" + props.attack}</Button>
            </CardBody>
        </Card>
    );
};

export default BootstrapCard;

//SET UP DATABASE AND FIGURE OUT HOW TO GET PLAYERFULLDECK AND USERNAME OBJECT SAVED TO A MONGODB DATABASE