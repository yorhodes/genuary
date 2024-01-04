let img;
let x_offset;
let y_offset;

function preload() {
  img = loadImage("assets/retro_tv.jpeg");
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

function drawTexturableQuad(four_points) {
  four_points = four_points.sort((p1, p2) => (p1.y === p2.y) ? p1.x - p2.x : p1.y - p2.y);

  const bottom_points = four_points.slice(0, 2);
  const top_points = four_points.slice(2, 4);

  const [bottomLeft, bottomRight] = bottom_points.sort((p1, p2) => p1.x - p2.x);
  const [topLeft, topRight] = top_points.sort((p1, p2) => p1.x - p2.x);

  noStroke();
  beginShape();
  vertex(bottomLeft.x, bottomLeft.y, 0, 0);
  vertex(topLeft.x, topLeft.y, 0, 1);
  vertex(bottomRight.x, bottomRight.y, 1, 0);
  vertex(topRight.x, topRight.y, 1, 1);
  endShape();
}

let image_updated = false;
function draw() {
  for (let i = 0; i < points.length - 3; i += 4) {
    texture(img);
    drawTexturableQuad(points.slice(i, i + 4));
  }

  if (frameCount % 5 == 0) {
    img = get();
  }
}
