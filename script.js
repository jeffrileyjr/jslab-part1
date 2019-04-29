"use strict";
let userHealth = 40;
let grantHealth = 10;
let wins = 0;
let startGame = prompt("Do you want to play a game?", "yes or no");
if (startGame === "yes") {
  let name = prompt("Please enter your name:", "Your name here");
  while (userHealth >= 1 && wins < 3) {
    if (userHealth > 0 && grantHealth > 0) {
      let userDamage = Math.floor((Math.random() * 2) + 1);
      let grantDamage = Math.floor((Math.random() * 2) + 1);
      userHealth = userHealth - userDamage;
      grantHealth = grantHealth - grantDamage;
      console.log(`${name} has ${userHealth} health left.`);
      console.log(`Grant, the Mighty Chicken has ${grantHealth} health left.`);
      if (grantHealth <= 0) {
        wins++;
        console.log(`That's ${wins} win(s) for ${name}.`);
        grantHealth = 10;
      } if (userHealth <= 0) {
        console.log(`Sorry, ${name}, you lost to a chicken!`);
        break;
      } if (wins === 3) {
        console.log(`Congrats, ${name}! You won!`);
      }
    }
  }
}
