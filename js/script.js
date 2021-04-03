const logo = document.querySelector("img");
const startBtn = document.getElementById("start-button");
const gameboard = document.getElementById("game-board");
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
console.log(gameboard.clientHeight);

window.onload = function () {
  gameboard.hidden = true;
  startBtn.onclick = function () {
    startGame();
  };

  function startGame() {
    gameboard.hidden = false;
    logo.hidden = true;
    startBtn.hidden = true;
    canvas.height = gameboard.clientHeight;
    canvas.width = gameboard.clientWidth;
  }
};

// class GameArea extends Drawable {
//   constructor() {
//     this.canvas = document.getElementById('my-canvas');
//   }
//   init() {
//     this.canvas.width =
//   }
// }
// class Background {
//   constrctor(x, y) {
//     this.img = new Image();
//     this.image.src = "../images/bg.png";
//   }
// }

// class Drawable {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.speed = 0;
//     this.canvasWidth = 0;
//     this.canvasHeight = 0;
//   }
//   draw() {}
// }
