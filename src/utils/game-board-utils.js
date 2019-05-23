

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
    return null;
}