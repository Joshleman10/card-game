import React, { Component } from "react";
import {
    Container, Button
} from 'reactstrap';
import './css/startMenu.css'

class StartMenu extends Component {
    state = {
        startMenuButtons: ["New Game", "Continue Saved Game", "View All Cards"]
    };

    
    handleClick = (e, name) => {
        let buttonName = name;
        // console.log(buttonName);
        this.props.handleButtonClick(buttonName);            
    }

    render() {
        return (
            <Container>
                {this.state.startMenuButtons.map((item, index) => (
                    <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                ))}
            </Container>
        );
    };
};

export default StartMenu;