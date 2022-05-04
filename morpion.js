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
/*let u = 1, d = 2; t = 3 */
function winTest(u, d, t) {
  if (
    tablGame[u] == tablGame[d] &&
    tablGame[d] == tablGame[t] &&
    tablGame[t] == player &&
    gameOver == false
  ) {
    console.log("You win !");
    document.getElementById("tourDeJeu").innerHTML =
      '<div style="color: darkgreen"> You win this turn! </div>';

    return (gameOver = true);
  }

  if (
    tablGame[u] == tablGame[d] &&
    tablGame[d] == tablGame[t] &&
    tablGame[t] == computer &&
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
  if (actifPlayer === player) {
    let numCell = +id.match(/\d+/g).join("");
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
    }
    document.getElementById(id).innerHTML = player;
  }
  // ---------- Automatisation ------
  // actifPlayer = actifPlayer === player ? computer : player;
  // -------------------------------------
  actifPlayer = computer;
  while (actifPlayer === computer) {
    console.log("actifPlayer ", actifPlayer);

    function chooseCasePlay() {
      r = Math.round(Math.random() * 10);
      if (r > 9) {
        r = 9;
      }

      return r;
    }
    chooseCasePlay();

    console.log("computer joue: ", r);

    function caseAlreadyPlayed() {
      if (tablGame[r] === player || tablGame[r] === computer) {
        chooseCasePlay();
      }
      console.log("computer joue: ", r);
    }
    caseAlreadyPlayed();

    if (tablGame[r] === " ") {
      tablGame[r] = computer;
    }

    actifPlayer = player;
  }

  document.getElementById("item" + r).innerHTML = computer;

  // ------------------------------------
  document.getElementById("tourDeJeu").innerHTML =
    "C'est à votre tour de jouer";
  // --------------- Test de victoire -----------------
  winTest(1, 2, 3);
  winTest(1, 4, 7);
  winTest(1, 5, 9);
  winTest(2, 5, 8);
  winTest(3, 6, 9);
  winTest(3, 5, 7);
  winTest(4, 5, 6);
  winTest(7, 8, 9);
  console.log(tablGame);

  // ----------------- Affichage ------------------
  if (gameOver === true && actifPlayer === player) {
    tablScorePlayer[1] = 1;
    console.log("scorePlayer", sumScore(tablScorePlayer, scorePlayer));
    sumScore(tablScorePlayer, scorePlayer);
    document.getElementById("youScore").innerText = sumScore(
      tablScorePlayer,
      scorePlayer
    );
    console.log("scorePlayer", sumScore(tablScorePlayer, scorePlayer));
    tablScorePlayer[0] = sumScore(tablScorePlayer, scorePlayer);
  }

  if (gameOver === true && actifPlayer === computer) {
    tablScoreComputer[1] = 1;

    console.log("scoreComputer", sumScore(tablScoreComputer, scoreComputer));
    sumScore(tablScoreComputer, scoreComputer);
    document.getElementById("cpuScore").innerText = sumScore(
      tablScoreComputer,
      scoreComputer
    );
    tablScoreComputer[0] = sumScore(tablScoreComputer, scoreComputer);
  }

  // ---------------------- Match null --------------------------
  let matchNull = true;
  if (gameOver === true) {
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

  console.clear();
}

console.log("ok");
