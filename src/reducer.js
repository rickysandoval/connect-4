import { createGameBoard } from "./utils/create-game-board";
import { BOARD_WIDTH } from "./constants/GameSettings";
import { START_GAME, RESET_GAME } from "./constants/ActionTypes";



const initialState = () => ({
    players: {
        1: null,
        2: null
    },
    gameBoard: createGameBoard(BOARD_WIDTH),
    nextPlayer: null,
    outcome: null
});

export default function rootReducer (state = initialState(), action) {
    switch (action.type) {
        case START_GAME:
            if (!PLAYER_OPTIONS.includes(action.playerOneColor)) {
                return state;
            }

            let playerTwoColor = action.playerOneColor === PLAYER_OPTIONS[0] ? PLAYER_OPTIONS[1] : PLAYER_OPTIONS[0];
            return {
                ...state,
                players: {
                    1: action.playerOneColor,
                    2: playerTwoColor
                },
                nextPlayer: 1
            };
        
        case MAKE_MOVE:
            return state;

        case RESET_GAME:
            return initialState();
    }
}