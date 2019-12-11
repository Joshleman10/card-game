import React from 'react';
import { Button } from 'reactstrap';

function MainStartButton() {
    return (
        <div>
            <Button onClick={((e) => this.handleClick(e))}>Click Here To Start</Button>
        </div>
    );
}

export default MainStartButton;