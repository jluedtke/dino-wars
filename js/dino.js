function Dino(name) {
  this.name = name;
  this.health = 100;
  this.power = 0;
};

Dino.prototype.getDinoTeam = function(displayNames1, displayNames2) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=10').then(function(response) {
    for (var ii = 0; ii < response.length; ii++) {
      for (var i = 0; i < response[ii].length; i++) {
        if (ii == 1) {
          displayNames1(response[ii][i]);
        } else {
          displayNames2(response[ii][i]);
        }
      }
    }
  });
};

exports.dinoModule = Dino;
