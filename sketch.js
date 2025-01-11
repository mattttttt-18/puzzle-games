var pieza1, pieza2, pieza3, pieza4, pieza5, pieza6;
var px1, py1, px2, py2, px3, py3, px4, py4, px5, py5, px6, py6;
var ganaste = false;
var piezaArrastrando = null;

// Margen de tolerancia
var tolerancia = 30; // Puedes ajustar este valor según sea necesario

// Preload para cargar imágenes
function preload() {
  // Cargar las imágenes de las piezas
  pieza1Img = loadImage("pieza1.png");
  pieza2Img = loadImage("pieza2.png");
  pieza3Img = loadImage("pieza3.png");
  pieza4Img = loadImage("pieza4.png");
  pieza5Img = loadImage("pieza5.png");
  pieza6Img = loadImage("pieza6.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Se ajusta el tamaño al de la ventana

  // Generar posiciones aleatorias para las piezas, separadas más
  var randomX1 = random(50, width - 300);
  var randomY1 = random(50, height - 300);
  pieza1 = createSprite(randomX1, randomY1, 120, 180);
  pieza1.addImage(pieza1Img);
  pieza1.setCollider("rectangle", 0, 0, 120, 180);

  var randomX2 = random(50, width - 300);
  var randomY2 = random(50, height - 300);
  pieza2 = createSprite(randomX2, randomY2, 120, 180);
  pieza2.addImage(pieza2Img);
  pieza2.setCollider("rectangle", 0, 0, 120, 180);

  var randomX3 = random(50, width - 300);
  var randomY3 = random(50, height - 300);
  pieza3 = createSprite(randomX3, randomY3, 120, 180);
  pieza3.addImage(pieza3Img);
  pieza3.setCollider("rectangle", 0, 0, 120, 180);

  var randomX4 = random(50, width - 300);
  var randomY4 = random(50, height - 300);
  pieza4 = createSprite(randomX4, randomY4, 120, 180);
  pieza4.addImage(pieza4Img);
  pieza4.setCollider("rectangle", 0, 0, 120, 180);

  var randomX5 = random(50, width - 300);
  var randomY5 = random(50, height - 300);
  pieza5 = createSprite(randomX5, randomY5, 120, 180);
  pieza5.addImage(pieza5Img);
  pieza5.setCollider("rectangle", 0, 0, 120, 180);

  var randomX6 = random(50, width - 300);
  var randomY6 = random(50, height - 300);
  pieza6 = createSprite(randomX6, randomY6, 120, 180);
  pieza6.addImage(pieza6Img);
  pieza6.setCollider("rectangle", 0, 0, 120, 180);

  // Posiciones correctas para cada pieza (centradas)
  px1 = width / 2 - 180; py1 = height / 2 - 90;
  px2 = width / 2 - 60; py2 = height / 2 - 90;
  px3 = width / 2 + 60; py3 = height / 2 - 90;
  px4 = width / 2 - 180; py4 = height / 2 + 90;
  px5 = width / 2 - 60; py5 = height / 2 + 90;
  px6 = width / 2 + 60; py6 = height / 2 + 90;
}

// Función principal de dibujo
function draw() {
  background("lightblue");
  drawSprites();

  // Lógica de juego
  if (!ganaste) {
    // Mover las piezas con el mouse
    if (mouseIsPressed) {
      if (piezaArrastrando === null) {
        if (mousePressedOver(pieza1)) {
          piezaArrastrando = pieza1;
        } else if (mousePressedOver(pieza2)) {
          piezaArrastrando = pieza2;
        } else if (mousePressedOver(pieza3)) {
          piezaArrastrando = pieza3;
        } else if (mousePressedOver(pieza4)) {
          piezaArrastrando = pieza4;
        } else if (mousePressedOver(pieza5)) {
          piezaArrastrando = pieza5;
        } else if (mousePressedOver(pieza6)) {
          piezaArrastrando = pieza6;
        }
      }

      if (piezaArrastrando !== null) {
        piezaArrastrando.x = mouseX;
        piezaArrastrando.y = mouseY;
      }
    } else if (piezaArrastrando !== null) {
      if (checkWin()) {
        ganaste = true;
      }
      piezaArrastrando = null; // Resetear la pieza arrastrando
    }

    // Mostrar mensaje de "¡Ganaste!" si se ha ganado
    if (ganaste) {
      textSize(48);
      fill("green");
      textAlign(CENTER, CENTER);
      text("¡Ganaste!", width / 2, height / 2); // Centrado en la pantalla
    }
  }
}

// Función para verificar si todas las piezas están en la posición correcta
function checkWin() {
  return (
    isInRange(pieza1.x, px1) && isInRange(pieza1.y, py1) &&
    isInRange(pieza2.x, px2) && isInRange(pieza2.y, py2) &&
    isInRange(pieza3.x, px3) && isInRange(pieza3.y, py3) &&
    isInRange(pieza4.x, px4) && isInRange(pieza4.y, py4) &&
    isInRange(pieza5.x, px5) && isInRange(pieza5.y, py5) &&
    isInRange(pieza6.x, px6) && isInRange(pieza6.y, py6)
  );
}

// Función para verificar si una posición está dentro del rango de tolerancia
function isInRange(value, target) {
  return Math.abs(value - target) <= tolerancia;
}
