class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
const theatre = new Shape(6, 6);
const stone = new Shape(4, 4);

let stoneX = Math.ceil(theatre.width / stone.width);
let stoneY = Math.ceil(theatre.height / stone.height);

let stoneNumbers = stoneX * stoneY;

console.log(stoneNumbers);
