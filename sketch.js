var PLAY = 1;
var END = 0;
var gameState = PLAY;

// Variables para las piezas
var pieza1, pieza2, pieza3, pieza4, pieza5, pieza6;
var px1, py1, px2, py2, px3, py3, px4, py4, px5, py5, px6, py6;
var ganaste = false;
var piezaArrastrando = null;

// Margen de tolerancia
var tolerancia = 25;

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

  // Crear las piezas del rompecabezas con las imágenes correspondientes
  pieza1 = createSprite(width * 0.2, height * 0.25, 150, 200);
  pieza1.addImage(pieza1Img);
  pieza1.setCollider("rectangle", 0, 0, 150, 200);

  pieza2 = createSprite(width * 0.5, height * 0.25, 150, 200);
  pieza2.addImage(pieza2Img);
  pieza2.setCollider("rectangle", 0, 0, 150, 200);

  pieza3 = createSprite(width * 0.8, height * 0.25, 150, 200);
  pieza3.addImage(pieza3Img);
  pieza3.setCollider("rectangle", 0, 0, 150, 200);

  pieza4 = createSprite(width * 0.2, height * 0.55, 150, 200);
  pieza4.addImage(pieza4Img);
  pieza4.setCollider("rectangle", 0, 0, 150, 200);

  pieza5 = createSprite(width * 0.5, height * 0.55, 150, 200);
  pieza5.addImage(pieza5Img);
  pieza5.setCollider("rectangle", 0, 0, 150, 200);

  pieza6 = createSprite(width * 0.8, height * 0.55, 150, 200);
  pieza6.addImage(pieza6Img);
  pieza6.setCollider("rectangle", 0, 0, 150, 200);

  // Posiciones correctas para cada pieza
  px1 = width * 0.2; py1 = height * 0.25;
  px2 = width * 0.5; py2 = height * 0.25;
  px3 = width * 0.8; py3 = height * 0.25;
  px4 = width * 0.2; py4 = height * 0.55;
  px5 = width * 0.5; py5 = height * 0.55;
  px6 = width * 0.8; py6 = height * 0.55;
}

// Función principal de dibujo
function draw() {
  background("#a7d8ff"); // Fondo azul suave
  drawSprites();

  // Lógica de juego
  if (gameState === PLAY) {
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
        gameState = END;
      }
      piezaArrastrando = null; // Resetear la pieza arrastrando
    }

    // Mostrar mensaje de "¡Ganaste!" si se ha ganado
    if (ganaste) {
      textSize(48);
      fill("#27ae60"); // Verde brillante
      textAlign(CENTER, CENTER);
      text("¡Ganaste!", width / 2, height / 2); // Centrado en la pantalla
    }
  }

  // Lógica de fin de juego
  if (gameState === END) {
    // Si el juego termina, mostrar el mensaje
    textSize(32);
    fill("#e74c3c"); // Rojo brillante
    textAlign(CENTER, CENTER);
    text("¡Fin del juego!", width / 2, height / 2 + 50);
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
