function War(teamOne, teamTwo) {
  this.teamOne = teamOne;
  this.teamTwo = teamTwo;
  this.dino1 = teamOne[0];
  this.dino2 = teamTwo[0];
  this.teamOneTurn = true;
}

War.prototype.battle = function(displayDinoWinner, displayTeamWinner, displayDinoHealth) {
  console.log("Dino One: " + this.dino1.name);
  console.log("Dino Two: " + this.dino2.name);

  this.damageCalculation(displayDinoHealth);

  if (this.dino1.health < 1 || this.dino2.health < 1) {
    if (this.dino1.health > 0) {
      this.teamTwo.shift();
      console.log("Dino One Wins!");
      displayDinoWinner("Dino One Wins!");
    } else {
      this.teamOne.shift();
      console.log("Dino Two Wins!");
      displayDinoWinner("Dino Two Wins!");
    }
  }
  if (this.teamOne.length == 0) {
    console.log("TEAM TWO WINS!!!");
    displayTeamWinner("Team Two Wins!");
  }
  if (this.teamTwo.length == 0) {
    console.log("TEAM ONE WINS!!!");
    displayTeamWinner("Team One Wins!");
  }
};

War.prototype.damageCalculation = function(displayDinoHealth) {
  if (this.teamOneTurn == true) {
    this.dino2.health -= this.dino1.power;
    this.teamOneTurn = false;
  }
  if (this.teamOneTurn == false) {
    this.dino1.health -= this.dino2.power;
    this.teamOneTurn = true;
  }
  displayDinoHealth(this.dino1.name, this.dino1.health, this.dino2.name, this.dino2.health, this.dino1.image, this.dino2.image);

  console.log(this.teamOneTurn);
  console.log("D2 " + this.dino2.health);
  console.log("D1 " + this.dino1.health);
};

exports.warModule = War;
