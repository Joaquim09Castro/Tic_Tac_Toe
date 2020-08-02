// Função de evento de clique em célula
const turnClick = (sqr) => {

  // Modo jogador x jogador
  if (gameSources.mode == 0) {
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
    // Modo solo
  } else if (gameSources.mode == 1) {

    // Turno jogador
    if (sqr.target.innerText == "") {
      sqr.target.innerText = gameSources.player1;
      gameSources.player1Sqrs.push(sqr.target.id);

      winCheck(gameSources.player1Sqrs, gameSources.currPlayer);
      gameSources.currPlayer = "p2";

      // Turno AI
      if (gameSources.outcomeText.innerText == "") {
        if (gameSources.player1Sqrs.length + gameSources.player2Sqrs.length < 7) {
          // movimento aleatório
          let move = randomSpace();
            gameSources.cells[move].innerText = gameSources.player2;
            gameSources.player2Sqrs.push(move);

        } else {
          for (let t of gameSources.cells) {
            if (t.innerText != gameSources.player1 && t.innerText != gameSources.player2) {
              t.innerText = gameSources.player2;
              gameSources.player2Sqrs.push(t.id);
              break;
            }
          }
        }

        winCheck(gameSources.player2Sqrs, gameSources.currPlayer);
        gameSources.currPlayer = "p1";
      }
    }


  }
};