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

let tablScorePlayer = [0, " "];
let tablScoreComputer = [0, " "];
let scorePlayer = 0;
let scoreComputer = 0;

function sumScore(tabl, s) {
  for (let i = 0; i < tabl.length; i++) {
    s = s + tabl[i];
  }
  return s;
}

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

//-------------Fonction de Test victoire----------------
/*let z = 0, u = 1, d = 2; */ 0;
function winTest(z, u, d) {
  if (
    tablGame[z] == tablGame[u] &&
    tablGame[u] == tablGame[d] &&
    tablGame[d] == player &&
    gameOver == false
  ) {
    console.log("You win !");
    document.getElementById("tourDeJeu").innerHTML =
      '<div style="color: darkgreen"> You win this turn! </div>';

    return (gameOver = true);
  }

  if (
    tablGame[z] == tablGame[u] &&
    tablGame[u] == tablGame[d] &&
    tablGame[d] == computer &&
    gameOver == false
  ) {
    console.log("Computer win !");
    document.getElementById("tourDeJeu").innerHTML =
      '<div style="color: red"> Computer win this turn! </div>';

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
    }, 2500);
    return;
  }
  if (gameOver === true) {
    document.getElementById("dejaJouer").innerHTML =
      "Cliquer rejouer pour commencer une autre partie ! ";
    setTimeout(() => {
      document.getElementById("dejaJouer").innerHTML = "";
    }, 5000);
    return;
  }
  if (gameOver === false) {
    console.log(id);
    console.log(numCell, "est la cellule cliquée");
    tablGame[numCell] = actifPlayer;
    //console.clear();

    document.getElementById(id).innerHTML = actifPlayer;

    // ---------- Automatisation ------
    // actifPlayer = actifPlayer === player ? computer : player;
    // -------------------------------------
    console.log(actifPlayer);
    // if (actifPlayer === computer) {
    let casePlay = Math.round(Math.random() * 10);
    if (casePlay > 8) {
      casePlay = 8;
    }
    console.log("mathrandom is", casePlay);
    tablGame[casePlay] = computer;
    console.log(tablGame);
    // }

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
    console.log(tablGame);

    if (gameOver === true && actifPlayer === computer) {
      tablScorePlayer[1] = 1;

      console.log("scorePlayer", sumScore(tablScorePlayer, scorePlayer));
      sumScore(tablScorePlayer, scorePlayer);
      document.getElementById("youScore").innerText = sumScore(
        tablScorePlayer,
        scorePlayer
      );
      tablScorePlayer[0] = sumScore(tablScorePlayer, scorePlayer);
    }

    if (gameOver === true && actifPlayer === player) {
      tablScoreComputer[1] = 1;

      console.log("scoreComputer", sumScore(tablScoreComputer, scoreComputer));
      sumScore(tablScoreComputer, scoreComputer);
      document.getElementById("cpuScore").innerText = sumScore(
        tablScoreComputer,
        scoreComputer
      );
      tablScoreComputer[0] = sumScore(tablScoreComputer, scoreComputer);
    }
  }
  // ---------------------- Match null --------------------------
  let matchNull = true;
  for (const cell of tablGame) {
    if (cell === " ") {
      matchNull = false;
    }
  }
  if (matchNull == true) {
    gameOver = true;
    document.getElementById("tourDeJeu").innerHTML =
      '<div style="color: darkgreen"> "Le match est null, rejouer !"</div>';

    return;
  }
  // ------------------------------------------------------------------
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
    }
    tablGame = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    console.log(tablGame);
    document.getElementById("dejaJouer").innerHTML = "";
    document.getElementById("tourDeJeu").innerHTML = "";
    console.log(gameOver);
    gameOver = false;
  }
  //console.clear();
}

console.log("ok");
