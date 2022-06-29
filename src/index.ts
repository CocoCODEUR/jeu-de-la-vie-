import { Module } from "./module.js";
const FPS = 5;

const canvas: HTMLCanvasElement = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const rectWidth: number = 20;
const rectHeight: number = 20;

const module = new Module();
let lifeTable = module.InitTableLife();
lifeTable[10][10] = 1;
lifeTable[11][10] = 1;
lifeTable[12][10] = 1;
function DrawRectangle(life: number[][]) {
  for (let i = 0; i < life.length; i++) {
    for (let j = 0; j < life.length; j++) {
      if (life[i][j] == 1) {
        ctx.fillStyle = "red";
        ctx.fillRect(i * rectWidth, j * rectHeight, rectWidth, rectHeight);
      } else {
        ctx.fillStyle = "black";
        ctx.fillRect(i * rectWidth, j * rectHeight, rectWidth, rectHeight);
      }
    }
  }
}
function LifeAround(X: number, Y: number) {
  let lifeAround = 0;
  //check zones autour de X et Y
  // corner flemme de faire if if if
  if (
    X === 0 ||
    X === lifeTable.length - 1 ||
    Y === 0 ||
    Y === lifeTable.length - 1
  ) {
    lifeAround = 0;
  } else {
    if (lifeTable[X - 1][Y] === 1) {
      lifeAround += 1;
    }
    if (lifeTable[X + 1][Y] === 1) {
      lifeAround += 1;
    }
    if (lifeTable[X - 1][Y + 1] === 1) {
      lifeAround += 1;
    }
    if (lifeTable[X + 1][Y + 1] === 1) {
      lifeAround += 1;
    }
    if (lifeTable[X][Y + 1] === 1) {
      lifeAround += 1;
    }
    if (lifeTable[X - 1][Y - 1] === 1) {
      lifeAround += 1;
    }
    if (lifeTable[X + 1][Y - 1] === 1) {
      lifeAround += 1;
    }
    if (lifeTable[X][Y - 1] === 1) {
      lifeAround += 1;
    } else {
      lifeAround = 0;
    }
    return lifeAround;
  }
}

function UpdateTableOfLife() {
  for (let i = 0; i < lifeTable.length; i++) {
    for (let j = 0; j < lifeTable.length; j++) {
      console.log(LifeAround(i, j));
      let lifeAround = LifeAround(i, j);

      if (lifeAround === 3) {
        lifeTable[i][j] = 1;
      } else {
        lifeTable[i][j] = 0;
      }
    }
  }
  return lifeTable;
}

function Animate() {
  let lifeTable = UpdateTableOfLife();
  DrawRectangle(lifeTable);
  setInterval(Animate, 1000 / FPS);
}
Animate();
