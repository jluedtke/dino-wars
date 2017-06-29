function GameMaster() {
  this.teamOne = [];
  this.teamTwo = [];
}

function Dino(name) {
  this.name = name;
  this.health = 0;
  this.power = 0;
}

GameMaster.prototype.getDinoTeam = function(displayNames1, displayNames2, callback) {
  var newArray = [];
  var game = this;
   return $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=10').then(function(response) {
    newArray = game.generateDinoInfo(response, displayNames1, displayNames2, newArray);
    return newArray;
  });
};

GameMaster.prototype.generateDinoInfo = function(response, displayNames1, displayNames2, newArray) {
  for (var ii = 0; ii < response.length; ii++) {
    for (var i = 0; i < response[ii].length; i++) {
      var newDino = new Dino(response[ii][i]);
      newDino.power += response[ii][i].length;
      newDino.health += response[ii][i].length * 5;
      if (response[ii][i].endsWith("saurus")) {
        newDino.power += 1;
      } else if (response[ii][i].endsWith("us")) {
        newDino.power += 2;
      } else if (response[ii][i].endsWith("tops") || response[ii][i].endsWith("os")) {
        newDino.power += 3;
      } else if (response[ii][i].endsWith("odon")) {
        newDino.power += 4;
      } else if (response[ii][i].endsWith("or")) {
        newDino.power += 5;
      }
      if (ii == 1) {
        this.teamOne.push(newDino);
        displayNames1(response[ii][i]);  //TAKE OUT LATER
      } else {
        this.teamTwo.push(newDino);
        displayNames2(response[ii][i]);  //TAKE OUT LATER
      }
    }
  }
  newArray.push(this.teamOne, this.teamTwo);

  return newArray;
};


exports.dinoModule = Dino;
exports.gameModule = GameMaster;
