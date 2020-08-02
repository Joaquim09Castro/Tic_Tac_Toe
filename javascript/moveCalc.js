const aiWinMove = () => {
  let move;

  gameSources.winCond.forEach((arr) => {
    gameSources.player2Sqrs.includes(arr[0]) ?
      gameSources.player2Sqrs.includes(arr[1]) ? move = arr[2] :
      gameSources.player2Sqrs.includes(arr[2]) ? move = arr[1] :
    
    gameSources.player2Sqrs.includes(arr[1]) ? 
      gameSources.player2Sqrs.includes(arr[2]) ? move = arr[0] :
      null : null : null; //jshint ignore: line
      
      console.log(move);
  });

  return move;
};