var foto1;
var foto2;
var foto3;
var foto4;
var cancion;
var amplitud1;
var des = 0;
var t = 0;
var x;
var y;
var microfono;
var pl = 0;
var ancho=40;




function preload() {
  foto1 = loadImage('assets/kanka.jpg');
  foto2 = loadImage('assets/voice.png');
  foto3 = loadImage('assets/teclado.png');
  foto4 = loadImage('assets/mouse.png');
  //miFuenteRoboto = loadFont('assets/Roboto-Bold.ttf');
  cancion = loadSound('assets/ref.mp3');
}

function setup() {
  createCanvas(1000, 800);

  amplitud1 = new p5.Amplitude();
  amplitud1.setInput(cancion);

  microfono = new p5.AudioIn();
  microfono.start();

}

function draw() {

  pl = pl + 0.5;

  if (frameCount > 130 && cancion.isPlaying() == false) {
    //miCancionsita.play();
    //var tTotal = cancion.duration();
    //miCancionsita.jump(tTotal/2);
    cancion.play();
  }




  //tint(255, 0, 150);
  if (cancion.currentTime() < 21.5) {
    background(255);
  }

  if (frameCount < 120) {
    image(foto1, 200, 100, 600, 600);

    fill(0);
    textSize(24);
    text("El kanka - No jodan la marrana", 460, 725);
  }


  if (cancion.currentTime() > 0 && cancion.currentTime() < 21.5) {
    image(foto2, 900, 700, 80, 80);
  }

  //Circulos microfono
  if (cancion.currentTime() > 0 && cancion.currentTime() < 21.5) {
    //for(var i = 0; i < 400; i = i + 10){
    //var a1=random(0,height);
    //var b1=random(0,width);

    var mic = map(microfono.getLevel(), 0, 1, 0, 400 + pl);

    fill(255, 0, 0, 50);
    ellipse(width * 0.3, height * 0.8, mic, mic);

    fill(0, 255, 0, 50);
    ellipse(width * 0.8, height * 0.3, mic, mic);

  }

  //circulos crecientes -circulo 1.
  if (cancion.currentTime() < 21.5) {
    var amp = map(amplitud1.getLevel(), 0, 1, 0, 700 + pl);
    fill(255, 0, 0);
    noStroke()
    ellipse(width / 2, height / 2, amp, amp);

  }

  //circulos crecientes -circulo 2.
  if (cancion.currentTime() > 4.5 && cancion.currentTime() < 21.5) {
    var amp2 = map(amplitud1.getLevel(), 0, 1, 0, 500 + pl);
    fill(255, 255, 0, 50);
    noStroke()
    ellipse(width * 0.2, height / 3, amp2 * 0.7, amp2 * 0.7);
  }

  //circulos crecientes -circulo 3.
  if (cancion.currentTime() > 9 && cancion.currentTime() < 21.5) {
    var amp3 = map(amplitud1.getLevel(), 0, 1, 0, 400 + pl);
    fill(0, 255, 255, 50);
    noStroke()
    ellipse(width * 0.8, height * 0.7, amp3 * 0.9, amp3 * 0.9);
  }





  //___________________________________Segunda Interacciòn

  if (cancion.currentTime() > 21.5 && cancion.currentTime() < 22) {
  background(255);
  image(foto3, 850, 700, 100, 80);
  }
  
  if (cancion.currentTime() > 22 && cancion.currentTime() < 45) {
    

    
    var r=random(200,255);
    var g=random(200,255);
    var b=random(200,255)

    var posy=random(0,height);
    fill(r,g,b);
    var amp4 = map(amplitud1.getLevel(), 0, 1, 0,  width);
    rect(amp4, 0, ancho, height);
    
  }
  //Teclado de color


   //cuadrados expandibles
  if (cancion.currentTime() > 45 && cancion.currentTime() < 65) {
		background(255)
    var amp5 = map(amplitud1.getLevel(), 0, 1, 0,  200);
    strokeWeight(2)
    stroke(0, 255, 255)   
   
    for (var x = 0; x < width; x++) {
      var y1 = height / 2 + amp5*1.5* sin(PI * x / 1000);
      var y2 = height / 2 - amp5* sin(PI * x / 1000);
      point(x, y1);
      point(x, y2);
     // ellipse(width/2,y2,10,10);
    }

    var mic2 = map(microfono.getLevel(), 0, 1, 0, 400);
  
       strokeWeight(2)
    stroke(255, 0, 255) 
    
  for (var x1 = 0; x1 < width; x1++) {
      var y3 = height / 2 + mic2*1.5* sin(PI * x1 / 1000);
      var y4 = height / 2 - mic2* sin(PI * x1/ 1000);
      point(x1, y3);
      point(x1, y4);
     // ellipse(width/2,y2,10,10);
    }
    
        image(foto2, 900, 700, 80, 80);
  }


  // Interfaz 4
  
 if (cancion.currentTime() > 65 && cancion.currentTime() < 105) {
   
  	var amp6 = map(amplitud1.getLevel(), 0, 1, 0,  height);
   
   fill(255);
   rect(0,0,width/2,height);
   fill(0);
 	 ellipse(width*0.25, height-amp6, 40, 40);
   
	 var mic3 = map(microfono.getLevel(), 0, 1, 0, height);
   
   fill(0);
   rect(width/2,0,width/2,height);
   fill(255);
   ellipse(width*0.75,height- mic3, 40, 40);
   
    var miPan = map(mouseX, 0, width, -1, 1);
  cancion.pan(miPan);
   
    image(foto2, 850, 700, 80, 80);
   image(foto4, 50, 700, 55,75);
   
 }


    
 if (cancion.currentTime() > 105) {
  cancion.stop();
 }
  
}

function keyPressed() {
  var keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex == -1) {
    background(255);
  } else { 
    var r=random(255);
    var g=random(255);
    var b=random(255)

    var posy=random(0,height);
    fill(r,g,b);
    var posx = map(keyIndex, 0, 25, 0, width - ancho);
    rect(posx, 0, ancho, height);
    
     image(foto3, 850, 700, 100, 80);
    
  }
}

