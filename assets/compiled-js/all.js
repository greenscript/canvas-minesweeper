function initializeCanvas (x, y, width, height, color) {
  let canvas  = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.color =  color;
  document.body.appendChild(canvas);
  return canvas;
};

function drawFace(context, gameover) {
  context.beginPath();
  if (gameover) {
    // to do
  } else {
    context.fillStyle = '#f1c40f';
    context.arc(210, 45, 40, 0, Math.PI * 2, true); // Outer circle
    context.fill();
    context.moveTo(237, 43);
    context.arc(212, 43, 25, 0, Math.PI, false);  // Mouth (clockwise)
    context.moveTo(205, 35);
    context.arc(200, 34, 5, 0, Math.PI * 2, true);  // Left eye
    context.moveTo(230, 34);
    context.arc(225, 33, 5, 0, Math.PI * 2, true);  // Right eye
    context.stroke();
  }
  context.closePath();
};

function drawPanels (context) {
  context.beginPath();
  context.fillStyle = '#ecf0f1';
  context.rect(60, 10, 95, 50);
  context.rect(264, 10, 100, 50);
  context.fill();
  context.closePath();
}

function drawBoard(context) {
  context.beginPath();
  context.translate(0, -70)
  context.fillStyle = '#2980b9'
  context.fillRect(60, 60, 305, 330);
  context.fill()
  context.clearRect(80, 80, 265, 290);
  context.strokeRect(100, 100, 100, 100);
  context.fillStyle = 'white';
  context.closePath();
}

function drawCells (canvas) {
  let firstRow = new Array(10);
  let secondRow = new Array(10);
  let thirdRow = new Array(10);
  let fourthRow = new Array(10);
  let fifthRow = new Array(10);
  let sixthRow = new Array(10);
  let seventhRow = new Array(10);
  let eightRow = new Array(10);
  let ninthRow = new Array(10);
  let tenthRow = new Array(10);
  let cells = [];
  let positionX = 100;
  let positionY = 100;
  let context = canvas.getContext('2d');
  let gameover = false;
  let id = 0;

  context.translate(400, 150);

  drawBoard(context);
  drawFace(context, gameover);
  drawPanels(context);

  context.beginPath();
  context.fillStyle = '#FFF'

  for (var i = 0; i < firstRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < secondRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < thirdRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < fourthRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < fifthRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < sixthRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < seventhRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < eightRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < ninthRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  positionX = 100;
  positionY = positionY + 25;

  for (var i = 0; i < tenthRow.length; i++) {
    let square = new Square (id, positionX, positionY, 20, 20, '#FFF', context);
    context.rect(square.positionX, square.positionY, square.width, square.height);
    context.fill();
    positionX = positionX + 23;
    cells.push(square);
    id++;
  }

  context.closePath();
  console.log(cells);

};

function init () {
  let canvas = initializeCanvas(100, 100, window.innerWidth, window.innerHeight, 'green');
  drawCells(canvas);
};


window.addEventListener('load', init, false);

function Square (id, positionX, positionY, width, height, color, context) {
  this.id = id;
  this.positionX = positionX;
  this.positionY = positionY;
  this.width = width;
  this.height = height;
  this.color = '';
  this.context = context;
};
