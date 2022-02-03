export const defaultBoard: string[] = new Array(9).fill('');
export const defaultPlayer: string = 'X';
export const mapWinner: number[][][] = [
    [[1, 2], [3, 6], [4, 8]],
    [[0, 2], [4, 7]],
    [[0, 1], [5, 8], [4, 6]],
    [[4, 5], [0, 6]],
    [[3, 5], [1, 7], [0, 8], [2, 6]],
    [[2, 8], [3, 4]],
    [[0, 3], [2, 4], [7, 8]],
    [[6, 8], [1, 4]],
    [[0, 4], [2, 5], [6, 7]],
];



