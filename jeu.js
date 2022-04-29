const readline = require("readline-sync");
let tablGame = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let win = false;
let turn = 0;
const player = "X";
const computer = "O";

function printTablGame(myTabl) {
  for (const line of myTabl) {
    console.log(line);
  }
}

function mathRandRound() {
  let chiffre = function (mathRand, mathRand_two) {
    return mathRand / mathRand_two;
  };
  const mathRand = Math.random() * 10;
  const mathRand_two = Math.random() * 10;
  let x = Math.round(chiffre(mathRand, mathRand_two));
  // if (x <= 2) {
  // }
  if (x > 2) {
    return mathRandRound();
  }
}

while (turn != true) {
  function game() {
    if (turn % 2 === 0) {
      let coord = readline.question("Where do you want to play ex : 1 1 ? : ");
      const xy = coord.split("");
      console.log(xy[0] + " & " + xy[1] + " is ");
      tablGame[xy[0] - 1][xy[1] - 1] = player;
      //printTablGame(tablGame);
    } else {
      let coord_x, coord_y;
      do {
        coord_x = 2;
        coord_y = 2;
      } while (tablGame[coord_x][coord_y] != " ");
      tablGame[coord_x][coord_y] = computer;
    }
    printTablGame(tablGame);
  }
  turn++;
}
game();
