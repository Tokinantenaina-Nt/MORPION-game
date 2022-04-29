const readline = require("readline-sync");
// # npm install readline-sync

// const readline = require('readline-sync');

// let name = readline.question("What is your name?");

// console.log("Hi " + name + ", nice to meet you.");

// const test = Math.round(0.05);
// console.log(test);

function mathRandRound() {
  let chiffre = function (mathRand, mathRand_two) {
    return mathRand / mathRand_two;
  };
  const mathRand = Math.random() * 10;
  const mathRand_two = Math.random() * 10;
  let x = Math.round(chiffre(mathRand, mathRand_two));
  console.log("mathrand is ", mathRand);
  console.log("mathrand2 is ", mathRand_two);
  console.log(x);
  if (x <= 2) {
    console.log("mety");
  }
  if (x > 2) {
    console.log("superieur à deux");
    console.log("alors?");
    return mathRandRound();
  }
}

mathRandRound();

let turn = 0;
while (turn != true) {
  let coord = readline.question("Where do you want to play ex : 1 1 ? : ");
  console.log("tour");
}
