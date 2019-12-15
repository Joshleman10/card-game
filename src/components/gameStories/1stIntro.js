import React, { Component } from "react";
import {
    Container, Button
} from 'reactstrap';

class IntroToGameStory extends Component {
    state = {
        continueStory: ["Continue Story"],
        slideNumber: [1]
    };

    handleClick = (e, name) => {
        if (name === "Continue Story")
            this.state.slideNumber.push(this.state.slideNumber.length + 1)
        console.log(this.state.slideNumber.length);
        this.setState({ slideNumber: this.state.slideNumber })
    }

    render() {
        if (this.state.slideNumber.length === 1) {
            return (
                <Container>
                    <p>You come home from school one day to see your father holding back some tears.</p>
                    <p>He looks up and says "It's Grandpa's illness, he's not doing well.  We need to go to the hospital."</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            );
        }
        else if (this.state.slideNumber.length === 2) {
            return (
                <Container>
                    <p>You both walk in to your Granpa's room and the doctor informs you that he could pass any time now.</p>
                    <p>You walk over to him and he struggles to point at a small book lying on the table nearby.</p>
                    <p>"I want you to have this book.  It holds more secrets than you know"</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 3) {
            return (
                <Container>
                    <p>You look at the book called "Age of Antiquity", but, in the same instant, Granpa crashes and doctors rush into the room.</p>
                    <p>It all happens so fast but before you know it, Granpa is gone.</p>
                    <p></p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 4) {
            return (
                <Container>
                    <p>A few days and much mourning passes.  As you and your Dad are cleaning out Granpa's attic, you notice a small but very old chest.</p>
                    <p>You show your Dad, but the chest is locked so you both decide to take it home until a key can be found.</p>
                    <p>For weeks no key turns up, but late one night while lying in bed you are reading the book that was left for you. </p>
                    <p>Getting towards the end, you turn a page and there is a small key taped to the page.</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 5) {
            return (
                <Container>
                    <p>You get the chest and rush it back to your room.  Placing the key in the locked chest it immediately opens.</p>
                    <p>You find inside 10 very old cards, as well as an ancient map with kingdoms and empires of old, and places for cards on either end.</p>
                    <p>You notice a space with a picture of what looks like cards stacked on top of each other, so you stack the cards up and place them there.</p>
                    <p>As you place the cards onto the map, a blinding light comes out of the map.  You open your eyese to find yourself standing at an old table.</p>
                    <p>Across the table from you is a large grizzled man, that says "Welcome to the Age of Antiquity".</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
        else if (this.state.slideNumber.length === 6) {
            return (
                <Container>
                    <p>"The glory of the ancient ones lives on in these cards." he continues, "You must conquor all opponents to retrun home"</p>
                    <p>You think to yourself "But I have school tomorrow!"</p>
                    {this.state.continueStory.map((item, index) => (
                        <Button onClick={((e) => this.handleClick(e, item))} name={item} key={index}>{item}</Button>
                    ))}
                </Container>
            )
        }
    };
};

export default IntroToGameStory;


// SET UP "TRAINING" OR "GO TO BATTLE" BUTTONS IN THE FINAL IF/ELSE STATEMENT AND COORESPONDING ONCLICK EVENT