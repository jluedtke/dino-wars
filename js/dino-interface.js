var Dino = require('./../js/dino.js').dinoModule;
var GameMaster = require('./../js/dino.js').gameModule;
var War = require('./../js/war.js').warModule;

var displayNames1 = function(name) {
  $('.output').append(name + "<br>");
};

var displayNames2 = function(name) {
  $('.output2').append(name + "<br>");
};

$(document).ready(function() {
  var newArray = [];
  $('#play').click(function(event) {
    $('.output').empty();
    $('.output2').empty();
    event.preventDefault();
    // console.log("empty " + newArray);
    var game = new GameMaster();
    var newPromise = game.getDinoTeam(displayNames1, displayNames2);
    newPromise.then( function(resp) { newArray = resp; console.log(newArray);} );

  });
  $("#battle").click(function(event) {
    event.preventDefault();
    var teamOne = newArray[0];
    var teamTwo = newArray[1];
    var newWar = new War(teamOne, teamTwo);
    newWar.battle();
  });
});
