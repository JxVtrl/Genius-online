import React from 'react';

import './styles.css'

function Game() {
    return (
        <div>
            <h1>Genius</h1>
            <div>
                <ul>
                    <li style={{ "background-color": "green" }}/>
                    <li style={{ "background-color": "red" }}/>
                    <li style={{ "background-color": "yellow" }}/>
                    <li style={{ "background-color": "blue" }} />
                    <button>Start</button>
                </ul>
            </div>
        </div>
    );
}

export default Game;