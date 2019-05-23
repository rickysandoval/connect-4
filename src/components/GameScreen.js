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
            let boardColumn = column.slice().reverse().map((cell, rowIndex) => {
                let className = "game-board__cell";
                if (cell !== null) {
                    className += " " + cell.toLowerCase();
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
                <div className="game-board__title">{this.props.nextPlayer} Player - Take Turn</div>
                <div className="game-board__wrapper">
                    {board}
                </div>
            </div>
        );
    }
}