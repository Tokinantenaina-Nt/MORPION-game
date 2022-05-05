// Récupération des cases à clicker

const items = document.getElementsByClassName("grid-item");
let gameEnd = true;
let game = true;
let tablGame = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
const player = "X";
const computer = "O";
let actifPlayer = computer;
let gameOver = false;
let win = " ";
let turn = 0;
let startGame = 0;
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

/*let z= 0, u = 1, d = 2; t = 3 */
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

    return (gameOver = true), (win = player);
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

    return (gameOver = true), (win = computer);
  }
}
//---------------------------------------------------------------
// ----------- Alternance du tour ----------

while (actifPlayer === computer && gameOver === false) {
  console.log("actifPlayer ", actifPlayer);

  function chooseCasePlay() {
    r = Math.round(Math.random() * 10);
    if (r > 8) {
      r = 8;
    }

    return r;
  }
  chooseCasePlay();

  console.log("computer joue: ", "item", r);

  function caseAlreadyPlayed() {
    while (turn < 5 && tablGame[r] !== " ") {
      chooseCasePlay();
      console.log("mandalo ato");
    }
    console.log("computer rejoue: ", "item", r);
  }
  caseAlreadyPlayed();

  if (tablGame[r] === " ") {
    tablGame[r] = computer;
    document.getElementById("item" + r).innerHTML = computer;
  }

  actifPlayer = player;
}
// -----------------------------------------

// Récupération des cases à clicker

function choiseCase(id) {
  turn++;
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
      console.log("item", numCell, "est la cellule cliquée");
      tablGame[numCell] = actifPlayer;
      //console.clear();
    }
    document.getElementById(id).innerHTML = player;
  }
  // ---------- Automatisation ------
  // actifPlayer = actifPlayer === player ? computer : player;
  // -------------------------------------

  actifPlayer = computer;

  while (actifPlayer === computer && gameOver === false) {
    console.log("actifPlayer ", actifPlayer);

    function chooseCasePlay() {
      r = Math.round(Math.random() * 10);
      if (r > 8) {
        r = 8;
      }

      return r;
    }
    chooseCasePlay();

    console.log("computer joue: ", "item", r);

    function caseAlreadyPlayed() {
      while (turn < 5 && tablGame[r] !== " ") {
        chooseCasePlay();
        console.log("mandalo ato");
      }
      console.log("computer rejoue: ", "item", r);
    }
    caseAlreadyPlayed();

    if (tablGame[r] === " ") {
      tablGame[r] = computer;
      document.getElementById("item" + r).innerHTML = computer;
    }

    actifPlayer = player;
  }
  document.getElementById("tourDeJeu").innerHTML =
    "C'est à votre tour de jouer";

  // ---------------- Test de victoire -----------------
  winTest(0, 1, 2);
  winTest(0, 3, 6);
  winTest(0, 4, 8);
  winTest(1, 4, 7);
  winTest(2, 5, 8);
  winTest(2, 4, 6);
  winTest(3, 4, 5);
  winTest(6, 7, 8);
  console.log(tablGame);
  console.log("turn is ", turn);
  // -----------------------------------------------------

  // ---------------------- Match null --------------------------
  let matchNull = false;
  if (turn === 5) {
    winTest(0, 1, 2);
    winTest(0, 3, 6);
    winTest(0, 4, 8);
    winTest(1, 4, 7);
    winTest(2, 5, 8);
    winTest(2, 4, 6);
    winTest(3, 4, 5);
    winTest(6, 7, 8);
    if (gameOver === false) {
      matchNull = true;
    }
  }
  if (turn === 4 && gameOver === false) {
    winTest(0, 1, 2);
    winTest(0, 3, 6);
    winTest(0, 4, 8);
    winTest(1, 4, 7);
    winTest(2, 5, 8);
    winTest(2, 4, 6);
    winTest(3, 4, 5);
    winTest(6, 7, 8);

    let tablVide = 0;
    let stablVide = 0;
    for (let i = 0; i < tablGame.length; i++) {
      if (tablGame[i] === " ") {
        tablVide = 1;
        stablVide = tablVide++;
      }
    }

    if (gameOver === false && stablVide === 0) {
      matchNull = true;
    }
  }

  if (matchNull === true) {
    gameOver = true;
    document.getElementById("tourDeJeu").innerHTML =
      '<div style="color: darkgreen"> "Le match est null, rejouer !"</div>';

    return;
  }

  // ----------------- Affichage & score------------------

  // if (gameOver === true && actifPlayer === player)
  if (gameOver === true && win === player) {
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

  // if (gameOver === true && actifPlayer === computer)
  if (gameOver === true && win === computer) {
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
  turn = 0;
  //console.clear();
  startGame++;
  console.log("Startgame apres reset is", startGame);
  if (startGame % 2 === 0) {
    actifPlayer = computer;
  }
  // ----------- Alternance du tour ----------

  while (actifPlayer === computer && gameOver === false) {
    console.log("actifPlayer ", actifPlayer);

    function chooseCasePlay() {
      r = Math.round(Math.random() * 10);
      if (r > 8) {
        r = 8;
      }

      return r;
    }
    chooseCasePlay();

    console.log("computer joue: ", "item", r);

    function caseAlreadyPlayed() {
      while (turn < 5 && tablGame[r] !== " ") {
        chooseCasePlay();
        console.log("mandalo ato");
      }
      console.log("computer rejoue: ", "item", r);
    }
    caseAlreadyPlayed();

    if (tablGame[r] === " ") {
      tablGame[r] = computer;
      document.getElementById("item" + r).innerHTML = computer;
    }

    actifPlayer = player;
  }
}

console.log("ok");
