let trazos = [];
let cantidadTrazos = 27;

let indiceDibujo = [];
let xDibujo = [];
let yDibujo = [];

let altoVisible = [];

let cantidadDibujos = 0;

let fondos = [] ; 
let fondoActual = 0; 

let maxTrazos = 15; 

function preload() {

  for (let i = 1; i <= cantidadTrazos; i++) {

    trazos[i] = loadImage("trazos/trazo" + i + ".png");

  }

  fondos [0] = loadImage ("fondos/fondolila.png") ;
  fondos [1] = loadImage ("fondos/fondoamarillo.png") ;
  fondos [2] = loadImage ("fondos/fondoceleste.png") ;
  fondos [3] = loadImage ("fondos/fondomarron.png") ;
  fondos [4] = loadImage ("fondos/fondonaranja.png") ;
  fondos [5] = loadImage ("fondos/fondorojo.png") ;

}

function setup() {

  createCanvas(720, 1080);

  imageMode(CORNER);

}

function draw() {

  background(255);
  image (fondos [fondoActual],0,0,width,height) ; 

  for (let i = 0; i < cantidadDibujos; i++) {

    let numeroTrazo = indiceDibujo[i];

    let imagenTrazo = trazos[numeroTrazo];

    let anchoTrazo = imagenTrazo.width;

    let altoTrazo = imagenTrazo.height;

    let posicionX = xDibujo[i];

    let posicionY = yDibujo[i];

    let alturaActual = altoVisible[i];



    copy(

      imagenTrazo,

      0,
      0,

      anchoTrazo,
      alturaActual,

      posicionX - anchoTrazo / 2,
      posicionY - altoTrazo / 2,

      anchoTrazo,
      alturaActual

    );



    if (alturaActual < altoTrazo) {

      altoVisible[i] = altoVisible[i] + 110;

    }

    else {

      altoVisible[i] = altoTrazo;

    }

  }

  

}

function mousePressed() {
  if (cantidadDibujos < maxTrazos) {

  indiceDibujo[cantidadDibujos] =
  int(random(1, cantidadTrazos + 1));



  let margenHorizontal = width * 0.3;

  let margenVertical = height * 0.3;



  xDibujo[cantidadDibujos] =
  random(margenHorizontal, width - margenHorizontal);



  yDibujo[cantidadDibujos] =
  random(margenVertical, height - margenVertical);



  altoVisible[cantidadDibujos] = 0;



  cantidadDibujos++; }

}

function keyPressed() {

  if (key == "r" || key == "R") {

    if (cantidadDibujos > 0) {

      cantidadDibujos--;

    }

  }
  if (key === ' '){
    fondoActual++;
  }

 
  if ( fondoActual >= fondos.length) 
    { fondoActual=0 ;

  }
  

}