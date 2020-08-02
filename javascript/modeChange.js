// Função de Mudança de modos
const changeMode = () => {
  if (gameSources.mode == 0) {
    gameSources.mode = 1;
    gameSources.modeIcon.src = "./assets/robot-antennas.png";
    gameSources.modeText.innerText = "AI Mode";
    startGame();
  } else if (gameSources.mode == 1) {
    gameSources.mode = 0;
    gameSources.modeIcon.src = "./assets/person.png";
    gameSources.modeText.innerText = "Player Mode";
    startGame();
  }
};