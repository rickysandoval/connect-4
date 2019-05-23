import {
    BOARD_WIDTH,
    PLAYER_OPTIONS,
    BOARD_HEIGHT
} from "./constants/GameSettings";
import {
    START_GAME,
    RESET_GAME,
    MAKE_MOVE
} from "./constants/ActionTypes";
import { isValidMove, createGameBoard, gameBoardAfterMove, checkBoardForWinner } from "./utils/game-board-utils";

const initialState = {
    playerOne: null,
    playerTwo: null,
    gameBoard: createGameBoard(BOARD_WIDTH, BOARD_HEIGHT),
    nextPlayer: null,
    turnsTaken: 0,
    winner: null
};


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case START_GAME:
            if (!PLAYER_OPTIONS.includes(action.playerOneColor)) {
                return state;
            }

            let playerTwoColor = action.playerOneColor === PLAYER_OPTIONS[0] ? PLAYER_OPTIONS[1] : PLAYER_OPTIONS[0];
            return {
                ...state,
                playerOne: action.playerOneColor,
                playerTwo: playerTwoColor,
                nextPlayer: action.playerOneColor
            };

        case MAKE_MOVE:
            let invalidMove = !isValidMove(state.gameBoard, action.column);
            if (invalidMove || state.winner) {
                return state;
            }
            
            let activePlayer = state.nextPlayer;
            let newNextPlayer = activePlayer === state.playerOne ? state.playerTwo : state.playerOne;
            let newGameBoard = gameBoardAfterMove(state.gameBoard, action.column, activePlayer);
            let winner = checkBoardForWinner(newGameBoard);
            return {
                ...state,
                nextPlayer: newNextPlayer,
                gameBoard: newGameBoard,
                turnsTaken: state.turnsTaken + 1,
                winner: winner || state.winner
            };

        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
}