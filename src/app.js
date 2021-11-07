/* ==================== IMPORT ==================== */
import { createModeBtns, showNews } from "./utils/createAndEditHtml.js";
import { addEventsToModeBtns } from "./utils/events.js";
import { Player } from "./utils/constructors.js";
import { pickRandomId, play, prepare, playMulti } from "./utils/functions.js";

/* ==================== GAME ELEMENTS ==================== */
// singleplay
export const dragSrc = { isHorizontal: true };
export let human;
export let computer;
// multiplay
export let infoPlayer = {
  player1: { name: "", board: [] },
  player2: { name: "", board: [] },
  currentPlayer: null,
};
export let player1;
export let player2;
export let currentPlayer;
export let enemy;

/* ==================== SINGLE PLAYER GAME ==================== */

export function createPlayers() {
  // name, board, enemyBoard
  human = new Player("human", ".player-grid", ".computer-grid");
  computer = new Player("computer", ".computer-grid", ".player-grid");
}

export function playSinglePlayerGame(whoPlay) {
  if (whoPlay === "human") {
    const remainingSquares = computer.remainingSquares();
    remainingSquares.forEach((square) =>
      square.addEventListener("click", prepare)
    );
  } else if (whoPlay === "computer") {
    const id = pickRandomId();
    const div = document.getElementById(id);
    play(div, "computer");
  }
}

/* ==================== MULTI PLAYER GAME ==================== */
export function createMultiPlayers(grid1, grid2) {
  const name1 = infoPlayer.player1.name;
  const name2 = infoPlayer.player2.name;
  player1 = new Player(name1, grid1, grid2);
  player2 = new Player(name2, grid2, grid1);
}

export function resetInfoPlayer() {
  infoPlayer = {
    player1: { name: "", board: [] },
    player2: { name: "", board: [] },
    currentPlayer: null,
  };
}

export function playMultiPlayerGame(whoPlay) {
  if (whoPlay === player1) {
    currentPlayer = player1;
    enemy = player2;
  } else {
    currentPlayer = player2;
    enemy = player1;
  }
  const whoPlaySquares = currentPlayer.remainingSquares();
  const enemySquares = enemy.remainingSquares();
  enemy.board.classList.add("cursor");
  currentPlayer.board.classList.remove("cursor");

  whoPlaySquares.forEach((square) =>
    square.removeEventListener("click", playMulti)
  );
  enemySquares.forEach((square) => square.addEventListener("click", playMulti));
  showNews(`${currentPlayer.playerName} go!`);
}

/* ==================== INIt ==================== */
export function init() {
  createModeBtns();
  addEventsToModeBtns();
}

init();
