// Função de checagem de vitória
const winCheck = (playerArr, playerTag) => {
  let check = false;

  gameSources.winCond.forEach((arr) => {
    playerArr.find((el) => el == arr[0]) ?
      playerArr.find((el) => el == arr[1]) ?
      playerArr.find((el) => el == arr[2]) ? check = true :
      undefined : undefined : undefined; //jshint ignore: line
  });

  if (check) {
    gameSources.outcomeBox.style.display = "block";

    if (playerTag == "p1") {
      if (gameSources.mode == 0) {
        // Modo jogador x jogador
        gameSources.outcomeText.innerText = "Player 1 has Won!";
      } else if (gameSources.mode == 1) {
        // Modo solo
        gameSources.outcomeText.innerText = "You Won!";
      }

    } else if (playerTag == "p2") {
      if (gameSources.mode == 0) {
        // Modo jogador x jogador
        gameSources.outcomeText.innerText = "Player 2 has Won!";
      } else if (gameSources.mode == 1) {
        // Modo solo
        gameSources.outcomeText.innerText = "You lost";
      }
    }

    for (let sqr of gameSources.cells) {
      sqr.removeEventListener("click", turnClick, false);

    }
  } else if (gameSources.player1Sqrs.length + gameSources.player2Sqrs.length == 9) {
    gameSources.outcomeBox.style.display = "block";
    gameSources.outcomeText.innerText = "It's a tie";

    for (let sqr of gameSources.cells) {
      sqr.removeEventListener("click", turnClick, false);

    }
  }
};

// Função de evento de clique em célula
const turnClick = (sqr) => {

  if (gameSources.mode == 0) {
    // Modo jogador x jogador
    if (gameSources.currPlayer == "p1") {
      if (sqr.target.innerText == "") {
        sqr.target.innerText = gameSources.player1;
        gameSources.player1Sqrs.push(sqr.target.id);

        winCheck(gameSources.player1Sqrs, gameSources.currPlayer);
        gameSources.currPlayer = "p2";
      }

    } else if (gameSources.currPlayer == "p2") {
      if (sqr.target.innerText == "") {
        sqr.target.innerText = gameSources.player2;
        gameSources.player2Sqrs.push(sqr.target.id);

        winCheck(gameSources.player2Sqrs, gameSources.currPlayer);
        gameSources.currPlayer = "p1";
      }
    }
  } else if (gameSources.mode == 1) {

    // Modo solo
    if (sqr.target.innerText == "") {
      sqr.target.innerText = gameSources.player1;
      gameSources.player1Sqrs.push(sqr.target.id);

      winCheck(gameSources.player1Sqrs, gameSources.currPlayer);
      gameSources.currPlayer = "p2";

      // Turno AI
      if (gameSources.outcomeText.innerText == "") {
        for (let t of gameSources.cells) {
          if (t.innerText != gameSources.player1 && t.innerText != gameSources.player2) {
            t.innerText = gameSources.player2;
            gameSources.player2Sqrs.push(t.id);
            break;
          }
        }
        winCheck(gameSources.player2Sqrs, gameSources.currPlayer);
        gameSources.currPlayer = "p1";
      }
    }


  }
};

// Função de inicialização
const startGame = () => {
  gameSources.player1Sqrs = [];
  gameSources.player2Sqrs = [];
  gameSources.outcomeBox.style.display = "none";
  gameSources.outcomeText.innerText = "";
  for (let sqr of gameSources.cells) {
    sqr.innerText = "";
    sqr.addEventListener("click", turnClick, false);
  }
};

// Função de Mudança de modos
const changeMode = () => {
  if (gameSources.mode == 0) {
    gameSources.mode = 1;
    gameSources.modeIcon.src = "./assets/robot-antennas.png";
    gameSources.modeText.innerText = "AI Mode";
  } else if (gameSources.mode == 1) {
    gameSources.mode = 0;
    gameSources.modeIcon.src = "./assets/person.png";
    gameSources.modeText.innerText = "Player Mode";
  }
};