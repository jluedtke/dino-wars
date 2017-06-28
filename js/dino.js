function GameMaster() {
  this.teamOne = [];
  this.teamTwo = [];
  this.teamOneTurn = true;
}

function Dino(name) {
  this.name = name;
  this.health = 100;
  this.power = 0;
};

GameMaster.prototype.getDinoTeam = function(displayNames1, displayNames2) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=10').then(function(response) {
    var game = new GameMaster();
    for (var ii = 0; ii < response.length; ii++) {
      for (var i = 0; i < response[ii].length; i++) {
        if (ii == 1) {
          var newDino = new Dino(response[ii][i]);
          game.teamOne.push(newDino);
          displayNames1(response[ii][i]);
        } else {
          var newDino = new Dino(response[ii][i]);
          game.teamTwo.push(newDino);
          displayNames2(response[ii][i]);
        }
      }
    }
    game.generateDinoInfo(game.teamOne, game.teamTwo);
  });
};

GameMaster.prototype.generateDinoInfo = function(teamOne, teamTwo) {
  for (var i = 0; i < teamOne.length; i++) {
    teamOne[i].power += teamOne[i].name.length;
  }
  for (var i = 0; i < teamTwo.length; i++) {
    teamTwo[i].power += teamTwo[i].name.length;
  }
}


exports.dinoModule = Dino;
exports.gameModule = GameMaster;
