import * as types from './constants/ActionTypes';

export const startGame = playerOneColor => ({
    type: types.START_GAME,
    playerOneColor
});

export const makeMove = (column) => ({
    type: types.MAKE_MOVE,
    column
});

export const resetGame = () => ({ type: types.RESET_GAME});