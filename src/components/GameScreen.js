import React from 'react';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../constants/GameSettings';

import './GameScreen.css';

export class GameScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    onColumnClick(columnIndex) {
        let column = this.props.gameBoard[columnIndex];
        if (column.includes(null)) {
            this.props.onMakeMove(columnIndex);
        }
    }

    render() {
        let board = this.props.gameBoard;
        board = board.map((column, columnIndex) => {
            let boardColumn = column.slice().reverse().map((cell, rowIndex, wholeColumn) => {
                let className = "game-board__cell";
                console.log(cell);
                let lastOpenColumn = cell === null && !wholeColumn[rowIndex-1] && (wholeColumn[rowIndex+1] || wholeColumn[rowIndex+1] === undefined) ;
                if (lastOpenColumn) {
                    className += ' last-open-cell'
                }
                if (cell !== null) {
                    className += ' ' + cell.toLowerCase();
                }
                return <div className={className} key={rowIndex}><div className="space"></div></div>
            });
            return <div className="game-board__column" key={columnIndex} onClick={() => this.onColumnClick(columnIndex)}>{boardColumn}</div>
        });
        return(
            <div>
                <style>{`
                    :root {
                        --num-columns: ${BOARD_WIDTH};
                        --num-rows: ${BOARD_HEIGHT}
                    }
                `}</style>
                <div className="game-board__title"><span className={this.props.nextPlayer.toLowerCase()}>{this.props.nextPlayer}</span> - Take Turn</div>
                <div className={"game-board__wrapper " + `${this.props.nextPlayer.toLowerCase()}-turn`}>
                    {board}
                </div>
                <div className="game-board__reset"><span className="game-board__reset-button" onClick={()=>this.props.onReset()}>Reset Game</span></div>
            </div>
        );
    }
}