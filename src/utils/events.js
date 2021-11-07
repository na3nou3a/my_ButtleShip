import {
 dragSrc,
 playSinglePlayerGame,
 createPlayers,
 infoPlayer,
 playMultiPlayerGame,
 player1
} from "../app.js";
import { isValid, isOverlap, checkIfEmpty, resetDragSrc } from "./functions.js";
import {
 setupGameEnvironment,
 placeComputerShipsInHTML,
 createBtn,
 createPlayerShip,
 setUpHtml,
 showNews,
 createModelShips,
 createBoard,
 createIdentificationModel,
 setupMultiPlayEnvironment
} from "./createAndEditHtml.js";


export let currentMode;

// add events to single and multi play btns
export function addEventsToModeBtns() {
 const singlePlayerBtn = document.querySelector('.single-player');
 const multiPlayerBtn = document.querySelector('.multi-player');

 singlePlayerBtn.addEventListener('click', ()=>{
  resetDragSrc();
  dragSrc.isHorizontal = true;
  currentMode = 'single';
  setupSinglePlayerGame()
 } );
 
 multiPlayerBtn.addEventListener('click', ()=> {
  currentMode = 'multi';
  setupMultiPlayerGame();
 } );
}

// add events to draggable ships
export function addEventsToModel(model) {
 resetDragSrc();
 dragSrc.isHorizontal = true;
 const dShips = model.querySelectorAll(".d-ship");
 dShips.forEach((ship) => {
  ship.addEventListener("mousedown", getTarget);
 });

 dShips.forEach((ship) => {
  ship.addEventListener("dragstart", dragStart, false);
  ship.addEventListener("dragleave", dragLeave, false);
 });
}

// add events to palyer board
export function addEventsToBoard(board) {
 board.addEventListener("drop", dragDrop, false);
 board.addEventListener("dragover", dragOver, false);
}

// add events to btns
export function addEventsToBtns(btns) {
 const rotateBtn = btns.querySelector(".rotate");
 const reorderBtn = btns.querySelector(".reorder");
 rotateBtn.addEventListener("click", rotate);
 reorderBtn.addEventListener("click", reOrder);
}

/* ==================== EVENTS CB FUNCTIONS ==================== */

// get target
export function getTarget(e) {
 const target = e.target;
 dragSrc.eTarget = parseInt(target.id.slice(-1));
}

// drag start
export function dragStart(e) {
 dragSrc.whichShip = this.id; // ex: destroyer
 dragSrc.length = this.childElementCount; // 2
 e.dataTransfer.effectAllowed = "move";
}

// drag over
export function dragOver(e) {
 e.preventDefault();
 e.dataTransfer.dropEffect = "move";
}

// drag end
export function dragLeave(e) {
 e.stopPropagation();
}

// drop
export function dragDrop(e) {
 e.preventDefault();
 const model = document.querySelector(".draggable-ships");
 const currentDShip = document.getElementById(dragSrc.whichShip);
 const coords = [];
 const target = e.target; // div in my board
 let id = parseInt(target.id.slice(1)); // p99 => 99
 const l = dragSrc.length;
 if (dragSrc.isHorizontal) {
   // if horizontal
   for (let i = 0; i < l; i++) {
     coords.push(id - dragSrc.eTarget);
     id++;
   }
 } else {
   // if vertical
   for (let i = 0; i < l; i++) {
     coords.push(id - dragSrc.eTarget * 10);
     id += 10;
   }
 }

 if (!isValid(coords)) return;
 if (isOverlap(coords)) return;
 createPlayerShip(coords);

 if (dragSrc.dropped) {
   model.removeChild(currentDShip);
   resetDragSrc();
 } else {
   resetDragSrc();
 }

 // check if all model ships are dropped
 const isEmptyModel = checkIfEmpty(model);
 if (isEmptyModel) {
   const container = document.querySelector(".wrapper");
   //  check mode
   if (currentMode === "single") {
    resetDragSrc();
    dragSrc.isHorizontal = true;
     showNews("click start to play!", 0);
     const startBtn = createBtn("start");
     model.append(startBtn);
     model.classList.add("bckg");

     startBtn.addEventListener("click", () => {
       const playerGrid = document.querySelector(".player-grid");
       playerGrid.removeEventListener("drop", dragDrop);
       playerGrid.removeEventListener("dragover", dragOver);
       showNews("gess and click!", 0);
       setupGameEnvironment();
       createPlayers();
       placeComputerShipsInHTML();

       const replayBtn = createBtn("replay");
       container.append(replayBtn);
       replayBtn.addEventListener("click", reOrder);
       playSinglePlayerGame("human");
     });
     return;
   }
   // if mode multi
   if (infoPlayer.currentPlayer === infoPlayer.player1) {
     showNews(`click next and pass the device to ${infoPlayer.player2.name}`, 0);
     const nextBtn = createBtn("next");
     model.append(nextBtn);
     model.classList.add("bckg");

     nextBtn.addEventListener("click", () => {
       const squares = container.querySelectorAll(".ship-part");
       for (let square of squares) {
         const id = square.id.slice(1);
         const list = [...square.classList];
         infoPlayer.player1.board.push({
           id: id,
           list: list,
         });
       }
       infoPlayer.currentPlayer = infoPlayer.player2;
       setUpHtml();
       showNews(`${infoPlayer.player2.name} setup your bord`, 0);
       const model = document.querySelector(".draggable-ships");
       const playerBoard = document.querySelector(".player-grid");
       const btns = document.querySelector(".btns");
       createModelShips(model);
       createBoard(playerBoard, "p");
       addEventsToModel(model);
       addEventsToBoard(playerBoard);
       addEventsToBtns(btns);
     });
   } else if (infoPlayer.currentPlayer === infoPlayer.player2) {
     showNews("click start to play!", 0);
     const startBtn = createBtn("start");
     model.append(startBtn);
     model.classList.add("bckg");

     startBtn.addEventListener("click", () => {
       const squares = container.querySelectorAll(".ship-part");
       for (let square of squares) {
         const id = square.id.slice(1);
         const list = [...square.classList];
         infoPlayer.player2.board.push({
           id: id,
           list: list,
         });
       }
       setupMultiPlayEnvironment();
       playMultiPlayerGame(player1);
     });
   } // end else
 } //end if empty
} // end function

// rotate
export function rotate() {
 const model = document.querySelector(".draggable-ships");
 const isEmptyModel = checkIfEmpty(model);
 if (isEmptyModel) return;
 const shipContainers = model.querySelectorAll(".d-ship");
 if (dragSrc.isHorizontal) {
   shipContainers.forEach((container) => {
     container.classList.add("vertical");
   });
   dragSrc.isHorizontal = false;
 } else {
   shipContainers.forEach((container) => {
     container.classList.remove("vertical");
   });
   dragSrc.isHorizontal = true;
 }
}

// reorder, restart, replay
export function reOrder() {
 resetDragSrc();
 dragSrc.isHorizontal = true;
 if (currentMode === "single") {
   setupSinglePlayerGame();
 } else {
   setupMultiPlayerGame();
 }
}

// when click on play single
export function setupSinglePlayerGame() {
 setUpHtml();
 const model = document.querySelector(".draggable-ships");
 const playerBoard = document.querySelector(".player-grid");
 const btns = document.querySelector(".btns");
 createModelShips(model);
 createBoard(playerBoard, "p");
 addEventsToModel(model);
 addEventsToBoard(playerBoard);
 addEventsToBtns(btns);
}

// when click on play multi
export function setupMultiPlayerGame() {
 createIdentificationModel();
 const firstInput = document.getElementById("f-player");
 const secondInput = document.getElementById("s-player");
 const submit = document.getElementById("submit");
 submit.addEventListener("click", () => {
   infoPlayer.player1.name = firstInput.value || "player1";
   infoPlayer.player2.name = secondInput.value || "player2";
   infoPlayer.currentPlayer = infoPlayer.player1;

   setUpHtml();
   showNews(`${infoPlayer.player1.name} setup your bord`, 0);
   const model = document.querySelector(".draggable-ships");
   const playerBoard = document.querySelector(".player-grid");
   const btns = document.querySelector(".btns");
   createModelShips(model);
   createBoard(playerBoard, "p");
   addEventsToModel(model);
   addEventsToBoard(playerBoard);
   addEventsToBtns(btns);
 });
}
