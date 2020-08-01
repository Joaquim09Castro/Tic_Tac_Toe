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