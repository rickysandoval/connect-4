import React from 'react';
import './EndScreen.css';

export function EndScreen(props) {
    let outcome;
    if (props.winner) {
        outcome = <React.Fragment><span className={props.winner.toLowerCase()}>{props.winner}</span><span> Player Wins!</span></React.Fragment>
    } else {
        outcome = <span>Tie game!</span>
    }
    return (
        <div>
            <div className="modal">
                <div className="modal__title">{outcome}</div>
                <div className="end-screen__controls">
                    <button onClick={() => props.onReset()}>Play Again</button>
                </div>
            </div>
            
        </div>
    )
}