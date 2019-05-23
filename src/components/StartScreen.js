

import React from 'react';
import { PLAYER_OPTIONS } from '../constants/GameSettings';

export function StartScreen(props) {
    return (
        <div className="start-screen">
            <div className="start-screen-title">Player 1 = Please Chose your Color</div>
            <div>
                <button onClick={() => props.onChooseColor(PLAYER_OPTIONS[0])}>{PLAYER_OPTIONS[0]}</button>
                <button onClick={() => props.onChooseColor(PLAYER_OPTIONS[1])}>{PLAYER_OPTIONS[1]}</button>
            </div>
        </div>
    )
}