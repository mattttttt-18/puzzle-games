

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b7ac2be7-7f64-41cf-883c-f7b443dc8fad","784f5982-1d0c-48e3-952d-0c36a6732253","d5cc9190-9c8a-46f1-8d91-4587ff1b7efc","8f5b6b8d-abfd-467b-849d-073e3f88d3cb","6975f929-38c6-4353-a5c5-6a940df28fd5","a9c8585b-0c32-440e-81e4-edc123c23843"],"propsByKey":{"b7ac2be7-7f64-41cf-883c-f7b443dc8fad":{"name":"imagen3","sourceUrl":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/b7ac2be7-7f64-41cf-883c-f7b443dc8fad.png","frameSize":{"x":209,"y":209},"frameCount":1,"looping":true,"frameDelay":4,"version":"zza.xThOYb_wJuh1ndnIgBZE_PZmVW7l","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":209,"y":209},"rootRelativePath":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/b7ac2be7-7f64-41cf-883c-f7b443dc8fad.png"},"784f5982-1d0c-48e3-952d-0c36a6732253":{"name":"imagen2","sourceUrl":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/784f5982-1d0c-48e3-952d-0c36a6732253.png","frameSize":{"x":208,"y":209},"frameCount":1,"looping":true,"frameDelay":4,"version":"_oBuxYnYC7hy25Wm1i9FKzpwKhJrA0U_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":209},"rootRelativePath":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/784f5982-1d0c-48e3-952d-0c36a6732253.png"},"d5cc9190-9c8a-46f1-8d91-4587ff1b7efc":{"name":"imagen1","sourceUrl":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/d5cc9190-9c8a-46f1-8d91-4587ff1b7efc.png","frameSize":{"x":209,"y":209},"frameCount":1,"looping":true,"frameDelay":4,"version":"ayFjFe5k7FUSszuMtwCyS5KjJ6ait_HB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":209,"y":209},"rootRelativePath":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/d5cc9190-9c8a-46f1-8d91-4587ff1b7efc.png"},"8f5b6b8d-abfd-467b-849d-073e3f88d3cb":{"name":"imagen5","sourceUrl":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/8f5b6b8d-abfd-467b-849d-073e3f88d3cb.png","frameSize":{"x":208,"y":208},"frameCount":1,"looping":true,"frameDelay":4,"version":"1xjEn3qwP9hAKWuKDWrMCsq3suratT36","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":208},"rootRelativePath":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/8f5b6b8d-abfd-467b-849d-073e3f88d3cb.png"},"6975f929-38c6-4353-a5c5-6a940df28fd5":{"name":"imagen4","sourceUrl":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/6975f929-38c6-4353-a5c5-6a940df28fd5.png","frameSize":{"x":209,"y":208},"frameCount":1,"looping":true,"frameDelay":4,"version":"ebw6X2OpcE6iTpPHXrU.KBVbMPbm29J1","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":209,"y":208},"rootRelativePath":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/6975f929-38c6-4353-a5c5-6a940df28fd5.png"},"a9c8585b-0c32-440e-81e4-edc123c23843":{"name":"imagen6","sourceUrl":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/a9c8585b-0c32-440e-81e4-edc123c23843.png","frameSize":{"x":209,"y":208},"frameCount":1,"looping":true,"frameDelay":4,"version":".cB8UHJ3Z3VrSS4GhNZjQ5aQafRYf40I","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":209,"y":208},"rootRelativePath":"assets/v3/animations/QdWRqMxwYYrkwdQxRTEtPvPu-VmHD1FFWb4a4xd1WtE/a9c8585b-0c32-440e-81e4-edc123c23843.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Variables para las piezas
var pieza1, pieza2, pieza3, pieza4, pieza5, pieza6;
var px1, py1, px2, py2, px3, py3, px4, py4, px5, py5, px6, py6;
var ganaste = false;

// Margen de tolerancia
var tolerancia = 10; // Puedes ajustar este valor según sea necesario

// Crear las piezas del rompecabezas con las imágenes correspondientes
pieza1 = createSprite(50, 50, 100, 100);
pieza1.setAnimation("imagen1");
pieza1.setCollider("rectangle", 0, 0, 100, 100);

pieza2 = createSprite(150, 50, 100, 100);
pieza2.setAnimation("imagen2");
pieza2.setCollider("rectangle", 0, 0, 100, 100);

pieza3 = createSprite(250, 50, 100, 100);
pieza3.setAnimation("imagen3");
pieza3.setCollider("rectangle", 0, 0, 100, 100);

pieza4 = createSprite(50, 150, 100, 100);
pieza4.setAnimation("imagen4");
pieza4.setCollider("rectangle", 0, 0, 100, 100);

pieza5 = createSprite(150, 150, 100, 100);
pieza5.setAnimation("imagen5");
pieza5.setCollider("rectangle", 0, 0, 100, 100);

pieza6 = createSprite(250, 150, 100, 100);
pieza6.setAnimation("imagen6");
pieza6.setCollider("rectangle", 0, 0, 100, 100);

// Posiciones correctas
px1 = 66.67;
py1 = 100;

px2 = 200;
py2 = 100;

px3 = 333.33;
py3 = 100;

px4 = 66.67;
py4 = 300;

px5 = 200;
py5 = 300;

px6 = 333.33;
py6 = 300;

// Variable para almacenar la pieza que se está arrastrando
var piezaArrastrando = null;

// Función principal de dibujo
function draw() {
    background("yellow");
    drawSprites();

    // Mover las piezas con el mouse
    if (mouseIsPressed) {
        // Si no hay pieza arrastrando, verificar si se hace clic en una pieza
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

        // Mover la pieza arrastrando
        if (piezaArrastrando !== null) {
            piezaArrastrando.x = World.mouseX;
            piezaArrastrando.y = World.mouseY;
        }
    } else if (piezaArrastrando !== null) {
        // Si se suelta el mouse, dejar de arrastrar la pieza y verificar posición
        if (checkWin()) {
            ganaste = true;
            colocarPiezas(); // Colocar las piezas en la posición correcta
        }
        piezaArrastrando = null; // Resetear la pieza arrastrando
    }

    // Mostrar mensaje de "¡Ganaste!" si se ha ganado
    if (ganaste) {
        textSize(32);
        fill(0);
        textAlign(CENTER);
        text("¡Ganaste!", 400 / 2, 400 / 2);
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

// Función para colocar las piezas en la posición correcta
function colocarPiezas() {
    pieza1.x = px1;
    pieza1.y = py1;

    pieza2.x = px2;
    pieza2.y = py2;

    pieza3.x = px3;
    pieza3.y = py3;

    pieza4.x = px4;
    pieza4.y = py4;

    pieza5.x = px5;
    pieza5.y = py5;

    pieza6.x = px6;
    pieza6.y = py6;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
