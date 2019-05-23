import * as types from './constants/ActionTypes';

export const startGame = playerOneColor => ({
    type: types.startGame,
    playerOneColor
});

export const makeMove = (player, column, row) => ({
    type: types.MAKE_MOVE,
    player,
    column,
    row
});

export const resetGame = () => ({ type: types.RESET_GAME});