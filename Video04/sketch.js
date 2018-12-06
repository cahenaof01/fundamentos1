// imagenes

var foto1;

var foto3;
var foto4;
var foto5;
var foto6;
var foto7;
var foto8;


var foto10;
var foto11;
var foto12;
var foto13;
var foto15;
var foto16;
var foto17;
var foto18;
var foto19;
var foto20;
//var foto21;
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
var foto32;
var foto33;
var foto34;
var foto35;
var foto36;

var jeep;


var contador = 0;
var j = 255;
var diameter = 400;
var lastAngle = 0
var posty = 50;
var p = 0;
var q = 0;
var r=0;
var s=0;
var t=0;
var u=0;
var amplitud1;
var vel=0;
var mov=0;

var letra;

function preload() {

  foto1 = loadImage('assets/01.png');
 
  foto3 = loadImage('assets/03.png');
  foto4 = loadImage('assets/04.png');
  foto5 = loadImage('assets/05.png');
  foto6 = loadImage('assets/06.png');
  foto7 = loadImage('assets/07.png');
  foto8 = loadImage('assets/08.png');

  
  
  foto10 = loadImage('assets/10.png');
  foto11 = loadImage('assets/11.png');
  foto12 = loadImage('assets/12.png');
  foto13 = loadImage('assets/13.png');
  foto15 = loadImage('assets/15.png');
  foto16 = loadImage('assets/16.png');
  foto17 = loadImage('assets/17.png');
  foto18 = loadImage('assets/18.png');
  foto19 = loadImage('assets/19.png');
  foto20 = loadImage('assets/20.png');
  //foto21 = loadImage('assets/01.jpg');
  foto22 = loadImage('assets/22.png');
  foto23 = loadImage('assets/fondociudad.png');
  foto24 = loadImage('assets/fondotriste.png');
  foto25 = loadImage('assets/esposatriste.png');
  foto26 = loadImage('assets/actorarmado.png');
  foto27 = loadImage('assets/actorarmado2.png');
  foto28 = loadImage('assets/actorarmado3.png');
  foto29 = loadImage('assets/fuego.png');
  foto30 = loadImage('assets/humo.png');
	foto31 = loadImage('assets/tumbleweed.png');
  foto32 = loadImage('assets/hombre.png');
  foto33 = loadImage('assets/stadium.png');
  foto34 = loadImage('assets/cultivos3.png');
  foto35 = loadImage('assets/cultivos2.png');
  foto36 = loadImage('assets/feomitad.png');
  
  jeep = loadImage('assets/jeep.png');
  
  letra = loadFont('assets/Belgrano-Regular.ttf');
  
  mitabla = loadTable("assets/RNIAbandono.csv", 'csv');
  //Desplazamiento según actor armado
  mitabla2 = loadTable("assets/DSAarmado.csv", 'csv');
  //foto2=createImg("assets/campesino.gif");
  mitabla3 = loadTable("assets/Hectareas.csv", 'csv');

  cancion = loadSound('assets/andres3.mp3');
  cancion2 = loadSound('assets/Marcha.mp3');
}

function setup() {
  createCanvas(1280, 1024);

  amplitud1 = new p5.Amplitude();
 amplitud1.setInput(cancion);

  cancion.setVolume(1);
cancion.play();

  cancion2.setVolume(0.3);
  cancion2.play();

}

function draw() {
  background(255);


  var amp = map(amplitud1.getLevel(), 0, 1, 0, 200);


 
/// actores armados
  if (frameCount > 90 && frameCount <= 360) {

    image(foto18, 0, 0, 1280, 1024);
    image(foto19, 800 - p/10, 100, 600, 150);
    image(foto19, 1200 - p/20, 150, 600, 150);

    p = p + 10;

    image(foto26, 0 + p, 700, 220, 300);
 
    fill(0);
    textFont(letra);
    textSize(60);

    
    text('Autodefensas', 100, 200)
    text('37%', 100, 320)

    fill(255, 200);
    
    rect(800,height*0.8-map(37/2,0 ,100, 0, height),60,map(37/2,0 ,100, 0, height));
    
    fill(0);
    textFont(letra);
    textSize(20);
    text('Autodefensas', 880, 700)
    text('37%', 810, 700)

  }
  
  if (frameCount >360 && frameCount <= 390) {

    
    image(foto18, 0, 0, 1280, 1024);
    image(foto19, 800 - q/10, 100, 600, 150);
    image(foto19, 1200 - q/20, 150, 600, 150);

    q = q + 10

   // image(foto26, 0 + p * 0.3, 700, 220, 300);
    image(foto27, q, 700, 320, 340);
   // image(foto28,-400 + p, 670, 190, 320);

  	fill(0);
    textFont(letra);
    textSize(60);
      
   	text('Guerrilla', 100, 200)
    text('11%', 100, 320)


    fill(255, 200);
    
    rect(800,height*0.8-map(37/2,0 ,100, 0, height),60,map(37/2,0 ,100, 0, height));

    fill(150, 200);
      
   rect(800,height*0.8-map(48/2,0 ,100, 0, height),60,map(11/2,0 ,100, 0, height));
      
    fill(0);
    textFont(letra);
    textSize(20);
    text('Autodefensas', 880, 700)
    text('37%', 810, 700)

    fill(0);
    textFont(letra);
    textSize(20);
    text('Guerrilla', 880, 610)
    text('11%', 810, 610)

  }
  
  if (frameCount > 390 && frameCount <= 460) {

    
    image(foto18, 0, 0, 1280, 1024);
    image(foto19, 800 - r/10, 100, 600, 150);
    image(foto19, 1200 - r/20, 150, 600, 150);

    r = r + 10

   // image(foto26, 0 + p * 0.3, 700, 220, 300);
    //image(foto27, -250 + p * 0.7, 670, 330, 360);
   image(foto28, 0 + r, 700, 220, 300);

  	fill(0);
    textFont(letra);
    textSize(60);
      
   	text('Fuerza Pública', 100, 200)
    text('25%', 100, 320)


    fill(255, 200);
    
    rect(800,height*0.8-map(37/2,0 ,100, 0, height),60,map(37/2,0 ,100, 0, height));

    fill(150, 200);
      
    rect(800,height*0.8-map(48/2,0 ,100, 0, height),60,map(11/2,0 ,100, 0, height));
      
    fill(100, 200);
      
    rect(800,height*0.8-map(73/2,0 ,100, 0, height),60,map(25/2,0 ,100, 0, height));
      
    fill(0);
    textFont(letra);
    textSize(20);
    text('Autodefensas', 880, 700)
    text('37%', 810, 700)
      
    fill(0);
    textFont(letra);
    textSize(20);
    text('Guerrilla', 880, 610)
    text('11%', 810, 610)
      
    fill(0);
    textFont(letra);
    textSize(20);
    text('Fuerza Pública', 880, 510)
    text('25%', 810, 510)
   

  }
  
	if (frameCount > 460 && frameCount <= 920) {

    
    image(foto18, 0, 0, 1280, 1024);
    image(foto19, 800 - s/10, 100, 600, 150);
    image(foto19, 1200 - s/20, 150, 600, 150);

    s = s + 10

   // image(foto26, 0 + p * 0.3, 700, 220, 300);
    //image(foto27, -250 + p * 0.7, 670, 330, 360);
   image(foto31, 0 + s, 800, 150, 150);

  	fill(0);
    textFont(letra);
    textSize(60);
      
   	text('No identifica', 100, 200)
    text('27%', 100, 320)


    fill(255, 200);
    
    rect(800,height*0.8-map(37/2,0 ,100, 0, height),60,map(37/2,0 ,100, 0, height));

    fill(150, 200);
      
    rect(800,height*0.8-map(48/2,0 ,100, 0, height),60,map(11/2,0 ,100, 0, height));
      
    fill(100, 200);
      
    rect(800,height*0.8-map(73/2,0 ,100, 0, height),60,map(25/2,0 ,100, 0, height));
    
    fill(50, 200);
    
    rect(800,height*0.8-map(100/2,0 ,100, 0, height),60,map(27/2,0 ,100, 0, height));
      
    fill(0);
    textFont(letra);
    textSize(20);
    text('Autodefensas', 880, 700)
    text('37%', 810, 700)
      
    fill(0);
    textFont(letra);
    textSize(20);
    text('Guerrilla', 880, 610)
    text('11%', 810, 610)
   
    fill(0);
    textFont(letra);
    textSize(20);
    text('Fuerza Pública', 880, 510)
    text('25%', 810, 510)
   
    fill(0);
    textFont(letra);
    textSize(20);
    text('No identifica', 880, 390)
    text('27%', 810, 390)
  
  }
  
//Victimas de desplazamiento
  
	if (frameCount > 920 && frameCount <= 1030) {

   image(foto23, 0, 0, 1280, 1024);
    fill(255, 200);
    rect(0, 0, 1280, 1024);
    
   var posrecx1 = 50;

    for (var i = 2; i < mitabla.getColumnCount() - 1; i++) {

      var valor2 = mitabla.get(1, i);
      fill(map(valor2, 0, 3000, 0, 255), map(valor2, 0, 3000, 0, 20), map(valor2, 0, 3000, 0, 100))
      rect(posrecx1, 800 - valor2 / 2.93, 40, map(valor2, 0, 3000, 0, height));
     
      fill(0);
     textSize(15);
			text(valor2, posrecx1, 300)
      posrecx1 = posrecx1 + 45;

    }
    
     var posrecx2 = 50;

   for (var i = 2; i < mitabla.getColumnCount() - 1; i++) {
      var valor2 = mitabla.get(0, i);
      fill(0);
     textSize(15);
     text(valor2, posrecx2, 850)
    // rect(posrecx, 600-valor2/3.8, 20, map(valor2, 0, 3000, 0, height));

      posrecx2 = posrecx2 + 45;

 }

    
    fill(0);
   textFont(letra);
    textSize(40);
    text('Victimas', 100, 100)
    text('Desplazamiento', 100, 150)
 }
  
//Estadio el campin
  
 if (frameCount > 1030 && frameCount <= 1220){
    image(foto23, 0, 0, 1280, 1024);
    
  	fill(255, 200);
    rect(0, 0, 1280, 1024);
    
    image(foto32, 500, 500, 300, 300);
    
    fill(0);
    textFont(letra);
    textSize(60);
   
    text('11.9%', 200, 550)
    text('Colombianos', 100, 650)
 
    
  }
  
 if (frameCount > 1220 && frameCount <= 1380){
   image(foto23, 0, 0, 1280, 1024);
    
  	fill(255, 200);
   rect(0, 0, 1280, 1024);
    
   image(foto32, 500, 500, 300, 300);
    
    fill(0);
    textFont(letra);
   textSize(60);
   
   text('5,611,984 ', 200, 550)
   
   text('Personas', 800, 650)
}
  
 if (frameCount > 1380 && frameCount <= 1500){
   image(foto23, 0, 0, 1280, 1024);
    
  	fill(255, 200);
 rect(0, 0, 1280, 1024);
    
   image(foto32, 500, 500, 300, 300);
    image(foto33, 200, 500, 300, 300);
    
    fill(0);
   textFont(letra);
    textSize(60);
   
    text('Estadio el', 200, 250)
    text('Campin', 200, 350)
   
   text('5.611.984', 800, 550)
    text('Personas', 800, 650)
  }
  
  if (frameCount > 1500 && frameCount <= 1530){
    image(foto23, 0, 0, 1280, 1024);
    
  	fill(255, 200);
    rect(0, 0, 1280, 1024);
    
    image(foto32, 500, 500-u, 300, 300);
    image(foto33, 200, 500-u, 300, 300);
    
    u=u+10;
       
    fill(0);
   textFont(letra);
    textSize(60);
   
    text('Estadio el', 200, 250-u)
   text('Campin', 200, 350-u)
   
    text('5.611.984', 800, 550-u)
    text('Personas', 800, 650-u)
 }
  
  if (frameCount > 1530 && frameCount <= 1720){
    image(foto23, 0, 0, 1280, 1024);
    
  	fill(255, 200);
    rect(0, 0, 1280, 1024);
    
    image(foto32, 500, 500-u, 300, 300);
    image(foto33, 200, 500-u, 300, 300);
    

       
    fill(0);
  textFont(letra);
    textSize(60);
   
    text('Estadio el', 200, 250-u)
    text('Campin', 200, 350-u)
   
    text('5.611.984', 800, 550-u)
    text('Personas', 800, 650-u)
        
        
    textSize(200);
   var pox = 140;
    text('¡150.000!', 150, 650)
			for (var i =0; i<11;i++){
        
     image(foto33, pox, 850, 50, 50);
        
        pox=pox+100
      }
 }
  
  //Numero de hectareas perdidas según autores
  
   if (frameCount > 1720 && frameCount <= 2300) {

   image(foto23, 0, 0, 1280, 1024);
    fill(255, 150);
    rect(0, 0, 1280, 1024)
     
     
		fill(0);
    textFont(letra);
    textSize(60);
 		text('Hectareas', 800, 250)
    text('Abandonadas', 800, 350)

    fill(255);
   // noStroke()

       var posrecy1 = 200;
    
      for (var i = 1; i < mitabla3.getColumnCount(); i++) {
      var texto2 = mitabla3.get(0, i);
      var valor4 = mitabla3.get(1, i);
      fill(map(valor4, 0, 20, 0, 255), map(valor4, 0, 20, 0, 20), map(valor4, 0, 3000, 0, 100))
     rect(200, posrecy1, map(valor4, 0, 20, 0, width), 30);
     stroke(1);
     posrecy1 = posrecy1 + 100;
     fill(0);
      noStroke();
    	textFont(letra);
    textSize(20);
      text(texto2, 100, posrecy1 - 20)
     fill(255);
        textSize(25);
       text(valor4, 210, posrecy1 - 75);

   }

  }
  
  
//perdida de cultivos
  
 if (frameCount > 2300 && frameCount <= 2900){
  
  image(foto34, 0, 0, 1280, 1024);
    fill(255, 200);

        

    
 }
  
 if (frameCount > 2900 && frameCount <= 3300){
  
  image(foto34, 0, 0, 1280, 1024);
    fill(255, 200);

        
    fill(0);
    textFont(letra);
    textSize(60);
   text('43%', 250, 100)
   text('Poseian', 250, 200)
  
  }
  
  if (frameCount > 3300 && frameCount <=3550){
  
   image(foto34, 0, 0, 1280, 1024);
      
    fill(0);
    textFont(letra);
    textSize(60);
   text('43%', 250, 100)
    text('Poseian', 250, 200)
    text('Cultivos', 250, 300)
      
    fill(255, 200);
    rect(0, 0, 1280, 1024);
  	image(foto35, 630, 0, 640, 1024);
    
          
    fill(0);
    textFont(letra);
    text('96%', 750, 100)
  text('Perdieros', 750, 200)
   text('sus Cultivos', 750, 300)
    
  }
  
   //escenario con Animalitos
 // ________________________________________________
  
  
  if (frameCount >3550 && frameCount <= 3600) {


    image(foto1, 0, 0, 1280, 1024);
   image(foto3, 200 - p, 500, 120, 100);
    image(foto4, 200 + p, 550, 90, 70);
    image(foto5, 400 + q, 600, 170, 150);
    image(foto6, 300 - p, 550, 180, 150);
    image(foto7, 200 + random(0, 5) - p, 850, 60, 60);
    image(foto16, 350 - p, 880 + random(0, 5), 20, 20);
    image(foto16, 370 - p, 880 + random(0, 5), 20, 20);
    image(foto16, 490 - p, 880 + random(0, 5), 20, 20);
    image(foto8, 130 + random(0, 1), 390, 40, 30);
    image(foto17, 530, 450, 80, 150);

    p = p + 0.3
    q = q + 0.1
    


  }
  
 if (frameCount > 3600 && frameCount <= 3650) {

 image(foto1, 0, 0, 1280, 1024);
    image(foto3, 200 - p, 500, 120, 100);
   image(foto4, 200 + p, 550, 90, 70);
   image(foto5, 100 + q, 600, 170, 150);
  image(foto6, 300 - p, 550, 180, 150);
   image(foto7, 200 + random(0, 5) - p, 850, 60, 60);
   image(foto16, 350 - p, 880 + random(0, 5), 20, 20);
   image(foto16, 390 - p, 880 + random(0, 5), 20, 20);
    image(foto8, 130 + random(0, 1), 390, 40, 30);
   image(foto17, 530, 450, 80, 150);

    p = p + 0.3
  q = q + 0.1
    
    fill(255, 200);
   rect(0, 0, 1280, 1024);
   
    fill(0);
	  text('94%', 150, 100)
    text('abandonaron', 150, 200)
    text('la tierra', 150, 300)

 }
  
 if (frameCount > 3650 && frameCount <= 3800) {


  image(foto1, 0, 0, 1280, 1024);
    image(foto3, 200 - p, 500, 120, 100);
   image(foto4, 200 + p, 550, 90, 70);
   image(foto5, 100 + q, 600, 170, 150);
   image(foto6, 300 - p, 550, 180, 150);
    image(foto7, 200 + random(0, 5) - p, 850, 60, 60);
   image(foto16, 350 - p, 880 + random(0, 5), 20, 20);
  image(foto16, 370 - p, 880 + random(0, 5), 20, 20);
   image(foto16, 390 - p, 880 + random(0, 5), 20, 20);
    image(foto8, 130 + random(0, 1), 390, 40, 30);
   // esto no image(foto17, 530, 450, 80, 150);

   p = p + 0.3
  q = q + 0.1
    
    fill(255, 200);
   rect(0, 0, 1280, 1024);
    
  fill(0);
	  text('94%', 150, 100)
    text('Abandonaron', 150, 200)
   text('La tierra', 150, 300)
    
  image(foto36, 630, 0, 640, 1024);
    
          
    fill(0);
  textFont(letra);
   text('92%', 750, 100)
   text('Perdieros', 750, 200)
   text('sus Animales', 750, 300)

 }
  
//Campesina llorando
  
  if (frameCount > 3800 && frameCount <= 4000) {
  image(foto24, 0, 0, 1280, 1024);
  	image(foto29, 600, 500, 60+random(-3,3), 60+random(-2,2));
   image(foto29, 500, 500, 30+random(-3,3), 30+random(-2,2));
 image(foto29, 500, 400, 40+random(-3,3), 40+random(-2,2));
  image(foto29, 400, 550, 30+random(-3,3), 30+random(-2,2));
    image(foto29, 450, 600, 20+random(-3,3), 20+random(-2,2));
   image(foto30, 450, 290, 90+random(-3,3), 120+random(-3,3));
    
    
 }
   
 if (frameCount > 4000 && frameCount <= 4050) {
 image(foto24, 0, 0, 1280, 1024);
  	image(foto29, 600, 500, 60+random(-3,3), 60+random(-2,2));
    image(foto29, 500, 500, 30+random(-3,3), 30+random(-2,2));
   image(foto29, 500, 400, 40+random(-3,3), 40+random(-2,2));
  image(foto29, 400, 550, 30+random(-3,3), 30+random(-2,2));
   image(foto29, 450, 600, 20+random(-3,3), 20+random(-2,2));
   image(foto30, 450, 290, 90+random(-3,3), 120+random(-3,3));
      
 image(foto25, 200, 500, 180, 460);
      
  }
  
	if (frameCount > 4050 && frameCount <=4300) {
  image(foto24, 0, 0, 1280, 1024);
  	image(foto29, 600, 500, 60+random(-3,3), 60+random(-2,2));
  image(foto29, 500, 500, 30+random(-3,3), 30+random(-2,2));
   image(foto29, 500, 400, 40+random(-3,3), 40+random(-2,2));
  image(foto29, 400, 550, 30+random(-3,3), 30+random(-2,2));
   image(foto29, 450, 600, 20+random(-3,3), 20+random(-2,2));
  image(foto30, 450, 290, 90+random(-3,3), 120+random(-3,3));
      
  image(foto25, 200-t, 500+t, 180, 460);
      
    t=t+5;
      
 }
    
//Jeep con los corotos
  if (frameCount > 4300 && frameCount <= 4500) {

    image(foto23, 0, 0, 1280, 1024);
   	image(jeep, 250+vel*5, 700-vel, 240-vel*0.5, 400-vel);
    
   vel=vel+1;
  }
  
 if (frameCount > 4500 && frameCount <= 5700) {

   fill(0);
    rect(0, 0, 1280, 1024);
  }
  
  //Viejito
if (frameCount <= 5500) {

  noStroke()
  fill(255, 90);
  ellipse(1280, 1024, 700, 600);
  image(foto10, 1050, 800, 200, 200);
   
   

   fill(255);
    ellipse(1146, 901, 23, amp);
      
}

//esto no
  /*
 if (frameCount > 700 && frameCount <= 800){
  
   image(foto34, 0, 0, 1280, 1024);
    fill(255, 200);
    rect(0, 0, 1280, 1024);
    
    
  }
 
  
  

  }
  

    
  if (frameCount > 140 && frameCount <= 160) {

    image(foto23, 0, 0, 1280, 1024);
   	image(jeep, 250+vel*5, 700-vel, 240-vel*0.5, 400-vel);
    
    vel=vel+1;
  }
  


 
   
  
    

  
  
 
/*
  if (frameCount > 300 && frameCount < 400) {

    for (var i = 1; i < mitabla2.getColumnCount(); i++) {
      //var gray = map(i, 0, data.length, 0, 255);

      //fill(gray);
      var angulo = mitabla2.get(1, i);
      var angles = map(angulo, 0, 100, 0, 360)
      var gray = map(angulo, 0, 100, 0, 255);
      noStroke();
      fill(gray, map(angulo, 0, 100, 0, 20), map(angulo, 0, 100, 0, 100));
      arc(width / 2, height / 2, diameter, diameter, radians(lastAngle), radians(lastAngle) + radians(angles));
      //print(lastAngle);
      lastAngle = lastAngle + angles;
      //print(angles)

      x1 = width * 0.45 - 300 * cos(radians(lastAngle + 180))
      y1 = height / 2 - 300 * sin(radians(lastAngle + 180))
      var texto = mitabla2.get(0, i);
      fill(0)
      textSize(20);
      text(texto, x1, y1)
      // print(texto);


    }

  }

  if (frameCount > 400 && frameCount < 500) {

   
   
  }
*/
  
}


