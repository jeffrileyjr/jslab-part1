"use strict";
let userHealth = 40;
let grantHealth = 10;
let wins = 0;
let usersChoice = null;
let usersName = null;
let battleChoice = null;
function getDamage() {
  userHealth -= Math.floor((Math.random() * 5) + 1);
  grantHealth -= Math.floor((Math.random() * 5) + 1);
}
function startCombat() {
  while (userHealth >= 1 && wins < 3) {
    battleChoice = prompt("Would you like to attack or quit?", "attack or quit");
    if (userHealth > 0 && grantHealth > 0 && battleChoice === "attack") {
      getDamage();
      console.log(`${usersName} has ${userHealth} health left.`);
      console.log(`Grant, the Mighty Chicken has ${grantHealth} health left.`);
      if (grantHealth <= 0) {
        wins++;
        console.log(`That's ${wins} win(s) for ${usersName}.`);
        grantHealth = 10;
      } if (userHealth <= 0) {
        console.log(`Sorry, ${usersName}, you lost to a chicken!`);
        break;
      } if (wins === 3) {
        console.log(`Congrats, ${usersName}! You won!`);
      }
    }
    else if (battleChoice === "quit") {
      console.log("Thanks for playing!");
      return;
    }
  }
}
function startGame() {
  usersChoice = prompt("Do you want to play a game?", "yes or no");
  if (usersChoice === "yes") {
    usersName = prompt("Please enter your name:", "Your name here");
    startCombat();
    return usersName;
  }
}

startGame();