let img;
let x_offset;
let y_offset;

function preload() {
  img = loadImage("assets/natural_glaciers.jpeg");
}

function setup() {
  createCanvas(img.width, img.height, WEBGL);
  x_offset = -img.width / 2;
  y_offset = -img.height / 2;
  image(img, x_offset, y_offset);
}

let points = [];

function mouseClicked() {
  points.push({ x: mouseX + x_offset, y: mouseY + y_offset});
}

function draw() {
  if (points.length == 4) {
    texture(img);
    beginShape();
    vertex(points[0].x, points[0].y, 1, 1);
    vertex(points[1].x, points[1].y, 0, 1);
    vertex(points[2].x, points[2].y, 1, 0);
    vertex(points[3].x, points[3].y, 0, 0);
    endShape();
    img = get();
    points = [];
  }
}
