var Dino = require('./../js/dino.js').dinoModule;

var displayNames1 = function(name) {
  $('.output').append(name + "<br>");
};

var displayNames2 = function(name) {
  $('.output2').append(name + "<br>");
};

$(document).ready(function() {
  $('#play').click(function(event) {
    $('.output').empty();
    $('.output2').empty();
    event.preventDefault();
    var dino = new Dino(name);
    dino.getDinoTeam(displayNames1, displayNames2);
  });
});
