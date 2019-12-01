import React, { Component } from "react";
import {
    Jumbotron, Container, Button
} from 'reactstrap';
import './css/startMenu.css'

function startGame(){
    console.log("startGame")
}

function accessSavedFiles(){
    console.log("accessSavedFiles")
}

function showAllChars(){
    console.log("showAllChars")
}

function viewTutorial(){
    console.log("viewTutorial")
}

class StartMenu extends Component {
    state = {
        startMenuButtons : []
    };

    handleClick = (e, id) => {
        console.log(e)
        console.log(id)
        if(id===1){
            console.log(this)
            startGame()
        }
        else if(e===1){
            accessSavedFiles()
        }
        else if(e===2){
            showAllChars()
        }
        else if(e===2){
            viewTutorial()
        }
    }

    render() {
        return (
            <Jumbotron fluid className="text-center">
                <Container fluid>
                    <h1 className="display-3">Age of Antiquity</h1>
                    <p className="lead">Click below to begin your conquest of the ancient world.</p>
                </Container>
                <Button id={1} onClick={((e) => this.handleClick(e,Button))} color="primary" size="lg" block>START GAME</Button>
                <Button id={2} onClick={((e) => this.handleClick(e, this))} color="secondary" size="lg" block>CONTINUE SAVED GAME</Button>
                <Button id={3} oonClick={((e) => this.handleClick(e, this))} color="secondary" size="lg" block>VIEW ALL CARDS AND CHARACTERS</Button>
                <Button id={4} onClick={((e) => this.handleClick(e, this))} color="secondary" size="lg" block>VIEW TUTORIAL</Button>
            </Jumbotron>
        );
    };
};

export default StartMenu;