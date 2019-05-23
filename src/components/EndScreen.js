import React from 'react';
import './EndScreen.css';

export function EndScreen(props) {
    return (
        <div>
            <div className="modal">
                <div className="modal__title">{props.winner ? props.winner + ' Player Wins!' : 'Tie game'}</div>
                <div className="end-screen__controls">
                    <button onClick={() => props.onReset()}>Play Again</button>
                </div>
            </div>
            
        </div>
    )
}