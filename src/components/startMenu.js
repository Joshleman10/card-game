import React, { Component } from "react";
import {
    Container, Button
} from 'reactstrap';
import './css/startMenu.css'
import ViewAllCards from './InfoForCards/ViewAllCards'

class StartMenu extends Component {
    state = {
        startMenuButtons: [1]
    };

    handleClick = (e, index) => {
        if (index === 1) {
            console.log("testing");
            this.state.startMenuButtons.unshift(<ViewAllCards></ViewAllCards>)
            console.log(this.state.startMenuButtons);
            this.setState({startMenuButtons: this.state.startMenuButtons})
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

            </div>
        );
    };
};

export default StartMenu;