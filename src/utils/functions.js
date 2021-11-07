import {
  dragSrc,
  human,
  computer,
  playSinglePlayerGame,
  init,
  currentPlayer,
  enemy,
  playMultiPlayerGame,
  player1,
  player2,
} from "../app.js";
import { Ship } from "./constructors.js";
import { showNews, showInfo } from "./createAndEditHtml.js";
import { currentMode } from "./events.js";

// create computer ships
export function createComputerShips() {
  const destroyer = new Ship("destroyer", 2);
  const submarine = new Ship("submarine", 3);
  const cruiser = new Ship("cruiser", 3);
  const buttleShip = new Ship("buttleShip", 4);
  const carrier = new Ship("carrier", 5);
  return [destroyer, submarine, cruiser, buttleShip, carrier];
}

// geneate computer ships
export function generateValidCoords(len) {
  let dir = getRandomDirection();
  let num;
  // horizontal
  if (dir && len === 2) num = 99;
  if (dir && len === 3) num = 98;
  if (dir && len === 4) num = 97;
  if (dir && len === 5) num = 96;
  // vertical
  if (!dir && len === 2) num = 89;
  if (!dir && len === 3) num = 79;
  if (!dir && len === 4) num = 69;
  if (!dir && len === 5) num = 59;

  let coords = getRandomCoords(dir, num, len);
  let safe = isSafe(coords, dir);
  if (safe) return coords;

  do {
    dir = getRandomDirection();
    coords = getRandomCoords(dir, num, len);
    safe = isSafe(coords, dir);
  } while (!safe);

  return coords;
}

/*=============== check ===============*/

// check if valid coords before drop
export function isValid(coords) {
  for (let i = 0; i < coords.length; i++) {
    if (coords[i] < 0 || coords[i] > 99) {
      return false;
    }
  }

  if (!dragSrc.isHorizontal) return true;

  // if horizontal
  const borders = [
    0, 9, 10, 19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70, 79, 80, 89, 90,
    99,
  ];
  const coordsBorders = [];

  for (let i = 0; i < coords.length; i++) {
    if (borders.indexOf(coords[i]) >= 0) {
      coordsBorders.push(coords[i]);
    }
    if (coordsBorders.length > 1) return false;
  }
  return true;
}

// check if it overlap another ship befor droping it
export function isOverlap(coords) {
  const arr = [];
  for (let i = 0; i < coords.length; i++) {
    const div = document.getElementById(`p${coords[i]}`);
    if (!div) return false;
    if (div.classList.contains("ship-part")) {
      arr.push("yes");
      break;
    }
  }

  if (arr.length > 0) return true;
  return false;
}

// check if all ships are dropped
export function checkIfEmpty(model) {
  const count = model.childElementCount;
  if (count < 1) return true;
  return false;
}

// check computer coords
export function isSafe(coords) {
  const borders = [
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 9, 19, 29, 39, 49, 59, 69, 79, 89,
    99,
  ];
  const bordersCount = [];

  for (let coord of coords) {
    const div = document.getElementById(`c${coord}`);
    if (!div) return false;
    if (div.classList.contains("ship-part")) return false;
    const divIdNum = parseInt(div.id.slice(1));

    if (borders.indexOf(divIdNum) >= 0) {
      bordersCount.push(divIdNum);
    }
    if (bordersCount.length > 1) return false;

    const sible1 = document.getElementById(`c${coord - 1}`);
    const sible2 = document.getElementById(`c${coord + 10}`);
    const sible3 = document.getElementById(`c${coord - 10}`);
    const sible4 = document.getElementById(`c${coord + 1}`);

    if (sible1) {
      if (sible1.classList.contains("ship-part")) return false;
    }

    if (sible2) {
      if (sible2.classList.contains("ship-part")) return false;
    }

    if (sible3) {
      if (sible3.classList.contains("ship-part")) return false;
    }

    if (sible4) {
      if (sible4.classList.contains("ship-part")) return false;
    }
  }

  return true;
}

/*=========================RANDOM FUNCTIONS ========================*/
// random direction
export function getRandomDirection() {
  const dirs = [true, false];
  const r = Math.floor(Math.random() * 2);
  return dirs[r];
}

// generate random coords for computer
export function getRandomCoords(dir, num, len) {
  let n = Math.floor(Math.random() * num);
  const coords = [];

  if (dir) {
    for (let i = 0; i < len; i++) {
      coords.push(n);
      n++;
    }
  } else {
    for (let i = 0; i < len; i++) {
      coords.push(n);
      n += 10;
    }
  }
  return coords;
}

// pick
export function pickRandomId() {
  const remain = human.remainingSquares();
  const l = remain.length;
  let r = Math.floor(Math.random() * l);
  const randomDiv = remain[r];
  const id = randomDiv.id;
  return id;
}

/* ================================ PLAY ========================*/
export function prepare(e) {
  const div = e.target;
  play(div, "human");
}

export function play(div, who) {
  let hit;
  if (who === "human") {
    hit = humanGo(div);
  } else {
    hit = computerGo(div);
  }
  
  if (hit) {
    let winner = checkIfGameOver(who);
    if (winner) return gameOver(winner);
    return playSinglePlayerGame(who);
  } else {
    return playSinglePlayerGame(swapePlayer(who));
  }
}

function swapePlayer(player) {
  if (player === "human") return "computer";
  return "human";
}

// human play
export function humanGo(div) {
  const isHit = human.check(div.id);
  if (isHit) {
    const divClass = [...div.classList];
    const shipNames = [
      "destroyer",
      "submarine",
      "cruiser",
      "buttleShip",
      "carrier",
    ];
    const index = shipNames.indexOf(divClass[2]);
    computer.ships[index].receivedAttack();
    div.classList.add("win");
    div.innerHTML = "&#9760;";
    div.removeEventListener("click", prepare);
    div.classList.remove("square");
    return true;
  } else {
    div.classList.add("lose");
    div.innerHTML = "&#9737;";
    div.removeEventListener("click", prepare);
    div.classList.remove("square");
    return false;
  }
}

// computer play
export function computerGo(div) {
  const isHit = computer.check(div.id);
  if (isHit) {
    const divClass = [...div.classList];
    const shipNames = [
      "destroyer",
      "submarine",
      "cruiser",
      "buttleShip",
      "carrier",
    ];
    const index = shipNames.indexOf(divClass[2]);
    human.ships[index].receivedAttack();
    div.classList.add("win");
    div.innerHTML = "&#9760;";
    const isSunk = human.ships[index].isSunk();
    if (isSunk) {
      showNews(`your ${human.ships[index].shipName} is sunk!`, 1);
    } else {
      showNews(`your ${human.ships[index].shipName} is hitten!`, 1);
    }
    div.classList.remove("square");
    return true;
  } else {
    div.classList.add("lose");
    div.innerHTML = "&#9737;";
    showNews("they miss!", 0);
    div.classList.remove("square");
    return false;
  }
}

// check if Game over
function checkIfGameOver(who) {
      let enemyLose = 0;
  if (currentMode === "single") {
    if (who === 'human') {
      for (let ship of computer.ships) {
        enemyLose += ship.hittenParts;
      }

    } else if (who === 'computer') {
      for (let ship of human.ships) {
        enemyLose += ship.hittenParts;
     }
    }

    if (enemyLose === 17) {
      return who;
    }
    return false;
  }
  // if mode multi

  for (let ship of enemy.ships) {
    enemyLose += ship.hittenParts;
  }

  if (enemyLose === 17) {
    return currentPlayer.playerName;
  }
  return false;
}

// game over
function gameOver(winner) {
  if (currentMode === "single") {
    const remainingSquares = computer.remainingSquares();
    remainingSquares.forEach((div) =>
      div.removeEventListener("click", prepare)
    );
  } else {
    const remainingSquares1 = player1.remainingSquares();
    remainingSquares1.forEach((div) =>
      div.removeEventListener("click", playMulti)
    );

    const remainingSquares2 = player2.remainingSquares();
    remainingSquares2.forEach((div) =>
      div.removeEventListener("click", playMulti)
    );
  }

  let msg;
  let msgClass;
  const container = document.querySelector(".wrapper");
  const winnerModel = document.createElement("div");
  winnerModel.className = "winner-message";

  if (winner == "human") {
    msg = "congratulation! You won the game!";
    msgClass = "success";
  } else if (winner == "computer") {
    msg = "sorry you lose the game!";
    msgClass = "danger";
  } else {
    msg = `${winner} is won !`;
    msgClass = "success";
  }

  winnerModel.innerHTML = `<div class='remove'>&times;</div>
   <p class="${msgClass}">${msg}</p>
   <button id="restart" class="btn replay">restart</button>`;

  setTimeout(() => {
    container.appendChild(winnerModel);
    const remove = winnerModel.querySelector(".remove");
    const restart = document.getElementById("restart");
    remove.addEventListener("click", () => {
      container.removeChild(winnerModel);
    });

    restart.addEventListener("click", init);
  }, 800);
}

/* =================== play multi player ================*/
export function playMulti(e) {
  const news = document.querySelector(".news");
  news.classList.toggle("class1");
  const div = e.target;
  const hit = playerGo(div);
   
  if (hit) {
    let winner = checkIfGameOver(currentPlayer);
    if (winner) return gameOver(winner);
    return playMultiPlayerGame(currentPlayer);
  } else {
    return playMultiPlayerGame(enemy);
  }
}

function playerGo(div) {
  const isHit = currentPlayer.check(div.id);
  if (isHit) {
    const divClass = [...div.classList];
    const shipNames = [
      "destroyer",
      "submarine",
      "cruiser",
      "buttleShip",
      "carrier",
    ];
    const index = shipNames.indexOf(divClass[2]);
    enemy.ships[index].receivedAttack();
    div.classList.add("win");
    div.innerHTML = "&#9760;";
    div.removeEventListener("click", playMulti);

    const isSunk = enemy.ships[index].isSunk();
    if (isSunk) {
      showInfo(`${enemy.playerName}'s ${enemy.ships[index].shipName} is sunk!`, 1);
    } else {
      showInfo(
        `${enemy.playerName}'s ${enemy.ships[index].shipName} is hitten!`, 1
      );
    }

    div.classList.remove("square");
    return true;
  } else {
    div.classList.add("lose");
    div.innerHTML = "&#9737;";
    showInfo("miss!", 0);
    div.removeEventListener("click", prepare);
    div.classList.remove("square");
    return false;
  }
}

/* =================== others ================*/
// reset dragSrc object
export function resetDragSrc() {
  dragSrc.whichShip = "";
  dragSrc.length = 0;
  dragSrc.eTarget = null;
  dragSrc.dropped = false;
}
