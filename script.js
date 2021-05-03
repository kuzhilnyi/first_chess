'use strict';

const white = {
  Pawn : '\u{2659}',
  Knight : '\u{2658}',
  Bishop : '\u{2657}',
  Rook : '\u{2656}',
  Queen : '\u{2655}',
  King : '\u{2654}',
}

const black = {
  Pawn : '\u{265F}',
  Knight : '\u{265E}',
  Bishop : '\u{265D}',
  Rook : '\u{265C}',
  Queen : '\u{265B}',
  King : '\u{265A}',
}

const column = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
  e : 5,
  f : 6,
  g : 7,
  h : 8,
}

var сhessboard = [
  [...'————————'],
  ['|', 0, 0, 0, 0, 0, 0, 0, 0], // 1
  ['|', 0, 0, 0, 0, 0, 0, 0, 0], // 2
  ['|', 0, 0, 0, 0, 0, 0, 0, 0], // 3
  ['|', 0, 0, 0, 0, 0, 0, 0, 0], // 4
  ['|', 0, 0, 0, 0, 0, 0, 0, 0], // 5
  ['|', 0, 0, 0, 0, 0, 0, 0, 0], // 6
  ['|', 0, 0, 0, 0, 0, 0, 0, 0], // 7
  ['|', 0, 0, 0, 0, 0, 0, 0, 0], // 8
];   // a, b, c, d, e, f, g, h

let moveCounter = 0; //счетчик ходов
let colourMove = white; //показує, чий зараз хід

// розставляємо фігури
function arrangeFigures() {
  // прибираємо зайві фігури з дошки
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      chessboard[i][j] = 0;
    }
  }

  for (let i = 1; i <= 8; i++) {
    // виставляємо пішаків по 2-й та 7-й горизонталі
    сhessboard[2][i] = white.Pawn;
    chessboard[7][i] = black.Pawn;
    // виставляємо тури
    if (i === 1 || i === 8) {
      сhessboard[1][i] = white.Rook;
      сhessboard[8][i] = black.Rook;
    }
    // виставляємо коней
    if (i === 2 || i === 7) {
      chessboard[1][i] = white.Knight;
      chessboard[8][i] = black.Knight;
    }
    // виставляємо офіцерів
    if (i === 3 || i === 6) {
      chessboard[1][i] = white.Bishop;
      chessboard[8][i] = black.Bishop;
    }
    // ставимо ферзя
    if (i === 4) {
      chessboard[1][i] = white.Queen;
      chessboard[8][i] = black.Queen;
    }
    // ставимо короля
    if (i === 5) {
      chessboard[1][i] = white.King;
      chessboard[8][i] = black.King;
    }
  }
}

function freeHorizontal(a, b) {
  if (a[1] === b[1]) {
    for (let i = Math.min(x1, x2) + 1; i < Math.max(x1, x2) - 1; i++){
      if (сhessboard[a[1]][i] !== 0) {
        return 'Ход неверный'
      }
    }
  }
}

function pawnMove(a/*поточна координата пішака*/, b/*наступна координата*/) {
  
}

function knightMove(a/*координата коня*/, b/*наступна координата*/) {
  
}

function bishopMove(a/*координата офіцера*/, b/*наступна координата*/) {
  
}

function rookMove(a/*координата тури*/, b/*наступна координата*/) {
  const x1 = column[a[0]];
  const x2 = column[b[0]];
//перевірка, чи знаходяться фігури на одній горизонталі або вертикалі
  if (x1 !== x2 && a[1] !== b[1]) {
    return 'Ход неверный'
  }
//перевірка, чи вільна вертикаль
  if (x1 === x2) {
    for (let i = Math.min(a[1], b[1]) + 1; i < Math.max(a[1], b[1]) - 1; i++){
      if (сhessboard[i][x1] !== 0) {
        return 'Ход неверный'
      }
    }
  }
//перевірка, чи вільна горизонталь
  if (a[1] === b[1]) {
    for (let i = Math.min(x1, x2) + 1; i < Math.max(x1, x2) - 1; i++){
      if (сhessboard[a[1]][i] !== 0) {
        return 'Ход неверный'
      }
    }
  }
//перевірка, хто має робити хід
  if (moveCounter % 2 !== 0) {
    colourMove = black;
  } else {
    colourMove = white;
  }

  if (сhessboard[b[1]][b[0]] !== 0
  && Object.values(colourMove).includes(сhessboard[b[1]][b[0]]) !== true) {
    return 'Ход неверный'
  } 

}
//test
function queenMove(a/*координата ферзя*/, b/*наступна координата*/) {
  
}

function kingMove(a/*координата короля*/, b/*наступна координата*/) {
  
}
// перевірка, чи (буде) оголошено шах королю
function check() {
  
}
// перевірка, чи оголошено королю мат
function checkMate() {
  
}
// будуємо дошку
function buildChessBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
      document.body.innerHTML += '<div style="background-color: beige; height: 30px; width: 30px; display: block">';
      } else {
      document.body.innerHTML += '<div style="background-color: brown; height: 30px; width: 30px; display: block">'; 
      }
    }
  }
}

// function index (a, b) {
//   let i = 8 * (a - 1) + b - 1;
//   document.body.children[i].innerText = '\u{265F}';
//   document.body.children[i].style = 'text-align:center; line-height:30px; width:30px; font-size:30px;'
// };
