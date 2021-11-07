import {
  dragSrc,
  computer,
  infoPlayer,
  createMultiPlayers,
  resetInfoPlayer,
  currentPlayer,
  player1,
  init
} from "../app.js";
import { generateValidCoords } from "./functions.js";

export function setUpHtml() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = `<p class="news">drag and drop ships into Your Board</p>

<div class="game-environment">

<div class="player-grid grid-board"></div>

<div class="drag-container">
<div class="draggable-ships"></div>
<div class="btns">
<button class="btn rotate">rotate</button>
<button class="btn reorder">reorder</button>
</div>
</div>

</div>`;
}

// create draggable ships
export function createModelShips(model) {
  model.innerHTML = `<div id="destroyer" class="d-ship" draggable="true">
 <div id="destroyer0"></div>
 <div id="destroyer1"></div>
</div>
<div id="submarine" class="d-ship" draggable="true">
 <div id="submarine0"></div>
 <div id="submarine1"></div>
 <div id="submarine2"></div>
</div>
<div id="cruiser" class="d-ship" draggable="true">
 <div id="cruiser0"></div>
 <div id="cruiser1"></div>
 <div id="cruiser2"></div>
</div>
<div id="buttleShip" class="d-ship" draggable="true">
 <div id="buttleShip0"></div>
 <div id="buttleShip1"></div>
 <div id="buttleShip2"></div>
 <div id="buttleShip3"></div>
</div>
<div id="carrier" class="d-ship" draggable="true">
 <div id="carrier0"></div>
 <div id="carrier1"></div>
 <div id="carrier2"></div>
 <div id="carrier3"></div>
 <div id="carrier4"></div>
</div>`;
}

// create board
export function createBoard(container, txt) {
  container.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.id = txt + i;
    div.classList.add("square");
    container.append(div);
  }
}

// create btn
export function createBtn(text) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.classList = `btn ${text}`;
  return btn;
}

// create btns
export function createModeBtns() {
  const container = document.querySelector(".wrapper");
  container.innerHTML = `<p class="news">Choose Mode to Play!</p>
 <div class="btns-model">
 <button class="btn single-player">single player</button>
<button class="btn multi-player">multi player</button>
</div>`;
}

// change html page content
export function setupGameEnvironment() {
  const computerBoard = document.querySelector(".drag-container");
  computerBoard.innerHTML = "";
  computerBoard.classList.remove("drag-container");
  computerBoard.classList.add("computer-grid", "grid-board");
  createBoard(computerBoard, "c");
}

// create player ship
export function createPlayerShip(coords) {
  for (let i = 0; i < coords.length; i++) {
    const div = document.getElementById(`p${coords[i]}`);
    if (!div) return console.log("div is false");
    div.classList.add("ship-part", dragSrc.whichShip);
    dragSrc.dropped = true;
  }
}

// place computer ships in board
export function placeComputerShipsInHTML() {
  for (let ship of computer.ships) {
    const coords = generateValidCoords(ship.length);
    for (let coord of coords) {
      const div = document.getElementById(`c${coord}`);
      div.classList.add("ship-part", ship.shipName);
    }
  }
}

// show info about game
export function showNews(txt, interval) {
  const news = document.querySelector(".news");
  if (interval === 1) {
    return setTimeout(() => (news.textContent = txt), 500);
  }
    return setTimeout(() => (news.textContent = txt), 100);
}

/* ==================== MULTI PLAYER Envi ==================== */
// identification
export function createIdentificationModel() {
  const container = document.querySelector(".wrapper");
  container.innerHTML = `<p class="news">enter your names please!</p>
  <div class="player-info">   
  <input id='f-player' type="text" placeholder="player1">
  <input id='s-player' type="text" placeholder="player2">
  <button id='submit' class="btn">start</button>
  </div>`;
}

// envi
export function setupMultiPlayEnvironment() {
  const name1 = infoPlayer.player1.name;
  const name2 = infoPlayer.player2.name;
  const container = document.querySelector(".wrapper");
  container.innerHTML = `<p class="news"></p>
  <div class="players-news">
  <p class="p1">${name1} board</p>
  <p class="p2">${name2} board</p>
 </div>
  <div class="game-environment">
  <div class="player1 player-grid grid-board"></div>
  <div class="player2 player-grid grid-board"></div>
  </div>`;

  const board1 = document.querySelector(".player1");
  const board2 = document.querySelector(".player2");
  createBoard(board1, "pOne");
  createBoard(board2, "pTwo");

  const replay = createBtn("replay");
  container.append(replay);
  replay.addEventListener('click', init);

  for (let obj of infoPlayer.player1.board) {
    const div = document.getElementById(`pOne${obj.id}`);
    div.classList.add(obj.list[1], obj.list[2]);
  }

  for (let obj of infoPlayer.player2.board) {
    const div = document.getElementById(`pTwo${obj.id}`);
    div.classList.add(obj.list[1], obj.list[2]);
  }

  createMultiPlayers(".player1", ".player2");
  resetInfoPlayer();
}

export function showInfo(txt, interval) {
  let pClass;
  if (currentPlayer === player1) {
    pClass = ".p2";
  } else {
    pClass = ".p1";
  }

  const news = document.querySelector(pClass);
  if (interval === 1) {
    return setTimeout(() => (news.textContent = txt), 500);
  }
    return setTimeout(() => (news.textContent = txt), 100);
}
