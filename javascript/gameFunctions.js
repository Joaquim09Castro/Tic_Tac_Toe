// Função de checagem de vitória
const winCheck = (playerArr, playerTag) => {
  let check = false;

  gameSources.winCond.forEach((arr) => {
    playerArr.find((el) => el == arr[0]) ?
      playerArr.find((el) => el == arr[1]) ?
      playerArr.find((el) => el == arr[2]) ? check = true :
      undefined : undefined : undefined;  //jshint ignore: line
  });

  if (check) {
    console.log(playerTag);
  }
};

// Função de evento de clique em célula
const turnClick = (sqr) => {
  if (gameSources.currPlayer == "p1") {
    sqr.target.innerText = gameSources.player1;
    gameSources.player1Sqrs.push(sqr.target.id);

    winCheck(gameSources.player1Sqrs, gameSources.currPlayer);
    gameSources.currPlayer = "p2";

  } else if (gameSources.currPlayer == "p2") {
    sqr.target.innerText = gameSources.player2;
    gameSources.player2Sqrs.push(sqr.target.id);

    winCheck(gameSources.player2Sqrs, gameSources.currPlayer);
    gameSources.currPlayer = "p1";
  }
};

// Função de inicialização
const startGame = () => {
  for (let s of gameSources.cells) {
    s.innerText = "";
    s.addEventListener("click", turnClick, false);
  }
};