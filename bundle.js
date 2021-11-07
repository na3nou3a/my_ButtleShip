/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragSrc": () => (/* binding */ dragSrc),
/* harmony export */   "human": () => (/* binding */ human),
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "infoPlayer": () => (/* binding */ infoPlayer),
/* harmony export */   "player1": () => (/* binding */ player1),
/* harmony export */   "player2": () => (/* binding */ player2),
/* harmony export */   "currentPlayer": () => (/* binding */ currentPlayer),
/* harmony export */   "enemy": () => (/* binding */ enemy),
/* harmony export */   "createPlayers": () => (/* binding */ createPlayers),
/* harmony export */   "playSinglePlayerGame": () => (/* binding */ playSinglePlayerGame),
/* harmony export */   "createMultiPlayers": () => (/* binding */ createMultiPlayers),
/* harmony export */   "resetInfoPlayer": () => (/* binding */ resetInfoPlayer),
/* harmony export */   "playMultiPlayerGame": () => (/* binding */ playMultiPlayerGame),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _utils_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createAndEditHtml.js */ "./src/utils/createAndEditHtml.js");
/* harmony import */ var _utils_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/events.js */ "./src/utils/events.js");
/* harmony import */ var _utils_constructors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constructors.js */ "./src/utils/constructors.js");
/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/functions.js */ "./src/utils/functions.js");
/* ==================== IMPORT ==================== */




/* ==================== GAME ELEMENTS ==================== */
// singleplay

var dragSrc = {
  isHorizontal: true
};
var human;
var computer; // multiplay

var infoPlayer = {
  player1: {
    name: "",
    board: []
  },
  player2: {
    name: "",
    board: []
  },
  currentPlayer: null
};
var player1;
var player2;
var currentPlayer;
var enemy;
/* ==================== SINGLE PLAYER GAME ==================== */

function createPlayers() {
  // name, board, enemyBoard
  human = new _utils_constructors_js__WEBPACK_IMPORTED_MODULE_2__.Player("human", ".player-grid", ".computer-grid");
  computer = new _utils_constructors_js__WEBPACK_IMPORTED_MODULE_2__.Player("computer", ".computer-grid", ".player-grid");
}
function playSinglePlayerGame(whoPlay) {
  if (whoPlay === "human") {
    var remainingSquares = computer.remainingSquares();
    remainingSquares.forEach(function (square) {
      return square.addEventListener("click", _utils_functions_js__WEBPACK_IMPORTED_MODULE_3__.prepare);
    });
  } else if (whoPlay === "computer") {
    var id = (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__.pickRandomId)();
    var div = document.getElementById(id);
    (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_3__.play)(div, "computer");
  }
}
/* ==================== MULTI PLAYER GAME ==================== */

function createMultiPlayers(grid1, grid2) {
  var name1 = infoPlayer.player1.name;
  var name2 = infoPlayer.player2.name;
  player1 = new _utils_constructors_js__WEBPACK_IMPORTED_MODULE_2__.Player(name1, grid1, grid2);
  player2 = new _utils_constructors_js__WEBPACK_IMPORTED_MODULE_2__.Player(name2, grid2, grid1);
}
function resetInfoPlayer() {
  infoPlayer = {
    player1: {
      name: "",
      board: []
    },
    player2: {
      name: "",
      board: []
    },
    currentPlayer: null
  };
}
function playMultiPlayerGame(whoPlay) {
  if (whoPlay === player1) {
    currentPlayer = player1;
    enemy = player2;
  } else {
    currentPlayer = player2;
    enemy = player1;
  }

  var whoPlaySquares = currentPlayer.remainingSquares();
  var enemySquares = enemy.remainingSquares();
  enemy.board.classList.add("cursor");
  currentPlayer.board.classList.remove("cursor");
  whoPlaySquares.forEach(function (square) {
    return square.removeEventListener("click", _utils_functions_js__WEBPACK_IMPORTED_MODULE_3__.playMulti);
  });
  enemySquares.forEach(function (square) {
    return square.addEventListener("click", _utils_functions_js__WEBPACK_IMPORTED_MODULE_3__.playMulti);
  });
  (0,_utils_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_0__.showNews)("".concat(currentPlayer.playerName, " go!"));
}
/* ==================== INIt ==================== */

function init() {
  (0,_utils_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_0__.createModeBtns)();
  (0,_utils_events_js__WEBPACK_IMPORTED_MODULE_1__.addEventsToModeBtns)();
}
init();

/***/ }),

/***/ "./src/utils/constructors.js":
/*!***********************************!*\
  !*** ./src/utils/constructors.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ship constructor
function Ship(name, length) {
  this.shipName = name;
  this.length = length;

  this.shipParts = function () {
    var count = 0;
    var shipParts = [];

    for (var i = 0; i < length; i++) {
      shipParts.push("".concat(name).concat(count));
      count++;
    }

    return shipParts;
  }();

  this.hittenParts = 0;

  this.receivedAttack = function () {
    this.hittenParts++;
  };

  this.isSunk = function () {
    if (this.hittenParts >= length) return true;
    return false;
  };
} // player constructor

function Player(name, board, enemyBord) {
  var destroyer = new Ship("destroyer", 2);
  var submarine = new Ship("submarine", 3);
  var cruiser = new Ship("cruiser", 3);
  var buttleShip = new Ship("buttleShip", 4);
  var carrier = new Ship("carrier", 5);
  this.ships = [destroyer, submarine, cruiser, buttleShip, carrier];
  this.playerName = name;
  this.board = document.querySelector(board);
  this.enemyBord = document.querySelector(enemyBord);

  this.remainingSquares = function () {
    return _toConsumableArray(this.board.querySelectorAll(".square"));
  };

  this.check = function (id) {
    var div = document.getElementById(id);

    if (div.classList.contains("ship-part")) {
      return true;
    }

    return false;
  };
}

/***/ }),

/***/ "./src/utils/createAndEditHtml.js":
/*!****************************************!*\
  !*** ./src/utils/createAndEditHtml.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUpHtml": () => (/* binding */ setUpHtml),
/* harmony export */   "createModelShips": () => (/* binding */ createModelShips),
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "createBtn": () => (/* binding */ createBtn),
/* harmony export */   "createModeBtns": () => (/* binding */ createModeBtns),
/* harmony export */   "setupGameEnvironment": () => (/* binding */ setupGameEnvironment),
/* harmony export */   "createPlayerShip": () => (/* binding */ createPlayerShip),
/* harmony export */   "placeComputerShipsInHTML": () => (/* binding */ placeComputerShipsInHTML),
/* harmony export */   "showNews": () => (/* binding */ showNews),
/* harmony export */   "createIdentificationModel": () => (/* binding */ createIdentificationModel),
/* harmony export */   "setupMultiPlayEnvironment": () => (/* binding */ setupMultiPlayEnvironment),
/* harmony export */   "showInfo": () => (/* binding */ showInfo)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ "./src/app.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/utils/functions.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function setUpHtml() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "<p class=\"news\">drag and drop ships into Your Board</p>\n\n<div class=\"game-environment\">\n\n<div class=\"player-grid grid-board\"></div>\n\n<div class=\"drag-container\">\n<div class=\"draggable-ships\"></div>\n<div class=\"btns\">\n<button class=\"btn rotate\">rotate</button>\n<button class=\"btn reorder\">reorder</button>\n</div>\n</div>\n\n</div>";
} // create draggable ships

function createModelShips(model) {
  model.innerHTML = "<div id=\"destroyer\" class=\"d-ship\" draggable=\"true\">\n <div id=\"destroyer0\"></div>\n <div id=\"destroyer1\"></div>\n</div>\n<div id=\"submarine\" class=\"d-ship\" draggable=\"true\">\n <div id=\"submarine0\"></div>\n <div id=\"submarine1\"></div>\n <div id=\"submarine2\"></div>\n</div>\n<div id=\"cruiser\" class=\"d-ship\" draggable=\"true\">\n <div id=\"cruiser0\"></div>\n <div id=\"cruiser1\"></div>\n <div id=\"cruiser2\"></div>\n</div>\n<div id=\"buttleShip\" class=\"d-ship\" draggable=\"true\">\n <div id=\"buttleShip0\"></div>\n <div id=\"buttleShip1\"></div>\n <div id=\"buttleShip2\"></div>\n <div id=\"buttleShip3\"></div>\n</div>\n<div id=\"carrier\" class=\"d-ship\" draggable=\"true\">\n <div id=\"carrier0\"></div>\n <div id=\"carrier1\"></div>\n <div id=\"carrier2\"></div>\n <div id=\"carrier3\"></div>\n <div id=\"carrier4\"></div>\n</div>";
} // create board

function createBoard(container, txt) {
  container.innerHTML = "";

  for (var i = 0; i < 100; i++) {
    var div = document.createElement("div");
    div.id = txt + i;
    div.classList.add("square");
    container.append(div);
  }
} // create btn

function createBtn(text) {
  var btn = document.createElement("button");
  btn.textContent = text;
  btn.classList = "btn ".concat(text);
  return btn;
} // create btns

function createModeBtns() {
  var container = document.querySelector(".wrapper");
  container.innerHTML = "<p class=\"news\">Choose Mode to Play!</p>\n <div class=\"btns-model\">\n <button class=\"btn single-player\">single player</button>\n<button class=\"btn multi-player\">multi player</button>\n</div>";
} // change html page content

function setupGameEnvironment() {
  var computerBoard = document.querySelector(".drag-container");
  computerBoard.innerHTML = "";
  computerBoard.classList.remove("drag-container");
  computerBoard.classList.add("computer-grid", "grid-board");
  createBoard(computerBoard, "c");
} // create player ship

function createPlayerShip(coords) {
  for (var i = 0; i < coords.length; i++) {
    var div = document.getElementById("p".concat(coords[i]));
    if (!div) return console.log("div is false");
    div.classList.add("ship-part", _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.whichShip);
    _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.dropped = true;
  }
} // place computer ships in board

function placeComputerShipsInHTML() {
  var _iterator = _createForOfIteratorHelper(_app_js__WEBPACK_IMPORTED_MODULE_0__.computer.ships),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ship = _step.value;
      var coords = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.generateValidCoords)(ship.length);

      var _iterator2 = _createForOfIteratorHelper(coords),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var coord = _step2.value;
          var div = document.getElementById("c".concat(coord));
          div.classList.add("ship-part", ship.shipName);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // show info about game

function showNews(txt, interval) {
  var news = document.querySelector(".news");

  if (interval === 1) {
    return setTimeout(function () {
      return news.textContent = txt;
    }, 500);
  }

  return setTimeout(function () {
    return news.textContent = txt;
  }, 100);
}
/* ==================== MULTI PLAYER Envi ==================== */
// identification

function createIdentificationModel() {
  var container = document.querySelector(".wrapper");
  container.innerHTML = "<p class=\"news\">enter your names please!</p>\n  <div class=\"player-info\">   \n  <input id='f-player' type=\"text\" placeholder=\"player1\">\n  <input id='s-player' type=\"text\" placeholder=\"player2\">\n  <button id='submit' class=\"btn\">start</button>\n  </div>";
} // envi

function setupMultiPlayEnvironment() {
  var name1 = _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player1.name;
  var name2 = _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player2.name;
  var container = document.querySelector(".wrapper");
  container.innerHTML = "<p class=\"news\"></p>\n  <div class=\"players-news\">\n  <p class=\"p1\">".concat(name1, " board</p>\n  <p class=\"p2\">").concat(name2, " board</p>\n </div>\n  <div class=\"game-environment\">\n  <div class=\"player1 player-grid grid-board\"></div>\n  <div class=\"player2 player-grid grid-board\"></div>\n  </div>");
  var board1 = document.querySelector(".player1");
  var board2 = document.querySelector(".player2");
  createBoard(board1, "pOne");
  createBoard(board2, "pTwo");
  var replay = createBtn("replay");
  container.append(replay);
  replay.addEventListener('click', _app_js__WEBPACK_IMPORTED_MODULE_0__.init);

  var _iterator3 = _createForOfIteratorHelper(_app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player1.board),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var obj = _step3.value;
      var div = document.getElementById("pOne".concat(obj.id));
      div.classList.add(obj.list[1], obj.list[2]);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var _iterator4 = _createForOfIteratorHelper(_app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player2.board),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _obj = _step4.value;

      var _div = document.getElementById("pTwo".concat(_obj.id));

      _div.classList.add(_obj.list[1], _obj.list[2]);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.createMultiPlayers)(".player1", ".player2");
  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.resetInfoPlayer)();
}
function showInfo(txt, interval) {
  var pClass;

  if (_app_js__WEBPACK_IMPORTED_MODULE_0__.currentPlayer === _app_js__WEBPACK_IMPORTED_MODULE_0__.player1) {
    pClass = ".p2";
  } else {
    pClass = ".p1";
  }

  var news = document.querySelector(pClass);

  if (interval === 1) {
    return setTimeout(function () {
      return news.textContent = txt;
    }, 500);
  }

  return setTimeout(function () {
    return news.textContent = txt;
  }, 100);
}

/***/ }),

/***/ "./src/utils/events.js":
/*!*****************************!*\
  !*** ./src/utils/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentMode": () => (/* binding */ currentMode),
/* harmony export */   "addEventsToModeBtns": () => (/* binding */ addEventsToModeBtns),
/* harmony export */   "addEventsToModel": () => (/* binding */ addEventsToModel),
/* harmony export */   "addEventsToBoard": () => (/* binding */ addEventsToBoard),
/* harmony export */   "addEventsToBtns": () => (/* binding */ addEventsToBtns),
/* harmony export */   "getTarget": () => (/* binding */ getTarget),
/* harmony export */   "dragStart": () => (/* binding */ dragStart),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "dragLeave": () => (/* binding */ dragLeave),
/* harmony export */   "dragDrop": () => (/* binding */ dragDrop),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "reOrder": () => (/* binding */ reOrder),
/* harmony export */   "setupSinglePlayerGame": () => (/* binding */ setupSinglePlayerGame),
/* harmony export */   "setupMultiPlayerGame": () => (/* binding */ setupMultiPlayerGame)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ "./src/app.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/utils/functions.js");
/* harmony import */ var _createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAndEditHtml.js */ "./src/utils/createAndEditHtml.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var currentMode; // add events to single and multi play btns

function addEventsToModeBtns() {
  var singlePlayerBtn = document.querySelector('.single-player');
  var multiPlayerBtn = document.querySelector('.multi-player');
  singlePlayerBtn.addEventListener('click', function () {
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetDragSrc)();
    _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal = true;
    currentMode = 'single';
    setupSinglePlayerGame();
  });
  multiPlayerBtn.addEventListener('click', function () {
    currentMode = 'multi';
    setupMultiPlayerGame();
  });
} // add events to draggable ships

function addEventsToModel(model) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetDragSrc)();
  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal = true;
  var dShips = model.querySelectorAll(".d-ship");
  dShips.forEach(function (ship) {
    ship.addEventListener("mousedown", getTarget);
  });
  dShips.forEach(function (ship) {
    ship.addEventListener("dragstart", dragStart, false);
    ship.addEventListener("dragleave", dragLeave, false);
  });
} // add events to palyer board

function addEventsToBoard(board) {
  board.addEventListener("drop", dragDrop, false);
  board.addEventListener("dragover", dragOver, false);
} // add events to btns

function addEventsToBtns(btns) {
  var rotateBtn = btns.querySelector(".rotate");
  var reorderBtn = btns.querySelector(".reorder");
  rotateBtn.addEventListener("click", rotate);
  reorderBtn.addEventListener("click", reOrder);
}
/* ==================== EVENTS CB FUNCTIONS ==================== */
// get target

function getTarget(e) {
  var target = e.target;
  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.eTarget = parseInt(target.id.slice(-1));
} // drag start

function dragStart(e) {
  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.whichShip = this.id; // ex: destroyer

  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.length = this.childElementCount; // 2

  e.dataTransfer.effectAllowed = "move";
} // drag over

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
} // drag end

function dragLeave(e) {
  e.stopPropagation();
} // drop

function dragDrop(e) {
  e.preventDefault();
  var model = document.querySelector(".draggable-ships");
  var currentDShip = document.getElementById(_app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.whichShip);
  var coords = [];
  var target = e.target; // div in my board

  var id = parseInt(target.id.slice(1)); // p99 => 99

  var l = _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.length;

  if (_app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal) {
    // if horizontal
    for (var i = 0; i < l; i++) {
      coords.push(id - _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.eTarget);
      id++;
    }
  } else {
    // if vertical
    for (var _i = 0; _i < l; _i++) {
      coords.push(id - _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.eTarget * 10);
      id += 10;
    }
  }

  if (!(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.isValid)(coords)) return;
  if ((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.isOverlap)(coords)) return;
  (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createPlayerShip)(coords);

  if (_app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.dropped) {
    model.removeChild(currentDShip);
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetDragSrc)();
  } else {
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetDragSrc)();
  } // check if all model ships are dropped


  var isEmptyModel = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkIfEmpty)(model);

  if (isEmptyModel) {
    var container = document.querySelector(".wrapper"); //  check mode

    if (currentMode === "single") {
      (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetDragSrc)();
      _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal = true;
      (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("click start to play!", 0);
      var startBtn = (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("start");
      model.append(startBtn);
      model.classList.add("bckg");
      startBtn.addEventListener("click", function () {
        var playerGrid = document.querySelector(".player-grid");
        playerGrid.removeEventListener("drop", dragDrop);
        playerGrid.removeEventListener("dragover", dragOver);
        (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("gess and click!", 0);
        (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.setupGameEnvironment)();
        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.createPlayers)();
        (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.placeComputerShipsInHTML)();
        var replayBtn = (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("replay");
        container.append(replayBtn);
        replayBtn.addEventListener("click", reOrder);
        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.playSinglePlayerGame)("human");
      });
      return;
    } // if mode multi


    if (_app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.currentPlayer === _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player1) {
      (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("click next and pass the device to ".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player2.name), 0);
      var nextBtn = (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("next");
      model.append(nextBtn);
      model.classList.add("bckg");
      nextBtn.addEventListener("click", function () {
        var squares = container.querySelectorAll(".ship-part");

        var _iterator = _createForOfIteratorHelper(squares),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var square = _step.value;

            var _id = square.id.slice(1);

            var list = _toConsumableArray(square.classList);

            _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player1.board.push({
              id: _id,
              list: list
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.currentPlayer = _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player2;
        (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.setUpHtml)();
        (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player2.name, " setup your bord"), 0);
        var model = document.querySelector(".draggable-ships");
        var playerBoard = document.querySelector(".player-grid");
        var btns = document.querySelector(".btns");
        (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createModelShips)(model);
        (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createBoard)(playerBoard, "p");
        addEventsToModel(model);
        addEventsToBoard(playerBoard);
        addEventsToBtns(btns);
      });
    } else if (_app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.currentPlayer === _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player2) {
      (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("click start to play!", 0);

      var _startBtn = (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("start");

      model.append(_startBtn);
      model.classList.add("bckg");

      _startBtn.addEventListener("click", function () {
        var squares = container.querySelectorAll(".ship-part");

        var _iterator2 = _createForOfIteratorHelper(squares),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var square = _step2.value;

            var _id2 = square.id.slice(1);

            var list = _toConsumableArray(square.classList);

            _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player2.board.push({
              id: _id2,
              list: list
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.setupMultiPlayEnvironment)();
        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.playMultiPlayerGame)(_app_js__WEBPACK_IMPORTED_MODULE_0__.player1);
      });
    } // end else

  } //end if empty

} // end function
// rotate

function rotate() {
  var model = document.querySelector(".draggable-ships");
  var isEmptyModel = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkIfEmpty)(model);
  if (isEmptyModel) return;
  var shipContainers = model.querySelectorAll(".d-ship");

  if (_app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal) {
    shipContainers.forEach(function (container) {
      container.classList.add("vertical");
    });
    _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal = false;
  } else {
    shipContainers.forEach(function (container) {
      container.classList.remove("vertical");
    });
    _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal = true;
  }
} // reorder, restart, replay

function reOrder() {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetDragSrc)();
  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal = true;

  if (currentMode === "single") {
    setupSinglePlayerGame();
  } else {
    setupMultiPlayerGame();
  }
} // when click on play single

function setupSinglePlayerGame() {
  (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.setUpHtml)();
  var model = document.querySelector(".draggable-ships");
  var playerBoard = document.querySelector(".player-grid");
  var btns = document.querySelector(".btns");
  (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createModelShips)(model);
  (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createBoard)(playerBoard, "p");
  addEventsToModel(model);
  addEventsToBoard(playerBoard);
  addEventsToBtns(btns);
} // when click on play multi

function setupMultiPlayerGame() {
  (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createIdentificationModel)();
  var firstInput = document.getElementById("f-player");
  var secondInput = document.getElementById("s-player");
  var submit = document.getElementById("submit");
  submit.addEventListener("click", function () {
    _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player1.name = firstInput.value || "player1";
    _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player2.name = secondInput.value || "player2";
    _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.currentPlayer = _app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player1;
    (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.setUpHtml)();
    (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.infoPlayer.player1.name, " setup your bord"), 0);
    var model = document.querySelector(".draggable-ships");
    var playerBoard = document.querySelector(".player-grid");
    var btns = document.querySelector(".btns");
    (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createModelShips)(model);
    (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.createBoard)(playerBoard, "p");
    addEventsToModel(model);
    addEventsToBoard(playerBoard);
    addEventsToBtns(btns);
  });
}

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComputerShips": () => (/* binding */ createComputerShips),
/* harmony export */   "generateValidCoords": () => (/* binding */ generateValidCoords),
/* harmony export */   "isValid": () => (/* binding */ isValid),
/* harmony export */   "isOverlap": () => (/* binding */ isOverlap),
/* harmony export */   "checkIfEmpty": () => (/* binding */ checkIfEmpty),
/* harmony export */   "isSafe": () => (/* binding */ isSafe),
/* harmony export */   "getRandomDirection": () => (/* binding */ getRandomDirection),
/* harmony export */   "getRandomCoords": () => (/* binding */ getRandomCoords),
/* harmony export */   "pickRandomId": () => (/* binding */ pickRandomId),
/* harmony export */   "prepare": () => (/* binding */ prepare),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "humanGo": () => (/* binding */ humanGo),
/* harmony export */   "computerGo": () => (/* binding */ computerGo),
/* harmony export */   "playMulti": () => (/* binding */ playMulti),
/* harmony export */   "resetDragSrc": () => (/* binding */ resetDragSrc)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ "./src/app.js");
/* harmony import */ var _constructors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructors.js */ "./src/utils/constructors.js");
/* harmony import */ var _createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAndEditHtml.js */ "./src/utils/createAndEditHtml.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ "./src/utils/events.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




 // create computer ships

function createComputerShips() {
  var destroyer = new _constructors_js__WEBPACK_IMPORTED_MODULE_1__.Ship("destroyer", 2);
  var submarine = new _constructors_js__WEBPACK_IMPORTED_MODULE_1__.Ship("submarine", 3);
  var cruiser = new _constructors_js__WEBPACK_IMPORTED_MODULE_1__.Ship("cruiser", 3);
  var buttleShip = new _constructors_js__WEBPACK_IMPORTED_MODULE_1__.Ship("buttleShip", 4);
  var carrier = new _constructors_js__WEBPACK_IMPORTED_MODULE_1__.Ship("carrier", 5);
  return [destroyer, submarine, cruiser, buttleShip, carrier];
} // geneate computer ships

function generateValidCoords(len) {
  var dir = getRandomDirection();
  var num; // horizontal

  if (dir && len === 2) num = 99;
  if (dir && len === 3) num = 98;
  if (dir && len === 4) num = 97;
  if (dir && len === 5) num = 96; // vertical

  if (!dir && len === 2) num = 89;
  if (!dir && len === 3) num = 79;
  if (!dir && len === 4) num = 69;
  if (!dir && len === 5) num = 59;
  var coords = getRandomCoords(dir, num, len);
  var safe = isSafe(coords, dir);
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

function isValid(coords) {
  for (var i = 0; i < coords.length; i++) {
    if (coords[i] < 0 || coords[i] > 99) {
      return false;
    }
  }

  if (!_app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.isHorizontal) return true; // if horizontal

  var borders = [0, 9, 10, 19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70, 79, 80, 89, 90, 99];
  var coordsBorders = [];

  for (var _i = 0; _i < coords.length; _i++) {
    if (borders.indexOf(coords[_i]) >= 0) {
      coordsBorders.push(coords[_i]);
    }

    if (coordsBorders.length > 1) return false;
  }

  return true;
} // check if it overlap another ship befor droping it

function isOverlap(coords) {
  var arr = [];

  for (var i = 0; i < coords.length; i++) {
    var div = document.getElementById("p".concat(coords[i]));
    if (!div) return false;

    if (div.classList.contains("ship-part")) {
      arr.push("yes");
      break;
    }
  }

  if (arr.length > 0) return true;
  return false;
} // check if all ships are dropped

function checkIfEmpty(model) {
  var count = model.childElementCount;
  if (count < 1) return true;
  return false;
} // check computer coords

function isSafe(coords) {
  var borders = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
  var bordersCount = [];

  var _iterator = _createForOfIteratorHelper(coords),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var coord = _step.value;
      var div = document.getElementById("c".concat(coord));
      if (!div) return false;
      if (div.classList.contains("ship-part")) return false;
      var divIdNum = parseInt(div.id.slice(1));

      if (borders.indexOf(divIdNum) >= 0) {
        bordersCount.push(divIdNum);
      }

      if (bordersCount.length > 1) return false;
      var sible1 = document.getElementById("c".concat(coord - 1));
      var sible2 = document.getElementById("c".concat(coord + 10));
      var sible3 = document.getElementById("c".concat(coord - 10));
      var sible4 = document.getElementById("c".concat(coord + 1));

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
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}
/*=========================RANDOM FUNCTIONS ========================*/
// random direction

function getRandomDirection() {
  var dirs = [true, false];
  var r = Math.floor(Math.random() * 2);
  return dirs[r];
} // generate random coords for computer

function getRandomCoords(dir, num, len) {
  var n = Math.floor(Math.random() * num);
  var coords = [];

  if (dir) {
    for (var i = 0; i < len; i++) {
      coords.push(n);
      n++;
    }
  } else {
    for (var _i2 = 0; _i2 < len; _i2++) {
      coords.push(n);
      n += 10;
    }
  }

  return coords;
} // pick

function pickRandomId() {
  var remain = _app_js__WEBPACK_IMPORTED_MODULE_0__.human.remainingSquares();
  var l = remain.length;
  var r = Math.floor(Math.random() * l);
  var randomDiv = remain[r];
  var id = randomDiv.id;
  return id;
}
/* ================================ PLAY ========================*/

function prepare(e) {
  var div = e.target;
  play(div, "human");
}
function play(div, who) {
  var hit;

  if (who === "human") {
    hit = humanGo(div);
  } else {
    hit = computerGo(div);
  }

  if (hit) {
    var winner = checkIfGameOver(who);
    if (winner) return gameOver(winner);
    return (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.playSinglePlayerGame)(who);
  } else {
    return (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.playSinglePlayerGame)(swapePlayer(who));
  }
}

function swapePlayer(player) {
  if (player === "human") return "computer";
  return "human";
} // human play


function humanGo(div) {
  var isHit = _app_js__WEBPACK_IMPORTED_MODULE_0__.human.check(div.id);

  if (isHit) {
    var divClass = _toConsumableArray(div.classList);

    var shipNames = ["destroyer", "submarine", "cruiser", "buttleShip", "carrier"];
    var index = shipNames.indexOf(divClass[2]);
    _app_js__WEBPACK_IMPORTED_MODULE_0__.computer.ships[index].receivedAttack();
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
} // computer play

function computerGo(div) {
  var isHit = _app_js__WEBPACK_IMPORTED_MODULE_0__.computer.check(div.id);

  if (isHit) {
    var divClass = _toConsumableArray(div.classList);

    var shipNames = ["destroyer", "submarine", "cruiser", "buttleShip", "carrier"];
    var index = shipNames.indexOf(divClass[2]);
    _app_js__WEBPACK_IMPORTED_MODULE_0__.human.ships[index].receivedAttack();
    div.classList.add("win");
    div.innerHTML = "&#9760;";
    var isSunk = _app_js__WEBPACK_IMPORTED_MODULE_0__.human.ships[index].isSunk();

    if (isSunk) {
      (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("your ".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.human.ships[index].shipName, " is sunk!"), 1);
    } else {
      (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("your ".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.human.ships[index].shipName, " is hitten!"), 1);
    }

    div.classList.remove("square");
    return true;
  } else {
    div.classList.add("lose");
    div.innerHTML = "&#9737;";
    (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showNews)("they miss!", 0);
    div.classList.remove("square");
    return false;
  }
} // check if Game over

function checkIfGameOver(who) {
  var enemyLose = 0;

  if (_events_js__WEBPACK_IMPORTED_MODULE_3__.currentMode === "single") {
    if (who === 'human') {
      var _iterator2 = _createForOfIteratorHelper(_app_js__WEBPACK_IMPORTED_MODULE_0__.computer.ships),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ship = _step2.value;
          enemyLose += ship.hittenParts;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else if (who === 'computer') {
      var _iterator3 = _createForOfIteratorHelper(_app_js__WEBPACK_IMPORTED_MODULE_0__.human.ships),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _ship = _step3.value;
          enemyLose += _ship.hittenParts;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (enemyLose === 17) {
      return who;
    }

    return false;
  } // if mode multi


  var _iterator4 = _createForOfIteratorHelper(_app_js__WEBPACK_IMPORTED_MODULE_0__.enemy.ships),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _ship2 = _step4.value;
      enemyLose += _ship2.hittenParts;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (enemyLose === 17) {
    return _app_js__WEBPACK_IMPORTED_MODULE_0__.currentPlayer.playerName;
  }

  return false;
} // game over


function gameOver(winner) {
  if (_events_js__WEBPACK_IMPORTED_MODULE_3__.currentMode === "single") {
    var remainingSquares = _app_js__WEBPACK_IMPORTED_MODULE_0__.computer.remainingSquares();
    remainingSquares.forEach(function (div) {
      return div.removeEventListener("click", prepare);
    });
  } else {
    var remainingSquares1 = _app_js__WEBPACK_IMPORTED_MODULE_0__.player1.remainingSquares();
    remainingSquares1.forEach(function (div) {
      return div.removeEventListener("click", playMulti);
    });
    var remainingSquares2 = _app_js__WEBPACK_IMPORTED_MODULE_0__.player2.remainingSquares();
    remainingSquares2.forEach(function (div) {
      return div.removeEventListener("click", playMulti);
    });
  }

  var msg;
  var msgClass;
  var container = document.querySelector(".wrapper");
  var winnerModel = document.createElement("div");
  winnerModel.className = "winner-message";

  if (winner == "human") {
    msg = "congratulation! You won the game!";
    msgClass = "success";
  } else if (winner == "computer") {
    msg = "sorry you lose the game!";
    msgClass = "danger";
  } else {
    msg = "".concat(winner, " is won !");
    msgClass = "success";
  }

  winnerModel.innerHTML = "<div class='remove'>&times;</div>\n   <p class=\"".concat(msgClass, "\">").concat(msg, "</p>\n   <button id=\"restart\" class=\"btn replay\">restart</button>");
  setTimeout(function () {
    container.appendChild(winnerModel);
    var remove = winnerModel.querySelector(".remove");
    var restart = document.getElementById("restart");
    remove.addEventListener("click", function () {
      container.removeChild(winnerModel);
    });
    restart.addEventListener("click", _app_js__WEBPACK_IMPORTED_MODULE_0__.init);
  }, 800);
}
/* =================== play multi player ================*/


function playMulti(e) {
  var news = document.querySelector(".news");
  news.classList.toggle("class1");
  var div = e.target;
  var hit = playerGo(div);

  if (hit) {
    var winner = checkIfGameOver(_app_js__WEBPACK_IMPORTED_MODULE_0__.currentPlayer);
    if (winner) return gameOver(winner);
    return (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.playMultiPlayerGame)(_app_js__WEBPACK_IMPORTED_MODULE_0__.currentPlayer);
  } else {
    return (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.playMultiPlayerGame)(_app_js__WEBPACK_IMPORTED_MODULE_0__.enemy);
  }
}

function playerGo(div) {
  var isHit = _app_js__WEBPACK_IMPORTED_MODULE_0__.currentPlayer.check(div.id);

  if (isHit) {
    var divClass = _toConsumableArray(div.classList);

    var shipNames = ["destroyer", "submarine", "cruiser", "buttleShip", "carrier"];
    var index = shipNames.indexOf(divClass[2]);
    _app_js__WEBPACK_IMPORTED_MODULE_0__.enemy.ships[index].receivedAttack();
    div.classList.add("win");
    div.innerHTML = "&#9760;";
    div.removeEventListener("click", playMulti);
    var isSunk = _app_js__WEBPACK_IMPORTED_MODULE_0__.enemy.ships[index].isSunk();

    if (isSunk) {
      (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showInfo)("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.enemy.playerName, "'s ").concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.enemy.ships[index].shipName, " is sunk!"), 1);
    } else {
      (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showInfo)("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.enemy.playerName, "'s ").concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.enemy.ships[index].shipName, " is hitten!"), 1);
    }

    div.classList.remove("square");
    return true;
  } else {
    div.classList.add("lose");
    div.innerHTML = "&#9737;";
    (0,_createAndEditHtml_js__WEBPACK_IMPORTED_MODULE_2__.showInfo)("miss!", 0);
    div.removeEventListener("click", prepare);
    div.classList.remove("square");
    return false;
  }
}
/* =================== others ================*/
// reset dragSrc object


function resetDragSrc() {
  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.whichShip = "";
  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.length = 0;
  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.eTarget = null;
  _app_js__WEBPACK_IMPORTED_MODULE_0__.dragSrc.dropped = false;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFSO0FBR0Q7O0FBRURwQixJQUFBQSxHQUFHLENBQUNZLFNBQUosQ0FBY0UsTUFBZCxDQUFxQixRQUFyQjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBMUJELE1BMEJPO0FBQ0xkLElBQUFBLEdBQUcsQ0FBQ1ksU0FBSixDQUFjQyxHQUFkLENBQWtCLE1BQWxCO0FBQ0FiLElBQUFBLEdBQUcsQ0FBQzBDLFNBQUosR0FBZ0IsU0FBaEI7QUFDQWlDLElBQUFBLCtEQUFRLENBQUMsT0FBRCxFQUFVLENBQVYsQ0FBUjtBQUNBM0UsSUFBQUEsR0FBRyxDQUFDZSxtQkFBSixDQUF3QixPQUF4QixFQUFpQ3BDLE9BQWpDO0FBQ0FxQixJQUFBQSxHQUFHLENBQUNZLFNBQUosQ0FBY0UsTUFBZCxDQUFxQixRQUFyQjtBQUNBLFdBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFFRDtBQUNBOzs7QUFDTyxTQUFTa0UsWUFBVCxHQUF3QjtBQUM3Qm5HLEVBQUFBLHNEQUFBLEdBQW9CLEVBQXBCO0FBQ0FBLEVBQUFBLG1EQUFBLEdBQWlCLENBQWpCO0FBQ0FBLEVBQUFBLG9EQUFBLEdBQWtCLElBQWxCO0FBQ0FBLEVBQUFBLG9EQUFBLEdBQWtCLEtBQWxCO0FBQ0Q7Ozs7OztVQ3BhRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215X2J1dHRsZXNoaXAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL215X2J1dHRsZXNoaXAvLi9zcmMvdXRpbHMvY29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL215X2J1dHRsZXNoaXAvLi9zcmMvdXRpbHMvY3JlYXRlQW5kRWRpdEh0bWwuanMiLCJ3ZWJwYWNrOi8vbXlfYnV0dGxlc2hpcC8uL3NyYy91dGlscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vbXlfYnV0dGxlc2hpcC8uL3NyYy91dGlscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXlfYnV0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teV9idXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teV9idXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfYnV0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215X2J1dHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teV9idXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teV9idXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PSBJTVBPUlQgPT09PT09PT09PT09PT09PT09PT0gKi9cbmltcG9ydCB7IGNyZWF0ZU1vZGVCdG5zLCBzaG93TmV3cyB9IGZyb20gXCIuL3V0aWxzL2NyZWF0ZUFuZEVkaXRIdG1sLmpzXCI7XG5pbXBvcnQgeyBhZGRFdmVudHNUb01vZGVCdG5zIH0gZnJvbSBcIi4vdXRpbHMvZXZlbnRzLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi91dGlscy9jb25zdHJ1Y3RvcnMuanNcIjtcbmltcG9ydCB7IHBpY2tSYW5kb21JZCwgcGxheSwgcHJlcGFyZSwgcGxheU11bHRpIH0gZnJvbSBcIi4vdXRpbHMvZnVuY3Rpb25zLmpzXCI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09IEdBTUUgRUxFTUVOVFMgPT09PT09PT09PT09PT09PT09PT0gKi9cbi8vIHNpbmdsZXBsYXlcbmV4cG9ydCBjb25zdCBkcmFnU3JjID0geyBpc0hvcml6b250YWw6IHRydWUgfTtcbmV4cG9ydCBsZXQgaHVtYW47XG5leHBvcnQgbGV0IGNvbXB1dGVyO1xuLy8gbXVsdGlwbGF5XG5leHBvcnQgbGV0IGluZm9QbGF5ZXIgPSB7XG4gIHBsYXllcjE6IHsgbmFtZTogXCJcIiwgYm9hcmQ6IFtdIH0sXG4gIHBsYXllcjI6IHsgbmFtZTogXCJcIiwgYm9hcmQ6IFtdIH0sXG4gIGN1cnJlbnRQbGF5ZXI6IG51bGwsXG59O1xuZXhwb3J0IGxldCBwbGF5ZXIxO1xuZXhwb3J0IGxldCBwbGF5ZXIyO1xuZXhwb3J0IGxldCBjdXJyZW50UGxheWVyO1xuZXhwb3J0IGxldCBlbmVteTtcblxuLyogPT09PT09PT09PT09PT09PT09PT0gU0lOR0xFIFBMQVlFUiBHQU1FID09PT09PT09PT09PT09PT09PT09ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJzKCkge1xuICAvLyBuYW1lLCBib2FyZCwgZW5lbXlCb2FyZFxuICBodW1hbiA9IG5ldyBQbGF5ZXIoXCJodW1hblwiLCBcIi5wbGF5ZXItZ3JpZFwiLCBcIi5jb21wdXRlci1ncmlkXCIpO1xuICBjb21wdXRlciA9IG5ldyBQbGF5ZXIoXCJjb21wdXRlclwiLCBcIi5jb21wdXRlci1ncmlkXCIsIFwiLnBsYXllci1ncmlkXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheVNpbmdsZVBsYXllckdhbWUod2hvUGxheSkge1xuICBpZiAod2hvUGxheSA9PT0gXCJodW1hblwiKSB7XG4gICAgY29uc3QgcmVtYWluaW5nU3F1YXJlcyA9IGNvbXB1dGVyLnJlbWFpbmluZ1NxdWFyZXMoKTtcbiAgICByZW1haW5pbmdTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT5cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJlcGFyZSlcbiAgICApO1xuICB9IGVsc2UgaWYgKHdob1BsYXkgPT09IFwiY29tcHV0ZXJcIikge1xuICAgIGNvbnN0IGlkID0gcGlja1JhbmRvbUlkKCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHBsYXkoZGl2LCBcImNvbXB1dGVyXCIpO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09IE1VTFRJIFBMQVlFUiBHQU1FID09PT09PT09PT09PT09PT09PT09ICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVsdGlQbGF5ZXJzKGdyaWQxLCBncmlkMikge1xuICBjb25zdCBuYW1lMSA9IGluZm9QbGF5ZXIucGxheWVyMS5uYW1lO1xuICBjb25zdCBuYW1lMiA9IGluZm9QbGF5ZXIucGxheWVyMi5uYW1lO1xuICBwbGF5ZXIxID0gbmV3IFBsYXllcihuYW1lMSwgZ3JpZDEsIGdyaWQyKTtcbiAgcGxheWVyMiA9IG5ldyBQbGF5ZXIobmFtZTIsIGdyaWQyLCBncmlkMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEluZm9QbGF5ZXIoKSB7XG4gIGluZm9QbGF5ZXIgPSB7XG4gICAgcGxheWVyMTogeyBuYW1lOiBcIlwiLCBib2FyZDogW10gfSxcbiAgICBwbGF5ZXIyOiB7IG5hbWU6IFwiXCIsIGJvYXJkOiBbXSB9LFxuICAgIGN1cnJlbnRQbGF5ZXI6IG51bGwsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5TXVsdGlQbGF5ZXJHYW1lKHdob1BsYXkpIHtcbiAgaWYgKHdob1BsYXkgPT09IHBsYXllcjEpIHtcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcbiAgICBlbmVteSA9IHBsYXllcjI7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjI7XG4gICAgZW5lbXkgPSBwbGF5ZXIxO1xuICB9XG4gIGNvbnN0IHdob1BsYXlTcXVhcmVzID0gY3VycmVudFBsYXllci5yZW1haW5pbmdTcXVhcmVzKCk7XG4gIGNvbnN0IGVuZW15U3F1YXJlcyA9IGVuZW15LnJlbWFpbmluZ1NxdWFyZXMoKTtcbiAgZW5lbXkuYm9hcmQuY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgY3VycmVudFBsYXllci5ib2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuXG4gIHdob1BsYXlTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT5cbiAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlNdWx0aSlcbiAgKTtcbiAgZW5lbXlTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5TXVsdGkpKTtcbiAgc2hvd05ld3MoYCR7Y3VycmVudFBsYXllci5wbGF5ZXJOYW1lfSBnbyFgKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT0gSU5JdCA9PT09PT09PT09PT09PT09PT09PSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNyZWF0ZU1vZGVCdG5zKCk7XG4gIGFkZEV2ZW50c1RvTW9kZUJ0bnMoKTtcbn1cblxuaW5pdCgpO1xuIiwiLy8gc2hpcCBjb25zdHJ1Y3RvclxuZXhwb3J0IGZ1bmN0aW9uIFNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gIHRoaXMuc2hpcE5hbWUgPSBuYW1lO1xuICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgdGhpcy5zaGlwUGFydHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3Qgc2hpcFBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2hpcFBhcnRzLnB1c2goYCR7bmFtZX0ke2NvdW50fWApO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBQYXJ0cztcbiAgfSkoKTtcblxuICB0aGlzLmhpdHRlblBhcnRzID0gMDtcbiAgdGhpcy5yZWNlaXZlZEF0dGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmhpdHRlblBhcnRzKys7XG4gIH07XG5cbiAgdGhpcy5pc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaGl0dGVuUGFydHMgPj0gbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG5cbi8vIHBsYXllciBjb25zdHJ1Y3RvclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcihuYW1lLCBib2FyZCwgZW5lbXlCb3JkKSB7XG4gIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKFwiZGVzdHJveWVyXCIsIDIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKTtcbiAgY29uc3QgY3J1aXNlciA9IG5ldyBTaGlwKFwiY3J1aXNlclwiLCAzKTtcbiAgY29uc3QgYnV0dGxlU2hpcCA9IG5ldyBTaGlwKFwiYnV0dGxlU2hpcFwiLCA0KTtcbiAgY29uc3QgY2FycmllciA9IG5ldyBTaGlwKFwiY2FycmllclwiLCA1KTtcblxuICB0aGlzLnNoaXBzID0gW2Rlc3Ryb3llciwgc3VibWFyaW5lLCBjcnVpc2VyLCBidXR0bGVTaGlwLCBjYXJyaWVyXTtcbiAgdGhpcy5wbGF5ZXJOYW1lID0gbmFtZTtcbiAgdGhpcy5ib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm9hcmQpO1xuICB0aGlzLmVuZW15Qm9yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW5lbXlCb3JkKTtcbiAgdGhpcy5yZW1haW5pbmdTcXVhcmVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbLi4udGhpcy5ib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZVwiKV07XG4gIH07XG5cbiAgdGhpcy5jaGVjayA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtcGFydFwiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIGRyYWdTcmMsXG4gIGNvbXB1dGVyLFxuICBpbmZvUGxheWVyLFxuICBjcmVhdGVNdWx0aVBsYXllcnMsXG4gIHJlc2V0SW5mb1BsYXllcixcbiAgY3VycmVudFBsYXllcixcbiAgcGxheWVyMSxcbiAgaW5pdFxufSBmcm9tIFwiLi4vYXBwLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVZhbGlkQ29vcmRzIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVcEh0bWwoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gIHdyYXBwZXIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwibmV3c1wiPmRyYWcgYW5kIGRyb3Agc2hpcHMgaW50byBZb3VyIEJvYXJkPC9wPlxuXG48ZGl2IGNsYXNzPVwiZ2FtZS1lbnZpcm9ubWVudFwiPlxuXG48ZGl2IGNsYXNzPVwicGxheWVyLWdyaWQgZ3JpZC1ib2FyZFwiPjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZHJhZy1jb250YWluZXJcIj5cbjxkaXYgY2xhc3M9XCJkcmFnZ2FibGUtc2hpcHNcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJidG5zXCI+XG48YnV0dG9uIGNsYXNzPVwiYnRuIHJvdGF0ZVwiPnJvdGF0ZTwvYnV0dG9uPlxuPGJ1dHRvbiBjbGFzcz1cImJ0biByZW9yZGVyXCI+cmVvcmRlcjwvYnV0dG9uPlxuPC9kaXY+XG48L2Rpdj5cblxuPC9kaXY+YDtcbn1cblxuLy8gY3JlYXRlIGRyYWdnYWJsZSBzaGlwc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsU2hpcHMobW9kZWwpIHtcbiAgbW9kZWwuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJkZXN0cm95ZXJcIiBjbGFzcz1cImQtc2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5cbiA8ZGl2IGlkPVwiZGVzdHJveWVyMFwiPjwvZGl2PlxuIDxkaXYgaWQ9XCJkZXN0cm95ZXIxXCI+PC9kaXY+XG48L2Rpdj5cbjxkaXYgaWQ9XCJzdWJtYXJpbmVcIiBjbGFzcz1cImQtc2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5cbiA8ZGl2IGlkPVwic3VibWFyaW5lMFwiPjwvZGl2PlxuIDxkaXYgaWQ9XCJzdWJtYXJpbmUxXCI+PC9kaXY+XG4gPGRpdiBpZD1cInN1Ym1hcmluZTJcIj48L2Rpdj5cbjwvZGl2PlxuPGRpdiBpZD1cImNydWlzZXJcIiBjbGFzcz1cImQtc2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5cbiA8ZGl2IGlkPVwiY3J1aXNlcjBcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiY3J1aXNlcjFcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiY3J1aXNlcjJcIj48L2Rpdj5cbjwvZGl2PlxuPGRpdiBpZD1cImJ1dHRsZVNoaXBcIiBjbGFzcz1cImQtc2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5cbiA8ZGl2IGlkPVwiYnV0dGxlU2hpcDBcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiYnV0dGxlU2hpcDFcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiYnV0dGxlU2hpcDJcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiYnV0dGxlU2hpcDNcIj48L2Rpdj5cbjwvZGl2PlxuPGRpdiBpZD1cImNhcnJpZXJcIiBjbGFzcz1cImQtc2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5cbiA8ZGl2IGlkPVwiY2FycmllcjBcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiY2FycmllcjFcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiY2FycmllcjJcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiY2FycmllcjNcIj48L2Rpdj5cbiA8ZGl2IGlkPVwiY2FycmllcjRcIj48L2Rpdj5cbjwvZGl2PmA7XG59XG5cbi8vIGNyZWF0ZSBib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGNvbnRhaW5lciwgdHh0KSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSB0eHQgKyBpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgfVxufVxuXG4vLyBjcmVhdGUgYnRuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnRuKHRleHQpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnRuLmNsYXNzTGlzdCA9IGBidG4gJHt0ZXh0fWA7XG4gIHJldHVybiBidG47XG59XG5cbi8vIGNyZWF0ZSBidG5zXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZUJ0bnMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cIm5ld3NcIj5DaG9vc2UgTW9kZSB0byBQbGF5ITwvcD5cbiA8ZGl2IGNsYXNzPVwiYnRucy1tb2RlbFwiPlxuIDxidXR0b24gY2xhc3M9XCJidG4gc2luZ2xlLXBsYXllclwiPnNpbmdsZSBwbGF5ZXI8L2J1dHRvbj5cbjxidXR0b24gY2xhc3M9XCJidG4gbXVsdGktcGxheWVyXCI+bXVsdGkgcGxheWVyPC9idXR0b24+XG48L2Rpdj5gO1xufVxuXG4vLyBjaGFuZ2UgaHRtbCBwYWdlIGNvbnRlbnRcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEdhbWVFbnZpcm9ubWVudCgpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZy1jb250YWluZXJcIik7XG4gIGNvbXB1dGVyQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1jb250YWluZXJcIik7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLWdyaWRcIiwgXCJncmlkLWJvYXJkXCIpO1xuICBjcmVhdGVCb2FyZChjb21wdXRlckJvYXJkLCBcImNcIik7XG59XG5cbi8vIGNyZWF0ZSBwbGF5ZXIgc2hpcFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllclNoaXAoY29vcmRzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2Nvb3Jkc1tpXX1gKTtcbiAgICBpZiAoIWRpdikgcmV0dXJuIGNvbnNvbGUubG9nKFwiZGl2IGlzIGZhbHNlXCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1wYXJ0XCIsIGRyYWdTcmMud2hpY2hTaGlwKTtcbiAgICBkcmFnU3JjLmRyb3BwZWQgPSB0cnVlO1xuICB9XG59XG5cbi8vIHBsYWNlIGNvbXB1dGVyIHNoaXBzIGluIGJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VDb21wdXRlclNoaXBzSW5IVE1MKCkge1xuICBmb3IgKGxldCBzaGlwIG9mIGNvbXB1dGVyLnNoaXBzKSB7XG4gICAgY29uc3QgY29vcmRzID0gZ2VuZXJhdGVWYWxpZENvb3JkcyhzaGlwLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7Y29vcmR9YCk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtcGFydFwiLCBzaGlwLnNoaXBOYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gc2hvdyBpbmZvIGFib3V0IGdhbWVcbmV4cG9ydCBmdW5jdGlvbiBzaG93TmV3cyh0eHQsIGludGVydmFsKSB7XG4gIGNvbnN0IG5ld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3NcIik7XG4gIGlmIChpbnRlcnZhbCA9PT0gMSkge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IChuZXdzLnRleHRDb250ZW50ID0gdHh0KSwgNTAwKTtcbiAgfVxuICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IChuZXdzLnRleHRDb250ZW50ID0gdHh0KSwgMTAwKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT0gTVVMVEkgUExBWUVSIEVudmkgPT09PT09PT09PT09PT09PT09PT0gKi9cbi8vIGlkZW50aWZpY2F0aW9uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSWRlbnRpZmljYXRpb25Nb2RlbCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwibmV3c1wiPmVudGVyIHlvdXIgbmFtZXMgcGxlYXNlITwvcD5cbiAgPGRpdiBjbGFzcz1cInBsYXllci1pbmZvXCI+ICAgXG4gIDxpbnB1dCBpZD0nZi1wbGF5ZXInIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJwbGF5ZXIxXCI+XG4gIDxpbnB1dCBpZD0ncy1wbGF5ZXInIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJwbGF5ZXIyXCI+XG4gIDxidXR0b24gaWQ9J3N1Ym1pdCcgY2xhc3M9XCJidG5cIj5zdGFydDwvYnV0dG9uPlxuICA8L2Rpdj5gO1xufVxuXG4vLyBlbnZpXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBNdWx0aVBsYXlFbnZpcm9ubWVudCgpIHtcbiAgY29uc3QgbmFtZTEgPSBpbmZvUGxheWVyLnBsYXllcjEubmFtZTtcbiAgY29uc3QgbmFtZTIgPSBpbmZvUGxheWVyLnBsYXllcjIubmFtZTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwibmV3c1wiPjwvcD5cbiAgPGRpdiBjbGFzcz1cInBsYXllcnMtbmV3c1wiPlxuICA8cCBjbGFzcz1cInAxXCI+JHtuYW1lMX0gYm9hcmQ8L3A+XG4gIDxwIGNsYXNzPVwicDJcIj4ke25hbWUyfSBib2FyZDwvcD5cbiA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImdhbWUtZW52aXJvbm1lbnRcIj5cbiAgPGRpdiBjbGFzcz1cInBsYXllcjEgcGxheWVyLWdyaWQgZ3JpZC1ib2FyZFwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGxheWVyMiBwbGF5ZXItZ3JpZCBncmlkLWJvYXJkXCI+PC9kaXY+XG4gIDwvZGl2PmA7XG5cbiAgY29uc3QgYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxXCIpO1xuICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjJcIik7XG4gIGNyZWF0ZUJvYXJkKGJvYXJkMSwgXCJwT25lXCIpO1xuICBjcmVhdGVCb2FyZChib2FyZDIsIFwicFR3b1wiKTtcblxuICBjb25zdCByZXBsYXkgPSBjcmVhdGVCdG4oXCJyZXBsYXlcIik7XG4gIGNvbnRhaW5lci5hcHBlbmQocmVwbGF5KTtcbiAgcmVwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5pdCk7XG5cbiAgZm9yIChsZXQgb2JqIG9mIGluZm9QbGF5ZXIucGxheWVyMS5ib2FyZCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwT25lJHtvYmouaWR9YCk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQob2JqLmxpc3RbMV0sIG9iai5saXN0WzJdKTtcbiAgfVxuXG4gIGZvciAobGV0IG9iaiBvZiBpbmZvUGxheWVyLnBsYXllcjIuYm9hcmQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcFR3byR7b2JqLmlkfWApO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKG9iai5saXN0WzFdLCBvYmoubGlzdFsyXSk7XG4gIH1cblxuICBjcmVhdGVNdWx0aVBsYXllcnMoXCIucGxheWVyMVwiLCBcIi5wbGF5ZXIyXCIpO1xuICByZXNldEluZm9QbGF5ZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbmZvKHR4dCwgaW50ZXJ2YWwpIHtcbiAgbGV0IHBDbGFzcztcbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICBwQ2xhc3MgPSBcIi5wMlwiO1xuICB9IGVsc2Uge1xuICAgIHBDbGFzcyA9IFwiLnAxXCI7XG4gIH1cblxuICBjb25zdCBuZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwQ2xhc3MpO1xuICBpZiAoaW50ZXJ2YWwgPT09IDEpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiAobmV3cy50ZXh0Q29udGVudCA9IHR4dCksIDUwMCk7XG4gIH1cbiAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiAobmV3cy50ZXh0Q29udGVudCA9IHR4dCksIDEwMCk7XG59XG4iLCJpbXBvcnQge1xuIGRyYWdTcmMsXG4gcGxheVNpbmdsZVBsYXllckdhbWUsXG4gY3JlYXRlUGxheWVycyxcbiBpbmZvUGxheWVyLFxuIHBsYXlNdWx0aVBsYXllckdhbWUsXG4gcGxheWVyMVxufSBmcm9tIFwiLi4vYXBwLmpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkLCBpc092ZXJsYXAsIGNoZWNrSWZFbXB0eSwgcmVzZXREcmFnU3JjIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQge1xuIHNldHVwR2FtZUVudmlyb25tZW50LFxuIHBsYWNlQ29tcHV0ZXJTaGlwc0luSFRNTCxcbiBjcmVhdGVCdG4sXG4gY3JlYXRlUGxheWVyU2hpcCxcbiBzZXRVcEh0bWwsXG4gc2hvd05ld3MsXG4gY3JlYXRlTW9kZWxTaGlwcyxcbiBjcmVhdGVCb2FyZCxcbiBjcmVhdGVJZGVudGlmaWNhdGlvbk1vZGVsLFxuIHNldHVwTXVsdGlQbGF5RW52aXJvbm1lbnRcbn0gZnJvbSBcIi4vY3JlYXRlQW5kRWRpdEh0bWwuanNcIjtcblxuXG5leHBvcnQgbGV0IGN1cnJlbnRNb2RlO1xuXG4vLyBhZGQgZXZlbnRzIHRvIHNpbmdsZSBhbmQgbXVsdGkgcGxheSBidG5zXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRzVG9Nb2RlQnRucygpIHtcbiBjb25zdCBzaW5nbGVQbGF5ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXBsYXllcicpO1xuIGNvbnN0IG11bHRpUGxheWVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11bHRpLXBsYXllcicpO1xuXG4gc2luZ2xlUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgcmVzZXREcmFnU3JjKCk7XG4gIGRyYWdTcmMuaXNIb3Jpem9udGFsID0gdHJ1ZTtcbiAgY3VycmVudE1vZGUgPSAnc2luZ2xlJztcbiAgc2V0dXBTaW5nbGVQbGF5ZXJHYW1lKClcbiB9ICk7XG4gXG4gbXVsdGlQbGF5ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgY3VycmVudE1vZGUgPSAnbXVsdGknO1xuICBzZXR1cE11bHRpUGxheWVyR2FtZSgpO1xuIH0gKTtcbn1cblxuLy8gYWRkIGV2ZW50cyB0byBkcmFnZ2FibGUgc2hpcHNcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudHNUb01vZGVsKG1vZGVsKSB7XG4gcmVzZXREcmFnU3JjKCk7XG4gZHJhZ1NyYy5pc0hvcml6b250YWwgPSB0cnVlO1xuIGNvbnN0IGRTaGlwcyA9IG1vZGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZC1zaGlwXCIpO1xuIGRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBnZXRUYXJnZXQpO1xuIH0pO1xuXG4gZFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTdGFydCwgZmFsc2UpO1xuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgZHJhZ0xlYXZlLCBmYWxzZSk7XG4gfSk7XG59XG5cbi8vIGFkZCBldmVudHMgdG8gcGFseWVyIGJvYXJkXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRzVG9Cb2FyZChib2FyZCkge1xuIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyYWdEcm9wLCBmYWxzZSk7XG4gYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyLCBmYWxzZSk7XG59XG5cbi8vIGFkZCBldmVudHMgdG8gYnRuc1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50c1RvQnRucyhidG5zKSB7XG4gY29uc3Qgcm90YXRlQnRuID0gYnRucy5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiBjb25zdCByZW9yZGVyQnRuID0gYnRucy5xdWVyeVNlbGVjdG9yKFwiLnJlb3JkZXJcIik7XG4gcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGUpO1xuIHJlb3JkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlT3JkZXIpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PSBFVkVOVFMgQ0IgRlVOQ1RJT05TID09PT09PT09PT09PT09PT09PT09ICovXG5cbi8vIGdldCB0YXJnZXRcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXQoZSkge1xuIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuIGRyYWdTcmMuZVRhcmdldCA9IHBhcnNlSW50KHRhcmdldC5pZC5zbGljZSgtMSkpO1xufVxuXG4vLyBkcmFnIHN0YXJ0XG5leHBvcnQgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiBkcmFnU3JjLndoaWNoU2hpcCA9IHRoaXMuaWQ7IC8vIGV4OiBkZXN0cm95ZXJcbiBkcmFnU3JjLmxlbmd0aCA9IHRoaXMuY2hpbGRFbGVtZW50Q291bnQ7IC8vIDJcbiBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG59XG5cbi8vIGRyYWcgb3ZlclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiBlLnByZXZlbnREZWZhdWx0KCk7XG4gZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xufVxuXG4vLyBkcmFnIGVuZFxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XG4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuLy8gZHJvcFxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wKGUpIHtcbiBlLnByZXZlbnREZWZhdWx0KCk7XG4gY29uc3QgbW9kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnYWJsZS1zaGlwc1wiKTtcbiBjb25zdCBjdXJyZW50RFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmFnU3JjLndoaWNoU2hpcCk7XG4gY29uc3QgY29vcmRzID0gW107XG4gY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7IC8vIGRpdiBpbiBteSBib2FyZFxuIGxldCBpZCA9IHBhcnNlSW50KHRhcmdldC5pZC5zbGljZSgxKSk7IC8vIHA5OSA9PiA5OVxuIGNvbnN0IGwgPSBkcmFnU3JjLmxlbmd0aDtcbiBpZiAoZHJhZ1NyYy5pc0hvcml6b250YWwpIHtcbiAgIC8vIGlmIGhvcml6b250YWxcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgIGNvb3Jkcy5wdXNoKGlkIC0gZHJhZ1NyYy5lVGFyZ2V0KTtcbiAgICAgaWQrKztcbiAgIH1cbiB9IGVsc2Uge1xuICAgLy8gaWYgdmVydGljYWxcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgIGNvb3Jkcy5wdXNoKGlkIC0gZHJhZ1NyYy5lVGFyZ2V0ICogMTApO1xuICAgICBpZCArPSAxMDtcbiAgIH1cbiB9XG5cbiBpZiAoIWlzVmFsaWQoY29vcmRzKSkgcmV0dXJuO1xuIGlmIChpc092ZXJsYXAoY29vcmRzKSkgcmV0dXJuO1xuIGNyZWF0ZVBsYXllclNoaXAoY29vcmRzKTtcblxuIGlmIChkcmFnU3JjLmRyb3BwZWQpIHtcbiAgIG1vZGVsLnJlbW92ZUNoaWxkKGN1cnJlbnREU2hpcCk7XG4gICByZXNldERyYWdTcmMoKTtcbiB9IGVsc2Uge1xuICAgcmVzZXREcmFnU3JjKCk7XG4gfVxuXG4gLy8gY2hlY2sgaWYgYWxsIG1vZGVsIHNoaXBzIGFyZSBkcm9wcGVkXG4gY29uc3QgaXNFbXB0eU1vZGVsID0gY2hlY2tJZkVtcHR5KG1vZGVsKTtcbiBpZiAoaXNFbXB0eU1vZGVsKSB7XG4gICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gICAvLyAgY2hlY2sgbW9kZVxuICAgaWYgKGN1cnJlbnRNb2RlID09PSBcInNpbmdsZVwiKSB7XG4gICAgcmVzZXREcmFnU3JjKCk7XG4gICAgZHJhZ1NyYy5pc0hvcml6b250YWwgPSB0cnVlO1xuICAgICBzaG93TmV3cyhcImNsaWNrIHN0YXJ0IHRvIHBsYXkhXCIsIDApO1xuICAgICBjb25zdCBzdGFydEJ0biA9IGNyZWF0ZUJ0bihcInN0YXJ0XCIpO1xuICAgICBtb2RlbC5hcHBlbmQoc3RhcnRCdG4pO1xuICAgICBtb2RlbC5jbGFzc0xpc3QuYWRkKFwiYmNrZ1wiKTtcblxuICAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgIGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ncmlkXCIpO1xuICAgICAgIHBsYXllckdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJhZ0Ryb3ApO1xuICAgICAgIHBsYXllckdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcbiAgICAgICBzaG93TmV3cyhcImdlc3MgYW5kIGNsaWNrIVwiLCAwKTtcbiAgICAgICBzZXR1cEdhbWVFbnZpcm9ubWVudCgpO1xuICAgICAgIGNyZWF0ZVBsYXllcnMoKTtcbiAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHNJbkhUTUwoKTtcblxuICAgICAgIGNvbnN0IHJlcGxheUJ0biA9IGNyZWF0ZUJ0bihcInJlcGxheVwiKTtcbiAgICAgICBjb250YWluZXIuYXBwZW5kKHJlcGxheUJ0bik7XG4gICAgICAgcmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZU9yZGVyKTtcbiAgICAgICBwbGF5U2luZ2xlUGxheWVyR2FtZShcImh1bWFuXCIpO1xuICAgICB9KTtcbiAgICAgcmV0dXJuO1xuICAgfVxuICAgLy8gaWYgbW9kZSBtdWx0aVxuICAgaWYgKGluZm9QbGF5ZXIuY3VycmVudFBsYXllciA9PT0gaW5mb1BsYXllci5wbGF5ZXIxKSB7XG4gICAgIHNob3dOZXdzKGBjbGljayBuZXh0IGFuZCBwYXNzIHRoZSBkZXZpY2UgdG8gJHtpbmZvUGxheWVyLnBsYXllcjIubmFtZX1gLCAwKTtcbiAgICAgY29uc3QgbmV4dEJ0biA9IGNyZWF0ZUJ0bihcIm5leHRcIik7XG4gICAgIG1vZGVsLmFwcGVuZChuZXh0QnRuKTtcbiAgICAgbW9kZWwuY2xhc3NMaXN0LmFkZChcImJja2dcIik7XG5cbiAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgIGNvbnN0IHNxdWFyZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLXBhcnRcIik7XG4gICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpIHtcbiAgICAgICAgIGNvbnN0IGlkID0gc3F1YXJlLmlkLnNsaWNlKDEpO1xuICAgICAgICAgY29uc3QgbGlzdCA9IFsuLi5zcXVhcmUuY2xhc3NMaXN0XTtcbiAgICAgICAgIGluZm9QbGF5ZXIucGxheWVyMS5ib2FyZC5wdXNoKHtcbiAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICBsaXN0OiBsaXN0LFxuICAgICAgICAgfSk7XG4gICAgICAgfVxuICAgICAgIGluZm9QbGF5ZXIuY3VycmVudFBsYXllciA9IGluZm9QbGF5ZXIucGxheWVyMjtcbiAgICAgICBzZXRVcEh0bWwoKTtcbiAgICAgICBzaG93TmV3cyhgJHtpbmZvUGxheWVyLnBsYXllcjIubmFtZX0gc2V0dXAgeW91ciBib3JkYCwgMCk7XG4gICAgICAgY29uc3QgbW9kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnYWJsZS1zaGlwc1wiKTtcbiAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWdyaWRcIik7XG4gICAgICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuc1wiKTtcbiAgICAgICBjcmVhdGVNb2RlbFNoaXBzKG1vZGVsKTtcbiAgICAgICBjcmVhdGVCb2FyZChwbGF5ZXJCb2FyZCwgXCJwXCIpO1xuICAgICAgIGFkZEV2ZW50c1RvTW9kZWwobW9kZWwpO1xuICAgICAgIGFkZEV2ZW50c1RvQm9hcmQocGxheWVyQm9hcmQpO1xuICAgICAgIGFkZEV2ZW50c1RvQnRucyhidG5zKTtcbiAgICAgfSk7XG4gICB9IGVsc2UgaWYgKGluZm9QbGF5ZXIuY3VycmVudFBsYXllciA9PT0gaW5mb1BsYXllci5wbGF5ZXIyKSB7XG4gICAgIHNob3dOZXdzKFwiY2xpY2sgc3RhcnQgdG8gcGxheSFcIiwgMCk7XG4gICAgIGNvbnN0IHN0YXJ0QnRuID0gY3JlYXRlQnRuKFwic3RhcnRcIik7XG4gICAgIG1vZGVsLmFwcGVuZChzdGFydEJ0bik7XG4gICAgIG1vZGVsLmNsYXNzTGlzdC5hZGQoXCJiY2tnXCIpO1xuXG4gICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgY29uc3Qgc3F1YXJlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtcGFydFwiKTtcbiAgICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc3F1YXJlcykge1xuICAgICAgICAgY29uc3QgaWQgPSBzcXVhcmUuaWQuc2xpY2UoMSk7XG4gICAgICAgICBjb25zdCBsaXN0ID0gWy4uLnNxdWFyZS5jbGFzc0xpc3RdO1xuICAgICAgICAgaW5mb1BsYXllci5wbGF5ZXIyLmJvYXJkLnB1c2goe1xuICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgIGxpc3Q6IGxpc3QsXG4gICAgICAgICB9KTtcbiAgICAgICB9XG4gICAgICAgc2V0dXBNdWx0aVBsYXlFbnZpcm9ubWVudCgpO1xuICAgICAgIHBsYXlNdWx0aVBsYXllckdhbWUocGxheWVyMSk7XG4gICAgIH0pO1xuICAgfSAvLyBlbmQgZWxzZVxuIH0gLy9lbmQgaWYgZW1wdHlcbn0gLy8gZW5kIGZ1bmN0aW9uXG5cbi8vIHJvdGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZSgpIHtcbiBjb25zdCBtb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dhYmxlLXNoaXBzXCIpO1xuIGNvbnN0IGlzRW1wdHlNb2RlbCA9IGNoZWNrSWZFbXB0eShtb2RlbCk7XG4gaWYgKGlzRW1wdHlNb2RlbCkgcmV0dXJuO1xuIGNvbnN0IHNoaXBDb250YWluZXJzID0gbW9kZWwucXVlcnlTZWxlY3RvckFsbChcIi5kLXNoaXBcIik7XG4gaWYgKGRyYWdTcmMuaXNIb3Jpem9udGFsKSB7XG4gICBzaGlwQ29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbFwiKTtcbiAgIH0pO1xuICAgZHJhZ1NyYy5pc0hvcml6b250YWwgPSBmYWxzZTtcbiB9IGVsc2Uge1xuICAgc2hpcENvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidmVydGljYWxcIik7XG4gICB9KTtcbiAgIGRyYWdTcmMuaXNIb3Jpem9udGFsID0gdHJ1ZTtcbiB9XG59XG5cbi8vIHJlb3JkZXIsIHJlc3RhcnQsIHJlcGxheVxuZXhwb3J0IGZ1bmN0aW9uIHJlT3JkZXIoKSB7XG4gcmVzZXREcmFnU3JjKCk7XG4gZHJhZ1NyYy5pc0hvcml6b250YWwgPSB0cnVlO1xuIGlmIChjdXJyZW50TW9kZSA9PT0gXCJzaW5nbGVcIikge1xuICAgc2V0dXBTaW5nbGVQbGF5ZXJHYW1lKCk7XG4gfSBlbHNlIHtcbiAgIHNldHVwTXVsdGlQbGF5ZXJHYW1lKCk7XG4gfVxufVxuXG4vLyB3aGVuIGNsaWNrIG9uIHBsYXkgc2luZ2xlXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTaW5nbGVQbGF5ZXJHYW1lKCkge1xuIHNldFVwSHRtbCgpO1xuIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2FibGUtc2hpcHNcIik7XG4gY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ncmlkXCIpO1xuIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bnNcIik7XG4gY3JlYXRlTW9kZWxTaGlwcyhtb2RlbCk7XG4gY3JlYXRlQm9hcmQocGxheWVyQm9hcmQsIFwicFwiKTtcbiBhZGRFdmVudHNUb01vZGVsKG1vZGVsKTtcbiBhZGRFdmVudHNUb0JvYXJkKHBsYXllckJvYXJkKTtcbiBhZGRFdmVudHNUb0J0bnMoYnRucyk7XG59XG5cbi8vIHdoZW4gY2xpY2sgb24gcGxheSBtdWx0aVxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTXVsdGlQbGF5ZXJHYW1lKCkge1xuIGNyZWF0ZUlkZW50aWZpY2F0aW9uTW9kZWwoKTtcbiBjb25zdCBmaXJzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmLXBsYXllclwiKTtcbiBjb25zdCBzZWNvbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicy1wbGF5ZXJcIik7XG4gY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG4gc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICBpbmZvUGxheWVyLnBsYXllcjEubmFtZSA9IGZpcnN0SW5wdXQudmFsdWUgfHwgXCJwbGF5ZXIxXCI7XG4gICBpbmZvUGxheWVyLnBsYXllcjIubmFtZSA9IHNlY29uZElucHV0LnZhbHVlIHx8IFwicGxheWVyMlwiO1xuICAgaW5mb1BsYXllci5jdXJyZW50UGxheWVyID0gaW5mb1BsYXllci5wbGF5ZXIxO1xuXG4gICBzZXRVcEh0bWwoKTtcbiAgIHNob3dOZXdzKGAke2luZm9QbGF5ZXIucGxheWVyMS5uYW1lfSBzZXR1cCB5b3VyIGJvcmRgLCAwKTtcbiAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2FibGUtc2hpcHNcIik7XG4gICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWdyaWRcIik7XG4gICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5zXCIpO1xuICAgY3JlYXRlTW9kZWxTaGlwcyhtb2RlbCk7XG4gICBjcmVhdGVCb2FyZChwbGF5ZXJCb2FyZCwgXCJwXCIpO1xuICAgYWRkRXZlbnRzVG9Nb2RlbChtb2RlbCk7XG4gICBhZGRFdmVudHNUb0JvYXJkKHBsYXllckJvYXJkKTtcbiAgIGFkZEV2ZW50c1RvQnRucyhidG5zKTtcbiB9KTtcbn1cbiIsImltcG9ydCB7XG4gIGRyYWdTcmMsXG4gIGh1bWFuLFxuICBjb21wdXRlcixcbiAgcGxheVNpbmdsZVBsYXllckdhbWUsXG4gIGluaXQsXG4gIGN1cnJlbnRQbGF5ZXIsXG4gIGVuZW15LFxuICBwbGF5TXVsdGlQbGF5ZXJHYW1lLFxuICBwbGF5ZXIxLFxuICBwbGF5ZXIyLFxufSBmcm9tIFwiLi4vYXBwLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vY29uc3RydWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBzaG93TmV3cywgc2hvd0luZm8gfSBmcm9tIFwiLi9jcmVhdGVBbmRFZGl0SHRtbC5qc1wiO1xuaW1wb3J0IHsgY3VycmVudE1vZGUgfSBmcm9tIFwiLi9ldmVudHMuanNcIjtcblxuLy8gY3JlYXRlIGNvbXB1dGVyIHNoaXBzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJTaGlwcygpIHtcbiAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMik7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKFwic3VibWFyaW5lXCIsIDMpO1xuICBjb25zdCBjcnVpc2VyID0gbmV3IFNoaXAoXCJjcnVpc2VyXCIsIDMpO1xuICBjb25zdCBidXR0bGVTaGlwID0gbmV3IFNoaXAoXCJidXR0bGVTaGlwXCIsIDQpO1xuICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpO1xuICByZXR1cm4gW2Rlc3Ryb3llciwgc3VibWFyaW5lLCBjcnVpc2VyLCBidXR0bGVTaGlwLCBjYXJyaWVyXTtcbn1cblxuLy8gZ2VuZWF0ZSBjb21wdXRlciBzaGlwc1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVmFsaWRDb29yZHMobGVuKSB7XG4gIGxldCBkaXIgPSBnZXRSYW5kb21EaXJlY3Rpb24oKTtcbiAgbGV0IG51bTtcbiAgLy8gaG9yaXpvbnRhbFxuICBpZiAoZGlyICYmIGxlbiA9PT0gMikgbnVtID0gOTk7XG4gIGlmIChkaXIgJiYgbGVuID09PSAzKSBudW0gPSA5ODtcbiAgaWYgKGRpciAmJiBsZW4gPT09IDQpIG51bSA9IDk3O1xuICBpZiAoZGlyICYmIGxlbiA9PT0gNSkgbnVtID0gOTY7XG4gIC8vIHZlcnRpY2FsXG4gIGlmICghZGlyICYmIGxlbiA9PT0gMikgbnVtID0gODk7XG4gIGlmICghZGlyICYmIGxlbiA9PT0gMykgbnVtID0gNzk7XG4gIGlmICghZGlyICYmIGxlbiA9PT0gNCkgbnVtID0gNjk7XG4gIGlmICghZGlyICYmIGxlbiA9PT0gNSkgbnVtID0gNTk7XG5cbiAgbGV0IGNvb3JkcyA9IGdldFJhbmRvbUNvb3JkcyhkaXIsIG51bSwgbGVuKTtcbiAgbGV0IHNhZmUgPSBpc1NhZmUoY29vcmRzLCBkaXIpO1xuICBpZiAoc2FmZSkgcmV0dXJuIGNvb3JkcztcblxuICBkbyB7XG4gICAgZGlyID0gZ2V0UmFuZG9tRGlyZWN0aW9uKCk7XG4gICAgY29vcmRzID0gZ2V0UmFuZG9tQ29vcmRzKGRpciwgbnVtLCBsZW4pO1xuICAgIHNhZmUgPSBpc1NhZmUoY29vcmRzLCBkaXIpO1xuICB9IHdoaWxlICghc2FmZSk7XG5cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuLyo9PT09PT09PT09PT09PT0gY2hlY2sgPT09PT09PT09PT09PT09Ki9cblxuLy8gY2hlY2sgaWYgdmFsaWQgY29vcmRzIGJlZm9yZSBkcm9wXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChjb29yZHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY29vcmRzW2ldIDwgMCB8fCBjb29yZHNbaV0gPiA5OSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghZHJhZ1NyYy5pc0hvcml6b250YWwpIHJldHVybiB0cnVlO1xuXG4gIC8vIGlmIGhvcml6b250YWxcbiAgY29uc3QgYm9yZGVycyA9IFtcbiAgICAwLCA5LCAxMCwgMTksIDIwLCAyOSwgMzAsIDM5LCA0MCwgNDksIDUwLCA1OSwgNjAsIDY5LCA3MCwgNzksIDgwLCA4OSwgOTAsXG4gICAgOTksXG4gIF07XG4gIGNvbnN0IGNvb3Jkc0JvcmRlcnMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChib3JkZXJzLmluZGV4T2YoY29vcmRzW2ldKSA+PSAwKSB7XG4gICAgICBjb29yZHNCb3JkZXJzLnB1c2goY29vcmRzW2ldKTtcbiAgICB9XG4gICAgaWYgKGNvb3Jkc0JvcmRlcnMubGVuZ3RoID4gMSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBjaGVjayBpZiBpdCBvdmVybGFwIGFub3RoZXIgc2hpcCBiZWZvciBkcm9waW5nIGl0XG5leHBvcnQgZnVuY3Rpb24gaXNPdmVybGFwKGNvb3Jkcykge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7Y29vcmRzW2ldfWApO1xuICAgIGlmICghZGl2KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLXBhcnRcIikpIHtcbiAgICAgIGFyci5wdXNoKFwieWVzXCIpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyci5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBjaGVjayBpZiBhbGwgc2hpcHMgYXJlIGRyb3BwZWRcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmRW1wdHkobW9kZWwpIHtcbiAgY29uc3QgY291bnQgPSBtb2RlbC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgaWYgKGNvdW50IDwgMSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gY2hlY2sgY29tcHV0ZXIgY29vcmRzXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZlKGNvb3Jkcykge1xuICBjb25zdCBib3JkZXJzID0gW1xuICAgIDAsIDEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MCwgOTAsIDksIDE5LCAyOSwgMzksIDQ5LCA1OSwgNjksIDc5LCA4OSxcbiAgICA5OSxcbiAgXTtcbiAgY29uc3QgYm9yZGVyc0NvdW50ID0gW107XG5cbiAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke2Nvb3JkfWApO1xuICAgIGlmICghZGl2KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLXBhcnRcIikpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBkaXZJZE51bSA9IHBhcnNlSW50KGRpdi5pZC5zbGljZSgxKSk7XG5cbiAgICBpZiAoYm9yZGVycy5pbmRleE9mKGRpdklkTnVtKSA+PSAwKSB7XG4gICAgICBib3JkZXJzQ291bnQucHVzaChkaXZJZE51bSk7XG4gICAgfVxuICAgIGlmIChib3JkZXJzQ291bnQubGVuZ3RoID4gMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2libGUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMke2Nvb3JkIC0gMX1gKTtcbiAgICBjb25zdCBzaWJsZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7Y29vcmQgKyAxMH1gKTtcbiAgICBjb25zdCBzaWJsZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7Y29vcmQgLSAxMH1gKTtcbiAgICBjb25zdCBzaWJsZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYyR7Y29vcmQgKyAxfWApO1xuXG4gICAgaWYgKHNpYmxlMSkge1xuICAgICAgaWYgKHNpYmxlMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLXBhcnRcIikpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2libGUyKSB7XG4gICAgICBpZiAoc2libGUyLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtcGFydFwiKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzaWJsZTMpIHtcbiAgICAgIGlmIChzaWJsZTMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1wYXJ0XCIpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNpYmxlNCkge1xuICAgICAgaWYgKHNpYmxlNC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLXBhcnRcIikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09UkFORE9NIEZVTkNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLy8gcmFuZG9tIGRpcmVjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbURpcmVjdGlvbigpIHtcbiAgY29uc3QgZGlycyA9IFt0cnVlLCBmYWxzZV07XG4gIGNvbnN0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgcmV0dXJuIGRpcnNbcl07XG59XG5cbi8vIGdlbmVyYXRlIHJhbmRvbSBjb29yZHMgZm9yIGNvbXB1dGVyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRzKGRpciwgbnVtLCBsZW4pIHtcbiAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW0pO1xuICBjb25zdCBjb29yZHMgPSBbXTtcblxuICBpZiAoZGlyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29vcmRzLnB1c2gobik7XG4gICAgICBuKys7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKG4pO1xuICAgICAgbiArPSAxMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuLy8gcGlja1xuZXhwb3J0IGZ1bmN0aW9uIHBpY2tSYW5kb21JZCgpIHtcbiAgY29uc3QgcmVtYWluID0gaHVtYW4ucmVtYWluaW5nU3F1YXJlcygpO1xuICBjb25zdCBsID0gcmVtYWluLmxlbmd0aDtcbiAgbGV0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsKTtcbiAgY29uc3QgcmFuZG9tRGl2ID0gcmVtYWluW3JdO1xuICBjb25zdCBpZCA9IHJhbmRvbURpdi5pZDtcbiAgcmV0dXJuIGlkO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBQTEFZID09PT09PT09PT09PT09PT09PT09PT09PSovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZShlKSB7XG4gIGNvbnN0IGRpdiA9IGUudGFyZ2V0O1xuICBwbGF5KGRpdiwgXCJodW1hblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXkoZGl2LCB3aG8pIHtcbiAgbGV0IGhpdDtcbiAgaWYgKHdobyA9PT0gXCJodW1hblwiKSB7XG4gICAgaGl0ID0gaHVtYW5HbyhkaXYpO1xuICB9IGVsc2Uge1xuICAgIGhpdCA9IGNvbXB1dGVyR28oZGl2KTtcbiAgfVxuICBcbiAgaWYgKGhpdCkge1xuICAgIGxldCB3aW5uZXIgPSBjaGVja0lmR2FtZU92ZXIod2hvKTtcbiAgICBpZiAod2lubmVyKSByZXR1cm4gZ2FtZU92ZXIod2lubmVyKTtcbiAgICByZXR1cm4gcGxheVNpbmdsZVBsYXllckdhbWUod2hvKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxheVNpbmdsZVBsYXllckdhbWUoc3dhcGVQbGF5ZXIod2hvKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3dhcGVQbGF5ZXIocGxheWVyKSB7XG4gIGlmIChwbGF5ZXIgPT09IFwiaHVtYW5cIikgcmV0dXJuIFwiY29tcHV0ZXJcIjtcbiAgcmV0dXJuIFwiaHVtYW5cIjtcbn1cblxuLy8gaHVtYW4gcGxheVxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuR28oZGl2KSB7XG4gIGNvbnN0IGlzSGl0ID0gaHVtYW4uY2hlY2soZGl2LmlkKTtcbiAgaWYgKGlzSGl0KSB7XG4gICAgY29uc3QgZGl2Q2xhc3MgPSBbLi4uZGl2LmNsYXNzTGlzdF07XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gW1xuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwiYnV0dGxlU2hpcFwiLFxuICAgICAgXCJjYXJyaWVyXCIsXG4gICAgXTtcbiAgICBjb25zdCBpbmRleCA9IHNoaXBOYW1lcy5pbmRleE9mKGRpdkNsYXNzWzJdKTtcbiAgICBjb21wdXRlci5zaGlwc1tpbmRleF0ucmVjZWl2ZWRBdHRhY2soKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcIndpblwiKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gXCImIzk3NjA7XCI7XG4gICAgZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmVwYXJlKTtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcInNxdWFyZVwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImxvc2VcIik7XG4gICAgZGl2LmlubmVySFRNTCA9IFwiJiM5NzM3O1wiO1xuICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJlcGFyZSk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzcXVhcmVcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIGNvbXB1dGVyIHBsYXlcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlckdvKGRpdikge1xuICBjb25zdCBpc0hpdCA9IGNvbXB1dGVyLmNoZWNrKGRpdi5pZCk7XG4gIGlmIChpc0hpdCkge1xuICAgIGNvbnN0IGRpdkNsYXNzID0gWy4uLmRpdi5jbGFzc0xpc3RdO1xuICAgIGNvbnN0IHNoaXBOYW1lcyA9IFtcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJ1dHRsZVNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgIF07XG4gICAgY29uc3QgaW5kZXggPSBzaGlwTmFtZXMuaW5kZXhPZihkaXZDbGFzc1syXSk7XG4gICAgaHVtYW4uc2hpcHNbaW5kZXhdLnJlY2VpdmVkQXR0YWNrKCk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ3aW5cIik7XG4gICAgZGl2LmlubmVySFRNTCA9IFwiJiM5NzYwO1wiO1xuICAgIGNvbnN0IGlzU3VuayA9IGh1bWFuLnNoaXBzW2luZGV4XS5pc1N1bmsoKTtcbiAgICBpZiAoaXNTdW5rKSB7XG4gICAgICBzaG93TmV3cyhgeW91ciAke2h1bWFuLnNoaXBzW2luZGV4XS5zaGlwTmFtZX0gaXMgc3VuayFgLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd05ld3MoYHlvdXIgJHtodW1hbi5zaGlwc1tpbmRleF0uc2hpcE5hbWV9IGlzIGhpdHRlbiFgLCAxKTtcbiAgICB9XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzcXVhcmVcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJsb3NlXCIpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBcIiYjOTczNztcIjtcbiAgICBzaG93TmV3cyhcInRoZXkgbWlzcyFcIiwgMCk7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzcXVhcmVcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIGNoZWNrIGlmIEdhbWUgb3ZlclxuZnVuY3Rpb24gY2hlY2tJZkdhbWVPdmVyKHdobykge1xuICAgICAgbGV0IGVuZW15TG9zZSA9IDA7XG4gIGlmIChjdXJyZW50TW9kZSA9PT0gXCJzaW5nbGVcIikge1xuICAgIGlmICh3aG8gPT09ICdodW1hbicpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgY29tcHV0ZXIuc2hpcHMpIHtcbiAgICAgICAgZW5lbXlMb3NlICs9IHNoaXAuaGl0dGVuUGFydHM7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHdobyA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBodW1hbi5zaGlwcykge1xuICAgICAgICBlbmVteUxvc2UgKz0gc2hpcC5oaXR0ZW5QYXJ0cztcbiAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbmVteUxvc2UgPT09IDE3KSB7XG4gICAgICByZXR1cm4gd2hvO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaWYgbW9kZSBtdWx0aVxuXG4gIGZvciAobGV0IHNoaXAgb2YgZW5lbXkuc2hpcHMpIHtcbiAgICBlbmVteUxvc2UgKz0gc2hpcC5oaXR0ZW5QYXJ0cztcbiAgfVxuXG4gIGlmIChlbmVteUxvc2UgPT09IDE3KSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXIucGxheWVyTmFtZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGdhbWUgb3ZlclxuZnVuY3Rpb24gZ2FtZU92ZXIod2lubmVyKSB7XG4gIGlmIChjdXJyZW50TW9kZSA9PT0gXCJzaW5nbGVcIikge1xuICAgIGNvbnN0IHJlbWFpbmluZ1NxdWFyZXMgPSBjb21wdXRlci5yZW1haW5pbmdTcXVhcmVzKCk7XG4gICAgcmVtYWluaW5nU3F1YXJlcy5mb3JFYWNoKChkaXYpID0+XG4gICAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXBhcmUpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZW1haW5pbmdTcXVhcmVzMSA9IHBsYXllcjEucmVtYWluaW5nU3F1YXJlcygpO1xuICAgIHJlbWFpbmluZ1NxdWFyZXMxLmZvckVhY2goKGRpdikgPT5cbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheU11bHRpKVxuICAgICk7XG5cbiAgICBjb25zdCByZW1haW5pbmdTcXVhcmVzMiA9IHBsYXllcjIucmVtYWluaW5nU3F1YXJlcygpO1xuICAgIHJlbWFpbmluZ1NxdWFyZXMyLmZvckVhY2goKGRpdikgPT5cbiAgICAgIGRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheU11bHRpKVxuICAgICk7XG4gIH1cblxuICBsZXQgbXNnO1xuICBsZXQgbXNnQ2xhc3M7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgY29uc3Qgd2lubmVyTW9kZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5uZXJNb2RlbC5jbGFzc05hbWUgPSBcIndpbm5lci1tZXNzYWdlXCI7XG5cbiAgaWYgKHdpbm5lciA9PSBcImh1bWFuXCIpIHtcbiAgICBtc2cgPSBcImNvbmdyYXR1bGF0aW9uISBZb3Ugd29uIHRoZSBnYW1lIVwiO1xuICAgIG1zZ0NsYXNzID0gXCJzdWNjZXNzXCI7XG4gIH0gZWxzZSBpZiAod2lubmVyID09IFwiY29tcHV0ZXJcIikge1xuICAgIG1zZyA9IFwic29ycnkgeW91IGxvc2UgdGhlIGdhbWUhXCI7XG4gICAgbXNnQ2xhc3MgPSBcImRhbmdlclwiO1xuICB9IGVsc2Uge1xuICAgIG1zZyA9IGAke3dpbm5lcn0gaXMgd29uICFgO1xuICAgIG1zZ0NsYXNzID0gXCJzdWNjZXNzXCI7XG4gIH1cblxuICB3aW5uZXJNb2RlbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0ncmVtb3ZlJz4mdGltZXM7PC9kaXY+XG4gICA8cCBjbGFzcz1cIiR7bXNnQ2xhc3N9XCI+JHttc2d9PC9wPlxuICAgPGJ1dHRvbiBpZD1cInJlc3RhcnRcIiBjbGFzcz1cImJ0biByZXBsYXlcIj5yZXN0YXJ0PC9idXR0b24+YDtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2lubmVyTW9kZWwpO1xuICAgIGNvbnN0IHJlbW92ZSA9IHdpbm5lck1vZGVsLnF1ZXJ5U2VsZWN0b3IoXCIucmVtb3ZlXCIpO1xuICAgIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQod2lubmVyTW9kZWwpO1xuICAgIH0pO1xuXG4gICAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdCk7XG4gIH0sIDgwMCk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT0gcGxheSBtdWx0aSBwbGF5ZXIgPT09PT09PT09PT09PT09PSovXG5leHBvcnQgZnVuY3Rpb24gcGxheU11bHRpKGUpIHtcbiAgY29uc3QgbmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3c1wiKTtcbiAgbmV3cy5jbGFzc0xpc3QudG9nZ2xlKFwiY2xhc3MxXCIpO1xuICBjb25zdCBkaXYgPSBlLnRhcmdldDtcbiAgY29uc3QgaGl0ID0gcGxheWVyR28oZGl2KTtcbiAgIFxuICBpZiAoaGl0KSB7XG4gICAgbGV0IHdpbm5lciA9IGNoZWNrSWZHYW1lT3ZlcihjdXJyZW50UGxheWVyKTtcbiAgICBpZiAod2lubmVyKSByZXR1cm4gZ2FtZU92ZXIod2lubmVyKTtcbiAgICByZXR1cm4gcGxheU11bHRpUGxheWVyR2FtZShjdXJyZW50UGxheWVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxheU11bHRpUGxheWVyR2FtZShlbmVteSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheWVyR28oZGl2KSB7XG4gIGNvbnN0IGlzSGl0ID0gY3VycmVudFBsYXllci5jaGVjayhkaXYuaWQpO1xuICBpZiAoaXNIaXQpIHtcbiAgICBjb25zdCBkaXZDbGFzcyA9IFsuLi5kaXYuY2xhc3NMaXN0XTtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJidXR0bGVTaGlwXCIsXG4gICAgICBcImNhcnJpZXJcIixcbiAgICBdO1xuICAgIGNvbnN0IGluZGV4ID0gc2hpcE5hbWVzLmluZGV4T2YoZGl2Q2xhc3NbMl0pO1xuICAgIGVuZW15LnNoaXBzW2luZGV4XS5yZWNlaXZlZEF0dGFjaygpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwid2luXCIpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBcIiYjOTc2MDtcIjtcbiAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlNdWx0aSk7XG5cbiAgICBjb25zdCBpc1N1bmsgPSBlbmVteS5zaGlwc1tpbmRleF0uaXNTdW5rKCk7XG4gICAgaWYgKGlzU3Vuaykge1xuICAgICAgc2hvd0luZm8oYCR7ZW5lbXkucGxheWVyTmFtZX0ncyAke2VuZW15LnNoaXBzW2luZGV4XS5zaGlwTmFtZX0gaXMgc3VuayFgLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0luZm8oXG4gICAgICAgIGAke2VuZW15LnBsYXllck5hbWV9J3MgJHtlbmVteS5zaGlwc1tpbmRleF0uc2hpcE5hbWV9IGlzIGhpdHRlbiFgLCAxXG4gICAgICApO1xuICAgIH1cblxuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic3F1YXJlXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibG9zZVwiKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gXCImIzk3Mzc7XCI7XG4gICAgc2hvd0luZm8oXCJtaXNzIVwiLCAwKTtcbiAgICBkaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXBhcmUpO1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic3F1YXJlXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09IG90aGVycyA9PT09PT09PT09PT09PT09Ki9cbi8vIHJlc2V0IGRyYWdTcmMgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gcmVzZXREcmFnU3JjKCkge1xuICBkcmFnU3JjLndoaWNoU2hpcCA9IFwiXCI7XG4gIGRyYWdTcmMubGVuZ3RoID0gMDtcbiAgZHJhZ1NyYy5lVGFyZ2V0ID0gbnVsbDtcbiAgZHJhZ1NyYy5kcm9wcGVkID0gZmFsc2U7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJjcmVhdGVNb2RlQnRucyIsInNob3dOZXdzIiwiYWRkRXZlbnRzVG9Nb2RlQnRucyIsIlBsYXllciIsInBpY2tSYW5kb21JZCIsInBsYXkiLCJwcmVwYXJlIiwicGxheU11bHRpIiwiZHJhZ1NyYyIsImlzSG9yaXpvbnRhbCIsImh1bWFuIiwiY29tcHV0ZXIiLCJpbmZvUGxheWVyIiwicGxheWVyMSIsIm5hbWUiLCJib2FyZCIsInBsYXllcjIiLCJjdXJyZW50UGxheWVyIiwiZW5lbXkiLCJjcmVhdGVQbGF5ZXJzIiwicGxheVNpbmdsZVBsYXllckdhbWUiLCJ3aG9QbGF5IiwicmVtYWluaW5nU3F1YXJlcyIsImZvckVhY2giLCJzcXVhcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiaWQiLCJkaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlTXVsdGlQbGF5ZXJzIiwiZ3JpZDEiLCJncmlkMiIsIm5hbWUxIiwibmFtZTIiLCJyZXNldEluZm9QbGF5ZXIiLCJwbGF5TXVsdGlQbGF5ZXJHYW1lIiwid2hvUGxheVNxdWFyZXMiLCJlbmVteVNxdWFyZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGxheWVyTmFtZSIsImluaXQiLCJTaGlwIiwibGVuZ3RoIiwic2hpcE5hbWUiLCJzaGlwUGFydHMiLCJjb3VudCIsImkiLCJwdXNoIiwiaGl0dGVuUGFydHMiLCJyZWNlaXZlZEF0dGFjayIsImlzU3VuayIsImVuZW15Qm9yZCIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsImNydWlzZXIiLCJidXR0bGVTaGlwIiwiY2FycmllciIsInNoaXBzIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVjayIsImNvbnRhaW5zIiwiZ2VuZXJhdGVWYWxpZENvb3JkcyIsInNldFVwSHRtbCIsIndyYXBwZXIiLCJpbm5lckhUTUwiLCJjcmVhdGVNb2RlbFNoaXBzIiwibW9kZWwiLCJjcmVhdGVCb2FyZCIsImNvbnRhaW5lciIsInR4dCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJjcmVhdGVCdG4iLCJ0ZXh0IiwiYnRuIiwidGV4dENvbnRlbnQiLCJzZXR1cEdhbWVFbnZpcm9ubWVudCIsImNvbXB1dGVyQm9hcmQiLCJjcmVhdGVQbGF5ZXJTaGlwIiwiY29vcmRzIiwiY29uc29sZSIsImxvZyIsIndoaWNoU2hpcCIsImRyb3BwZWQiLCJwbGFjZUNvbXB1dGVyU2hpcHNJbkhUTUwiLCJzaGlwIiwiY29vcmQiLCJpbnRlcnZhbCIsIm5ld3MiLCJzZXRUaW1lb3V0IiwiY3JlYXRlSWRlbnRpZmljYXRpb25Nb2RlbCIsInNldHVwTXVsdGlQbGF5RW52aXJvbm1lbnQiLCJib2FyZDEiLCJib2FyZDIiLCJyZXBsYXkiLCJvYmoiLCJsaXN0Iiwic2hvd0luZm8iLCJwQ2xhc3MiLCJpc1ZhbGlkIiwiaXNPdmVybGFwIiwiY2hlY2tJZkVtcHR5IiwicmVzZXREcmFnU3JjIiwiY3VycmVudE1vZGUiLCJzaW5nbGVQbGF5ZXJCdG4iLCJtdWx0aVBsYXllckJ0biIsInNldHVwU2luZ2xlUGxheWVyR2FtZSIsInNldHVwTXVsdGlQbGF5ZXJHYW1lIiwiYWRkRXZlbnRzVG9Nb2RlbCIsImRTaGlwcyIsImdldFRhcmdldCIsImRyYWdTdGFydCIsImRyYWdMZWF2ZSIsImFkZEV2ZW50c1RvQm9hcmQiLCJkcmFnRHJvcCIsImRyYWdPdmVyIiwiYWRkRXZlbnRzVG9CdG5zIiwiYnRucyIsInJvdGF0ZUJ0biIsInJlb3JkZXJCdG4iLCJyb3RhdGUiLCJyZU9yZGVyIiwiZSIsInRhcmdldCIsImVUYXJnZXQiLCJwYXJzZUludCIsInNsaWNlIiwiY2hpbGRFbGVtZW50Q291bnQiLCJkYXRhVHJhbnNmZXIiLCJlZmZlY3RBbGxvd2VkIiwicHJldmVudERlZmF1bHQiLCJkcm9wRWZmZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudERTaGlwIiwibCIsInJlbW92ZUNoaWxkIiwiaXNFbXB0eU1vZGVsIiwic3RhcnRCdG4iLCJwbGF5ZXJHcmlkIiwicmVwbGF5QnRuIiwibmV4dEJ0biIsInNxdWFyZXMiLCJwbGF5ZXJCb2FyZCIsInNoaXBDb250YWluZXJzIiwiZmlyc3RJbnB1dCIsInNlY29uZElucHV0Iiwic3VibWl0IiwidmFsdWUiLCJjcmVhdGVDb21wdXRlclNoaXBzIiwibGVuIiwiZGlyIiwiZ2V0UmFuZG9tRGlyZWN0aW9uIiwibnVtIiwiZ2V0UmFuZG9tQ29vcmRzIiwic2FmZSIsImlzU2FmZSIsImJvcmRlcnMiLCJjb29yZHNCb3JkZXJzIiwiaW5kZXhPZiIsImFyciIsImJvcmRlcnNDb3VudCIsImRpdklkTnVtIiwic2libGUxIiwic2libGUyIiwic2libGUzIiwic2libGU0IiwiZGlycyIsInIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuIiwicmVtYWluIiwicmFuZG9tRGl2Iiwid2hvIiwiaGl0IiwiaHVtYW5HbyIsImNvbXB1dGVyR28iLCJ3aW5uZXIiLCJjaGVja0lmR2FtZU92ZXIiLCJnYW1lT3ZlciIsInN3YXBlUGxheWVyIiwicGxheWVyIiwiaXNIaXQiLCJkaXZDbGFzcyIsInNoaXBOYW1lcyIsImluZGV4IiwiZW5lbXlMb3NlIiwicmVtYWluaW5nU3F1YXJlczEiLCJyZW1haW5pbmdTcXVhcmVzMiIsIm1zZyIsIm1zZ0NsYXNzIiwid2lubmVyTW9kZWwiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsInJlc3RhcnQiLCJ0b2dnbGUiLCJwbGF5ZXJHbyJdLCJzb3VyY2VSb290IjoiIn0=