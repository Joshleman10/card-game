import React, { Component } from "react";
import BootstrapCard from './InfoForCards/bootstrapCard';
import cards from "./InfoForCards/Common.json";
import './css/MainMenu.css';

// const shuffle = require("shuffle-array");

class MainMenu extends Component {
    state = {
        hero: cards
    };

    // Map over this.state.friends and render a PresPics component for each friend object
    render() {
        return (
            <div className='mainMenuWrapper'>
                <ul className="gallery">
                        {this.state.hero.map((item, index) => (
                            <div key={item.id} onClick={((e) => this.handleClick(e, item))}>
                                <BootstrapCard
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                />
                            </div>
                        ))}
                </ul>
            </div>
        );
    }
}

export default MainMenu;

//Get JSON image paths to work using require in bootstrapCard "image"