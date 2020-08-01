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