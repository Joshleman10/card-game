import React from "react";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle
} from 'reactstrap';
import "../css/bootstrapCard.css"

function BootstrapCard(props) {
    return (
        <div>
        <Card className="">
            <CardTitle className="cardTitle">
                {props.name}
            </CardTitle>
            <img className="cardImage" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
            <CardBody>
                <CardText className="cardText">Enter Text Here</CardText>
                <div className="linkDiv">
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </div>
            </CardBody>
        </Card>
        </div>
    );
};

export default BootstrapCard;