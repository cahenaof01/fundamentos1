//_____________________________CONTEXTO__________________________________


//imagenes

var foto1;
var foto2;
var foto3;
var foto4;
var foto5;
var foto6;
var foto7;
var foto8;
var foto9;
var foto10;
var foto16;
var foto17;
var foto18;
var foto19;
var foto20;
var foto21;
var foto22;
var foto23;
var foto24;
var foto25;
var foto26;
var foto27;
var foto28;
var foto29;
var foto30;
var foto31;


var emp1;
var emp2;
var emp3;
var emp4;
var emp5;
var emp6;
var emp7;
var emp8;
var emp9;
var emp10;

var mapa1;
var mapa2;
var mapa3;
var mapa4;
var mapa5;
var mapa6;
var mapa7;


var letra;



//variables

var contador = 0;
var j = 255;
var diameter = 400;
var lastAngle = 0
var posty = 50;
var p = 0;
var q = 0;
var amplitud1;


//precarga

function preload() {
  foto1 = loadImage('assets/01.png');
  foto2 = loadImage('assets/02.png');
  foto3 = loadImage('assets/03.png');
  foto4 = loadImage('assets/04.png');
  foto5 = loadImage('assets/05.png');
  foto6 = loadImage('assets/06.png');
  foto7 = loadImage('assets/07.png');
  foto8 = loadImage('assets/08.png');
  foto9 = loadImage('assets/09.png');
  foto10 = loadImage('assets/10.png');
  foto16 = loadImage('assets/16.png');
  foto17 = loadImage('assets/17.png');
  foto18 = loadImage('assets/fincasincasa.png');
  foto19 = loadImage('assets/fincacasa.png');
  foto20 = loadImage('assets/fondotriste.png');
  foto21 = loadImage('assets/familia.jpg');
  foto22 = loadImage('assets/esposatriste.png');
  foto23 = loadImage('assets/esposafeliz.png');
  foto24 = loadImage('assets/autoconsumo.png');
  foto25 = loadImage('assets/extractivas.png');
  foto26 = loadImage('assets/agricola.png');
  foto27 = loadImage('assets/parcelasincasa.png');
  foto28 = loadImage('assets/parcelaconcasa.png');
  foto29 = loadImage('assets/loteconmejoras.png');
  foto30 = loadImage('assets/bogota.png');
  foto31 = loadImage('assets/ciudad.png');

  mapa1 = loadImage('assets/mapa1.png');
  mapa2 = loadImage('assets/mapa2.png');
  mapa3 = loadImage('assets/mapa3.png');
  mapa4 = loadImage('assets/mapa4.png');
  mapa5 = loadImage('assets/mapa5.png');
  mapa6 = loadImage('assets/mapa6.png');
  mapa7 = loadImage('assets/mapa7.png');

  emp1 = loadImage('assets/asalariadoagricola.png');
  emp2 = loadImage('assets/empleadodomestico.png');
  emp3 = loadImage('assets/comerciante.png');
  emp4 = loadImage('assets/empleado.png');
  emp5 = loadImage('assets/funcionariopublico.png');
  emp6 = loadImage('assets/productoragricola.png');
  emp7 = loadImage('assets/profesor.png');
  emp8 = loadImage('assets/serviciosprofesionales.png');
  emp9 = loadImage('assets/vendedorambulante.png');
  emp10 = loadImage('assets/hogar.png');
  // emp10= loadImage('assets/asalariadoagricola.png');

  letra = loadFont('assets/Belgrano-Regular.ttf');

  mitabla = loadTable("assets/RNIAbandono.csv", 'csv');
  mitabla2 = loadTable("assets/DSAarmado.csv", 'csv');
  mitabla3 = loadTable("assets/Hectareas.csv", 'csv');
  mitabla4 = loadTable("assets/tierras.csv", 'csv');
  mitabla5 = loadTable("assets/ocupacion.csv", 'csv');


  cancion = loadSound('assets/andres1.mp3');
  cancion2 = loadSound('assets/Pajaritos.mp3');


}

function setup() {
  createCanvas(1280, 1024);
  //frameRate(5)

  /*
  */
  amplitud1 = new p5.Amplitude();
  amplitud1.setInput(cancion);

  cancion.setVolume(0.5);
  cancion.play();

  cancion2.setVolume(0.1);
  cancion2.play();


}

function draw() {
  background(255);


  var amp = map(amplitud1.getLevel(), 0, 1, 0, 200);




  if (frameCount <= 150) {
    image(foto31, 0, 0, 1280, 1024);
    fill(255);
    textFont(letra);
    textSize(60);

    text('DESPOJO Y ABANDONO', 100, 720)
    text('DE TIERRAS EN COLOMBIA', 100, 820)
  }

  //Quien es? / Composición familiar

  if (frameCount > 150 && frameCount <= 680) {

/*
    image(foto1, 0, 0, 1280, 1024);
    image(foto3, 400 - p, 500, 120, 100);
    image(foto4, 200 + p, 550, 90, 70);
    image(foto5, 400 + q, 600, 170, 150);
    image(foto6, 800 - p, 550, 180, 150);
    image(foto7, 800 + random(0, 5) - p, 850, 60, 60);
    image(foto16, 850 - p, 880 + random(0, 5), 20, 20);
    image(foto16, 870 - p, 880 + random(0, 5), 20, 20);
    image(foto16, 890 - p, 880 + random(0, 5), 20, 20);
    image(foto8, 530 + random(0, 1), 390, 40, 30);
    
  */
  	image(foto31, 0, 0, 1280, 1024);
    image(foto17, 530, 750, 80, 150);

    p = p + 0.3
    q = q + 0.1
    
		noStroke()
    ellipse(568, 790, 10, amp);

  }
  
  



}