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