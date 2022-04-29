const readline = require("readline-sync");
let turn = 0;
function game() {
  if (turn % 2 === 0) {
    let coord = readline.question("Where do you want to play ex : 1 1?");
  }
}
game();
