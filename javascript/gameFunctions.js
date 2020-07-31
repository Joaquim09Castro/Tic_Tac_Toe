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
    gameSources.outcomeBox.style.display = "block";

    if (playerTag == "p1") {
      gameSources.outcomeText.innerText = "Player 1 has Won";
    } else if (playerTag == "p2"){
      gameSources.outcomeText.innerText = "Player 2 has Won";
    }

    for (let squr of gameSources.cells) {
      squr.removeEventListener("click", turnClick, false);
      
    }
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
  gameSources.player1Sqrs = [];
  gameSources.player2Sqrs = [];
  gameSources.outcomeBox.style.display = "none";
  for (let squr of gameSources.cells) {
    squr.innerText = "";
    squr.addEventListener("click", turnClick, false);
  }
};