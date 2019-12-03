import React, { Component } from "react";
import {
    Container, Button
} from 'reactstrap';
import './css/startMenu.css'
import ViewAllCards from './InfoForCards/ViewAllCards'

class StartMenu extends Component {
    state = {
        startMenuButtons: [<ViewAllCards></ViewAllCards>]
    };

    handleClick = (e, index) => {
        if (index === 1) {
            this.setState()
        }
        else if (index === 2) {

        }
        else if (index === 3) {

        }
        else if (index === 4) {

        }
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <h1 className="display-3">Age of Antiquity</h1>
                    <p className="lead">Click below to begin your conquest of the ancient world.</p>
                </Container>
                {this.state.startMenuButtons.map((button, index) => (
                    <Button key={index} color="primary" onClick={((e) => this.handleClick(e, button))}>
                        {button.name ? button.name : index + 1}
                    </Button>
                ))}
            </div>
        );
    };
};

export default StartMenu;