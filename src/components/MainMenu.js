import React, { Component } from "react";
import BootstrapCard from './InfoForCards/bootstrapCard'

// const shuffle = require("shuffle-array");

class MainMenu extends Component {
    state = {
        BootstrapCard
    };

    // Map over this.state.friends and render a PresPics component for each friend object
    render() {
        return (
            <div className='mainMenuWrapper'>
                {console.log(this.state)}
                <BootstrapCard></BootstrapCard>
            </div>
        );
    }
}

export default MainMenu;