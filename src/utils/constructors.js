// ship constructor
export function Ship(name, length) {
  this.shipName = name;
  this.length = length;
  this.shipParts = (function () {
    let count = 0;
    const shipParts = [];
    for (let i = 0; i < length; i++) {
      shipParts.push(`${name}${count}`);
      count++;
    }
    return shipParts;
  })();

  this.hittenParts = 0;
  this.receivedAttack = function () {
    this.hittenParts++;
  };

  this.isSunk = function () {
    if (this.hittenParts >= length) return true;
    return false;
  };
}

// player constructor
export function Player(name, board, enemyBord) {
  const destroyer = new Ship("destroyer", 2);
  const submarine = new Ship("submarine", 3);
  const cruiser = new Ship("cruiser", 3);
  const buttleShip = new Ship("buttleShip", 4);
  const carrier = new Ship("carrier", 5);

  this.ships = [destroyer, submarine, cruiser, buttleShip, carrier];
  this.playerName = name;
  this.board = document.querySelector(board);
  this.enemyBord = document.querySelector(enemyBord);
  this.remainingSquares = function () {
    return [...this.board.querySelectorAll(".square")];
  };

  this.check = function (id) {
    const div = document.getElementById(id);
    if (div.classList.contains("ship-part")) {
      return true;
    }
    return false;
  };
}
