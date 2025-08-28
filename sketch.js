function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(0); // fondo negro

  // --- Círculo rojo/naranja arriba izquierda ---
  noStroke();
  fill(255, 69, 0); // naranja
  ellipse(70, 70, 160); // borde naranja
  fill(220, 0, 0); // rojo
  ellipse(70, 70, 140); // círculo rojo

  // --- Franja diagonal morada/blanca ---
  push();
  translate(width * 0.75, height * 0.5);
  drawStripedRect(150, 60, color(160, 100, 200), color(255));
  pop();

  // --- Barras inferiores ---
  let colors = [
    [255, 0, 0], [100, 150, 255], // roja y azul
    [255, 165, 0], [255, 0, 0],   // naranja y roja
    [255, 140, 0], [0, 0, 0],     // naranja y negro
    [0, 255, 0], [0, 0, 0]        // verde y negro
  ];

  let x = 0;
  let stripeWidth = width / colors.length;
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(x, height - 60, stripeWidth, 60);
    x += stripeWidth;
  }
}

// Función para franja diagonal
function drawStripedRect(w, h, col1, col2) {
  let stripeWidth = 10;
  for (let i = -w; i < w; i += stripeWidth) {
    fill((i / stripeWidth) % 2 == 0 ? col1 : col2);
    beginShape();
    vertex(i, -h / 2);
    vertex(i + stripeWidth, -h / 2);
    vertex(i + stripeWidth + h, h / 2);
    vertex(i + h, h / 2);
    endShape(CLOSE);
  }
}
