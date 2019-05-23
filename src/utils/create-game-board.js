
export function createGameBoard(numColumns, numRows) {
    let board = [];
    for (let col = 0; col < numColumns; col++) {
        board.push(new Array(numRows).fill(null));
    }
    return board;
}