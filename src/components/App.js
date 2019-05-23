import React, { Component } from 'react';
import { StartScreen } from './StartScreen';
import { GameScreen } from './GameScreen';
import { BOARD_HEIGHT, BOARD_WIDTH } from '../constants/GameSettings';

class App extends Component {

    render() {
        let appScreen;
        let tieGame = this.props.gameState.turnsTaken === BOARD_HEIGHT * BOARD_WIDTH;

        if (this.props.gameState.playerOne === null) {
            appScreen = <StartScreen onChooseColor={(color) => this.props.onStartGame(color)}/>;
        } else if (this.props.gameState.winner === null && !tieGame) {
            appScreen =
                <GameScreen 
                    nextPlayer={this.props.gameState.nextPlayer}
                    gameBoard={this.props.gameState.gameBoard}
                    onMakeMove={(column) => this.props.onMakeMove(column)}
                />;
        } else {
            appScreen = <div>{this.props.gameState.winner || 'Tie'}</div>
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