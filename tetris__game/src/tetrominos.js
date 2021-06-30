//Create tetromino shape and color
export const TETROMINOS = {
  0: {shape: [[0]], color: '0,0,0'},
  I: {shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]], color: '4, 188, 191'},
  J: {shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], color: '0, 46, 145'},
  L: {shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']], color: '237, 174, 0'},
  O: {shape: [['O', 'O'], ['O', 'O']], color: '170, 227, 57'},
  S: {shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], color: '20, 112, 25'},
  T: {shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]], color: '99, 28, 166'},
  Z: {shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], color: '186, 30, 30'},
}

//Create func random shapes

export const randomTetromino = () => {

  const tetrominos = 'IJLOSTZ';
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
}