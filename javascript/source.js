const gameSources = {

  // Modo de jogo
  mode: "p",

  // Elementos do tabuleiro
  board: $("#game"),
  cells: document.querySelectorAll(".cell"),

  // Elementos jogador 1
  player1: "X",
  player1Sqrs: [],

  // Elementos jogador 2
  player2: "O",
  player2Sqrs: [],

  // Elementos de jogabilidade
  outcomeBox: $("#end-message-container")[0],
  outcomeText: $("#text")[0],
  currPlayer: "p1",
  winCond: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
};