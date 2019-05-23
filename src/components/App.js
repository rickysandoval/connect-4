import React, { Component } from 'react';
import { StartScreen } from './StartScreen';

class App extends Component {

    render() {
        console.log(this.props);
        let appScreen;
        if (this.props.gameState.players[1] === null) {
            appScreen = <StartScreen onChooseColor={(color) => this.props.onStartGame(color)}/>;
        }

        return (
            <div>
                <h1>Connect 4</h1>
                {appScreen}
            </div>
        )
    }
}

export default App;