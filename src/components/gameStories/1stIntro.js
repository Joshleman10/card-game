import React, { Component } from "react";
import {
    Container, Button, Input
} from 'reactstrap';
import PlayersFullDeck from '../GamePlay/playersFullDeck'
import { allCards } from '../InfoForCards/ViewAllCards'

var shuffle = require('shuffle-array');
export let creatingNewPlayerDeckArr = [];

class IntroToGameStory extends Component {
    state = {
        continueStory: ["Continue Story"],
        slideNumber: [1]
    };

    handleClick = (e, name) => {
        if (name === "Continue Story") {
            this.state.slideNumber.push(this.state.slideNumber.length + 1)
            this.setState({ slideNumber: this.state.slideNumber })
            if (this.state.slideNumber.length === 5) {
                this.state.continueStory.pop()
                this.state.continueStory.push("View Your Heroes")
            }
            if (this.state.slideNumber.length === 6) {
                this.state.continueStory.pop()
                this.state.continueStory.push("Learn To Play", "Start Your Quest")
            }
        }
        else if (name === "View Your Heroes") {

            this.state.slideNumber.push(this.state.slideNumber.length + 1)
            let common = shuffle(allCards[0]).filter((item, index) => {
                if (index < 6) { return item };
            })
            let rare = shuffle(allCards[1]).filter((item, index) => {
                if (index < 5) { return item };
            })
            let legendary = shuffle(allCards[2]).filter((item, index) => {
                if (index < 3) { return item };
            })
            let mythical = shuffle(allCards[3]).filter((item, index) => {
                if (index < 2) { return item };
            })
            creatingNewPlayerDeckArr.push(common, rare, legendary, mythical)
            console.log(creatingNewPlayerDeckArr);
            this.setState({ slideNumber: this.state.slideNumber })
        }
        else if (name === "Start Your Quest") {
            this.props.handleButtonClick(name);
        }
    }

    submitInitialPlayerInfo = () => {
        const playerName = this.state.playerName
        const playerDeck = this.state.playerDeck
        console.log(playerName)
        console.log(playerDeck);
    }

    render() {
        if (this.state.slideNumber.length === 1) {
            return (
                <Container>
                    <p>You come home from school one day to see your father doing his best to hold back tears.<br></br>
                        He looks up and says "Grandpa's very sick, we dont know if he will make it.  We need to go to the hospital."</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            );
        }
        else if (this.state.slideNumber.length === 2) {
            return (
                <Container>
                    <p>You both walk in to your Grandpa's room and the doctor informs you that he could pass any time now.<br></br>
                        You walk over to him and he struggles to point at a small book lying on the table nearby.<br></br>
                        "I want you to have this book.  It holds more secrets than you know"<br></br>
                        You look at the book called "Age of Antiquity", but, in the same instant, Granpa crashes and doctors rush into the room.<br></br>
                        It all happens so fast but before you know it, Granpa is gone.</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 3) {
            return (
                <Container>
                    <p>A few days and much mourning passes.  As you and your Dad are cleaning out Granpa's attic, you notice a small but very old chest.<br></br>
                        You show your Dad, but the chest is locked so you both decide to take it home until a key can be found.<br></br>
                        For weeks no key turns up, but late one night while lying in bed you are reading the book that was left for you. <br></br>
                        Getting towards the end, you turn a page and there is a small key taped to the page.</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 4) {
            return (
                <Container>
                    <p>You get the chest and rush it back to your room.  Placing the key in the locked chest it immediately opens.<br></br>
                        You find inside 10 very old cards, as well as an ancient map with kingdoms and empires of old, and places for cards on either end.<br></br>
                        You notice a space with a picture of what looks like cards stacked on top of each other, so you stack the cards up and place them there.<br></br>
                        As you place the cards onto the map, a blinding light comes out of the map.  You open your eyese to find yourself standing at an old table.<br></br>
                        Across the table from you is a large grizzled man, that says "Welcome to the Age of Antiquity".</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 5) {
            return (
                <Container>
                    <p>"The glory of the ancient ones lives on in these cards." he continues, "You must use the Fabled Cards to defeat all opponents".<br></br>
                        "Then and only then may you return home".  The cards you found in the box are still in your hands, so you anylize them more closely...</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 6) {
            return (
                <Container>
                    <Button onClick={() => this.submitInitialPlayerInfo()} key={1}> Continue To Level 1</Button>
                    <p>Whats your name anyway kid?</p>
                    <Input id="playerName" placeholder="Enter Player Name Here"></Input>
                    <PlayersFullDeck id="playerDeck">
                    </PlayersFullDeck>
                </Container>
            );
        };
    };
}

export default IntroToGameStory;


//GET VALUES FROM BUTTON AND PLAYERDECK TO SAVE TO DB
//RENDER CARDS AND CARD IMAGES APPROPRIATELY FROM A STYLE AND FUNCTIONALITY STANDPOINT
