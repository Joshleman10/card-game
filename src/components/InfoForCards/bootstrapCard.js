import React from "react";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle
} from 'reactstrap';

function BootstrapCard(props) {
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {props.name}
                </CardTitle>
            </CardBody>
            <img width="100%" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
            <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
            </CardBody>
        </Card>
    );
};

export default BootstrapCard;