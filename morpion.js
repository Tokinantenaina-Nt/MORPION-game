// Récupération des cases à clicker

const items = document.getElementsByClassName("grid-item");
let gameEnd = true;
let game = true;
let tablGame = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
const player = "X";
const computer = "O";
let actifPlayer = player;
let gameOver = false;

// ------------- Compteur de score -------------------

let tablScorePlayer = [0, 0];
let tablScoreComputer = [0, 0];
let s = 0;

function sumScore(tabl) {
  if (gameOver == false) {
    for (let i = 0; i < 2; i++) {
      s = s + tabl[i];
    }
    // return s;
  }
}
console.log(s);
// -------------------------------------------------

// ------------ WinTest : condition de victoire

// ["0 ", " 1", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", " 8"];

// ["0 ", " 1", "2 "];
// ["0 ", " 3", "6 "];
// ["0 ", " 4", "8 "];
// ["1 ", " 4", "7 "];
// ["2 ", " 5", "8 "];
// ["2 ", " 4", "6 "];
// ["3 ", " 4", "5 "];
// ["6 ", " 7", "8 "];
/*let z = 0, u = 1, d = 2; */
// ------------ Lancement du jeu

// ---------------------------------
//-------------- Game Stop ------
function gameStop() {
  if (gameOver == true) {
    // alert("You win!");
  }
}

//-------------Fonction de Test victoire----------------
function winTest(z, u, d) {
  if (
    tablGame[z] == tablGame[u] &&
    tablGame[u] == tablGame[d] &&
    tablGame[d] == player &&
    gameOver == false &&
    actifPlayer === computer
  ) {
    console.log("You win !");
    document.getElementById("tourDeJeu").innerHTML =
      '<div style="color: darkgreen"> You win! </div>';
    tablScorePlayer[1] = 1;
    sumScore(tablScorePlayer);
    console.log("score", s);
    document.getElementById("youScore").innerText = s;
    return (gameOver = true);
  }

  if (
    tablGame[z] == tablGame[u] &&
    tablGame[u] == tablGame[d] &&
    tablGame[d] == computer &&
    gameOver == false &&
    actifPlayer === player
  ) {
    console.log("Computer win !");
    document.getElementById("tourDeJeu").innerHTML =
      '<div style="color: darkred"> Computer win! </div>';
    console.log(tablGame);
    tablScoreComputer[1] = 1;
    sumScore(tablScoreComputer);
    console.log("score", s);
    document.getElementById("cpuScore").innerText = s;
    return (gameOver = true);
  }
}
//---------------------------------------------------------------

// Récupération des cases à clicker

function choiseCase(id) {
  let numCell = +id.match(/\d+/g).join("") - 1;
  if (tablGame[numCell] != " " && gameOver == false) {
    document.getElementById("dejaJouer").innerHTML =
      "Attention , Cette case est déjà jouée!";
    setTimeout(() => {
      document.getElementById("dejaJouer").innerHTML = "";
    }, 2000);
    return;
  }
  if (gameOver == true) {
    document.getElementById("dejaJouer").innerHTML =
      "Veuillez cliquer sur rejouer pour une autre partie ! ";
    setTimeout(() => {
      document.getElementById("dejaJouer").innerHTML = "";
    }, 2000);
    return;
  }
  if (gameOver == false) {
    console.log(id);
    console.log(numCell, "est la cellule cliquée");
    tablGame[numCell] = actifPlayer;
    //console.clear();

    console.log("avant test");
    document.getElementById(id).innerHTML = actifPlayer;
    actifPlayer = actifPlayer === player ? computer : player;

    document.getElementById("tourDeJeu").innerHTML =
      "C'est à votre tour de jouer";

    winTest(0, 1, 2);
    winTest(0, 3, 6);
    winTest(0, 4, 8);
    winTest(1, 4, 7);
    winTest(2, 5, 8);
    winTest(2, 4, 6);
    winTest(3, 4, 5);
    winTest(6, 7, 8);
    gameStop();
  }
  if (gameOver == true) {
    console.log(tablGame);
  }
}

//Vide le contenu de toute les cases

function reset() {
  let conf = function () {
    return confirm("Voulez-vous vraiment rejouer ?");
  };

  if (gameOver === true || (gameOver === false && conf() === true)) {
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
      items[i].textContent = " ";
      //console.clear();
    }
    tablGame = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    console.log(tablGame);
    document.getElementById("dejaJouer").innerHTML = "";
    document.getElementById("tourDeJeu").innerHTML = "";
    console.log(gameOver);
    gameOver = false;
    console.log("score", s);
  }
}

console.log("ok");
