

import React from 'react';
import { PLAYER_OPTIONS } from '../constants/GameSettings';

import './StartScreen.css';

export function StartScreen(props) {
    return (
        <div className="modal">
            <div className="modal__title">Player 1 - Chose a Color</div>
            <div className="modal__controls">
                <button className="button__red" onClick={() => props.onChooseColor(PLAYER_OPTIONS[0])}>{PLAYER_OPTIONS[0]}</button>
                <button className="button__black" onClick={() => props.onChooseColor(PLAYER_OPTIONS[1])}>{PLAYER_OPTIONS[1]}</button>
            </div>
        </div>
    )
}