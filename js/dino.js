function GameMaster() {
  this.teamOne = [];
  this.teamTwo = [];
}

function Dino(name) {
  this.name = name;
  this.health = 0;
  this.power = 0;
  this.image = null;
}

GameMaster.prototype.getDinoTeam = function(displayNames1, displayNames2, callback) {
  var newArray = [];
  var game = this;
   return $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=5').then(function(response) {
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
        newDino.image = "/img/dino8.gif";
      } else if (response[ii][i].endsWith("us")) {
        newDino.power += 2;
        newDino.image = "/img/dino12r.gif";
      } else if (response[ii][i].endsWith("tops") || response[ii][i].endsWith("os")) {
        newDino.power += 3;
        newDino.image = "/img/dino11r.gif";
      } else if (response[ii][i].endsWith("odon")) {
        newDino.power += 4;
        newDino.image = "/img/dino6.gif";
      } else if (response[ii][i].endsWith("or")) {
        newDino.power += 5;
        newDino.image = "/img/dino7.gif"
      } else {
        newDino.image ="/img/dino10.gif"
      }
      if (ii == 1) {
        this.teamOne.push(newDino);
        displayNames1(response[ii][i]);
      } else {
        if (response[ii][i].endsWith("saurus")) {
          newDino.image = "/img/dino8r.gif";
        } else if (response[ii][i].endsWith("us")) {
          newDino.image = "/img/dino12.gif";
        } else if (response[ii][i].endsWith("tops") || response[ii][i].endsWith("os")) {
          newDino.image = "/img/dino11.gif";
        } else if (response[ii][i].endsWith("odon")) {
          newDino.image = "/img/dino6r.gif";
        } else if (response[ii][i].endsWith("or")) {
          newDino.image = "/img/dino7r.gif"
        } else {
          newDino.image ="/img/dino10r.gif"
        }
        this.teamTwo.push(newDino);
        displayNames2(response[ii][i]);
      }
    }
  }
  newArray.push(this.teamOne, this.teamTwo);

  return newArray;
};


exports.dinoModule = Dino;
exports.gameModule = GameMaster;
