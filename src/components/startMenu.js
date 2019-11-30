import React, { Component } from "react";
import {
    Jumbotron, Container, Button
} from 'reactstrap';

class StartMenu extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Jumbotron fluid className="text-center">
                    <Container fluid>
                        <h1 className="display-3">Age of Antiquity</h1>
                        <p className="lead">Click below to begin your conquest of the ancient world.</p>
                    </Container>
                    <Button color="primary" size="lg" block>START GAME</Button>
                </Jumbotron>
            </div>
        );
    };
};

export default StartMenu;