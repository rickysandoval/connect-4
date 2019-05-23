export function createGameBoard(numColumns, numRows) {
    let board = [];
    for (let col = 0; col < numColumns; col++) {
        board.push(new Array(numRows).fill(null));
    }
    return board;
}

export function isValidMove(oldBoard, columnIndex) {
    return !!oldBoard[columnIndex] && oldBoard[columnIndex].includes(null);
}

export function gameBoardAfterMove(oldBoard, columnIndex, fill) {
    let columnChosen = oldBoard[columnIndex];
    let rowIndex = columnChosen.indexOf(null);
    if (rowIndex >= 0) {
        return [
            ...oldBoard.slice(0, columnIndex),
            [
                ...columnChosen.slice(0, rowIndex),
                fill,
                ...columnChosen.slice(rowIndex + 1),
            ],
            ...oldBoard.slice(columnIndex + 1)
        ];
    } else {
        null;
    }
}

export function checkBoardForWinner(gameBoard) {
    return checkBoardForWinnerVertical(gameBoard) || checkBoardForWinnerHorizontal(gameBoard) || null || checkForWinnerDiagonalLTR(gameBoard) || checkForWinnerDiagonalRTL(gameBoard);
}

function checkBoardForWinnerVertical(gameBoard) {
    let longestSequence = 1;
    let sequenceValue = null;
    for (let col = 0; col < gameBoard.length && longestSequence < 4; col++) {
        longestSequence = 1;
        sequenceValue = null;

        for (let row = 0; row < gameBoard[col].length && longestSequence < 4; row++) {
            let nextCell = gameBoard[col][row];

            if (nextCell && sequenceValue === nextCell) {
                longestSequence++;
            } else {
                longestSequence = 1;
                sequenceValue = nextCell;
            }

        }
    }
    return longestSequence === 4 ? sequenceValue : null;
}

function checkBoardForWinnerHorizontal(gameBoard) {
    let longestSequence = 1;
    let sequenceValue = null;
    for (let row = 0; row < gameBoard[0].length && longestSequence < 4; row++) {
        longestSequence = 1;
        sequenceValue = null;

        for (let col = 0; col < gameBoard.length && longestSequence < 4; col++) {
            let nextCell = gameBoard[col][row];

            if (nextCell && sequenceValue === nextCell) {
                longestSequence++;
            } else {
                longestSequence = 1;
                sequenceValue = nextCell;
            }

        }
    }
    return longestSequence === 4 ? sequenceValue : null;
}

function checkForWinnerDiagonalLTR(gameBoard) {
    let longestSequence = 1;
    let sequenceValue = null;
    let startingCells = []

    for (let colStart = 0, rowStart = gameBoard[0].length - 4; rowStart >= 0; rowStart--) {
        startingCells.push([colStart, rowStart]);
    }

    for (let colStart = 1, rowStart = 0; colStart <= gameBoard.length - 4; colStart++) {
        startingCells.push([colStart, rowStart]);
    }

    startingCells.forEach(([colStart, rowStart]) => {
        if (longestSequence === 4) {
            return;
        }
        longestSequence = 1;
        sequenceValue = null;

        for (let col = colStart, row = rowStart; col < gameBoard.length && row < gameBoard[0].length && longestSequence < 4; col++, row++) {
            let nextCell = gameBoard[col][row];
    
            if (nextCell && sequenceValue === nextCell) {
                longestSequence++;
            } else {
                longestSequence = 1;
                sequenceValue = nextCell;
            }
        }
    });

    return longestSequence === 4 ? sequenceValue : null;
}

function checkForWinnerDiagonalRTL(gameBoard) {
    let longestSequence = 1;
    let sequenceValue = null;
    let startingCells = []

    for (let colStart = gameBoard.length - 1, rowStart = gameBoard[0].length - 4; rowStart >= 0; rowStart--) {
        startingCells.push([colStart, rowStart]);
    }

    for (let colStart = gameBoard.length - 2, rowStart = 0; colStart >= gameBoard.length - 4; colStart--) {
        startingCells.push([colStart, rowStart]);
    }
    startingCells.forEach(([colStart, rowStart]) => {
        if (longestSequence === 4) {
            return;
        }
        longestSequence = 1;
        sequenceValue = null;

        for (let col = colStart, row = rowStart; col >=0 && row < gameBoard[0].length && longestSequence < 4; col--, row++) {
            let nextCell = gameBoard[col][row];
    
            if (nextCell && sequenceValue === nextCell) {
                longestSequence++;
            } else {
                longestSequence = 1;
                sequenceValue = nextCell;
            }
        }
    });

    return longestSequence === 4 ? sequenceValue : null;
}