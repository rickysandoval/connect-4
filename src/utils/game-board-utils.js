

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
    if (rowIndex >=0) {
        return [
            ...oldBoard.slice(0, columnIndex),
            [
                ...columnChosen.slice(0, rowIndex),
                fill,
                ...columnChosen.slice(rowIndex+1),
            ],
            ...oldBoard.slice(columnIndex+1)
        ];
    } else {
        null;
    }
}

export function checkBoardForWinner(gameBoard) {
    let verticalWinner = checkBoardForWinnerVertical(gameBoard);
    let horizontalWinner = checkBoardForWinnerHorizontal(gameBoard);
    console.log(verticalWinner);
    console.log(horizontalWinner);
    return null;
}

function checkBoardForWinnerVertical(gameBoard) {
    let longestSequence = 1;
    let sequenceValue = null;
    for (let col = 0; col < gameBoard.length && longestSequence < 4; col++) {
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

