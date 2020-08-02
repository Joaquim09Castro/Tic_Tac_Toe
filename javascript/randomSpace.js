const randomSpace = () => {
  let rdmNum = (Math.trunc(Math.random() * 8)).toString();
  
  if (!gameSources.player1Sqrs.concat(...gameSources.player2Sqrs).includes(rdmNum)) {
    return rdmNum;
  } else {
    return randomSpace();
  }
};