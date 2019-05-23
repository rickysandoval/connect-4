import React, { Component } from 'react';
import { StartScreen } from './StartScreen';
import { GameScreen } from './GameScreen';
import { BOARD_HEIGHT, BOARD_WIDTH } from '../constants/GameSettings';
import { EndScreen } from './EndScreen';
import './App.css';


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
                    onReset={() => this.props.onResetGame()}
                />;
        } else {
            appScreen = <EndScreen winner={this.props.gameState.winner} onReset={() => this.props.onResetGame()}/>
        }

        return (
            <div>
                <h1 className="app-title">Connect 4</h1>
                {appScreen}
            </div>
        )
    }
}

export default App;