import React, { Component } from "react";
import {
    Container, Button
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
            this.setState({ slideNumber: this.state.slideNumber })
        }
        else if (name === "Start Your Quest") {
            this.props.handleButtonClick(name);
        }
    }

    render() {
        if (this.state.slideNumber.length === 1) {
            return (
                <Container>
                    <p>Story Stuff<br></br>
                        Story Stuff</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            );
        }
        else if (this.state.slideNumber.length === 2) {
            return (
                <Container>
                    <p>Story Stuff<br></br>
                        Story Stuff</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 3) {
            return (
                <Container>
                    <p>Story Stuff<br></br>
                        Story Stuff</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 4) {
            return (
                <Container>
                    <p>Story Stuff<br></br>
                        Story Stuff</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 5) {
            return (
                <Container>
                    <p>Story Stuff<br></br>
                        Story Stuff</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 6) {
            return (
                <Container>
                    <PlayersFullDeck id="playerDeck">
                    </PlayersFullDeck>
                </Container>
            );
        };
    };
}

export default IntroToGameStory;

