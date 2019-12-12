import React, { Component } from "react";
import {
    Container, Button
} from 'reactstrap';
import './css/startMenu.css'

class StartMenu extends Component {
    state = {
        startMenuButtons: ["New Game", "Continue Saved Game", "View All Cards"]
    };

    render() {
        return (
            <Container>
                {this.state.startMenuButtons.map((item, index) => (
                    <Button onClick={this.props.handler} name={item} key={index}>{item}</Button>
                ))}
            </Container>
        );
    };
};

export default StartMenu;