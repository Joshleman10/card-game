import React, { Component } from "react";
import FirstLevel from './GamePlayDivs/1st_Level'


class GamePlayJumbotron extends Component {

    state = {
        oppHelmChestAndHands: ["OppH", "OppC","OppHands"],
        oppLRAndFeet: ["OppL", "OppR","OppFeet"],
        oppHandAndDeck: ["OppHand","OppDeck"],
        userLRAndFeet: ["UserL", "UserR","UserFeet"],
        userHelmChestAndHands: ["UserH", "UserC","UserHands"],
        payerHandAndDeck: ["PlayerHand", "PlayerDeck"]
    };

    handler = (buttonName) => {

    }

    render() {
        return (
            <FirstLevel></FirstLevel>
        )
    }
};

export default GamePlayJumbotron;

//Build out the first level