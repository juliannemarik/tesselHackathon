function markTime(card){
  const date = new Date();
  const cardId = card.uid.toString('hex');
  const seconds = date.getTime();
  return {cardId, seconds}
}

function calculateTime(previousLapTime, currentLapTime){
  return currentLapTime - previousLapTime;
}

function calculateSpeed(lapTime, distance){
  return distance / lapTime
}

module.export = {markTime, calculateSpeed, calculateTime}
