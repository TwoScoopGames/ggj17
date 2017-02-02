var courtHeight = 1000;
var courtWidthRatio = 0.55;
var puckDiameterRatio = 0.05;
var paddleDiameterRatio = 0.1;

module.exports = {
  camera: 0,
  network: 1,
  player1: 2,
  player2: 3,
  ball: 4,
  score: 5,
  court: 6,
  courtWidth: courtHeight * courtWidthRatio,
  courtHeight: courtHeight,
  puckDiameter: courtHeight * puckDiameterRatio,
  paddleDiameter: courtHeight * paddleDiameterRatio
};
