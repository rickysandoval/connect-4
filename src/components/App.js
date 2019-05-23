import React, { Component } from 'react';
import { StartScreen } from './StartScreen';
import { GameScreen } from './GameScreen';

class App extends Component {

    render() {
        console.log(this.props);
        let appScreen;
        if (this.props.gameState.players[1] === null) {
            appScreen = <StartScreen onChooseColor={(color) => this.props.onStartGame(color)}/>;
        } else if (this.props.gameState.outcome === null) {
            appScreen =
                <GameScreen 
                    nextPlayer={this.props.gameState.nextPlayer}
                    gameBoard={this.props.gameState.gameBoard}
                    onMakeMove={(player, column, row) => this.props.onMakeMove(player, column, row)}
                />;
        } else {

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