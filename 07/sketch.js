var imagen1; //Mosca
var imagen2; //Splash muerte mosca
var imagen3; //Mariposa
var imagen4; //Transmilenio
var imagen5; //Conejo

var moscas = [];
var mariposas = [];
//var colibri1 = [];
var transmis = [];
var luciernagas = [];


function setup() {
  createCanvas(600, 600);
  imagen1 = loadImage('assets/mosca.png');
  imagen2 = loadImage('assets/splash.png');
  imagen3 = loadImage('assets/mariposa.png');
  imagen4 = loadImage('assets/transmi.png');
  imagen5 = loadImage('assets/rabbit.png');
  // maya = new abeja(200, 200);
}




function draw() {
  background(255);

  
  ///________________________________________________1era interacción
  if (frameCount < 600) {
    if (frameCount % 20 == 0) {
      moscas[moscas.length] = new mosca(random(0, width), random(0, height));
    }

    for (var i = 0; i < moscas.length; i = i + 1) {
      moscas[i].dibujarse();
      moscas[i].moverse();


      if (mouseIsPressed == true) {
        if (dist(mouseX, mouseY, moscas[i].x, moscas[i].y) < 40) {
          moscas[i].morirse();

        }
      }
    }
  }

  
  
  
  ///____________________________________________________2da interacción
  if (frameCount > 600 && frameCount < 1100) {
    if (frameCount % 10 == 0) {
      mariposas[mariposas.length] = new mariposa(random(0, width), random(0, width));

    }

    for (var i = 0; i < mariposas.length; i = i + 1) {
      mariposas[i].dibujarse();
      mariposas[i].moverse();
    }
  }


  ///____________________________________________________ 3ra interacción
  if (frameCount > 1200 && frameCount < 1700) {
    transmis[transmis.length] = new transmi(random(0, width), random(0, width));
  }

  for (var i = 0; i < transmis.length; i = i + 1) {
    transmis[i].dibujarse();
    transmis[i].moverse();

    if (dist(mouseX, mouseY, transmis[i].x, transmis[i].y) < 40) {
      transmis[i].morirse();
      image(imagen5, mouseX - 30, mouseY - 30, 120, 120);


    }
  }


////____________________________________________________4ta Interacción
  if (frameCount > 1800) {
    background(0);
    luciernagas[luciernagas.length] = new circulos(random(0, width), random(0, width));
  }

  for (var i = 0; i < luciernagas.length; i = i + 1) {
    luciernagas[i].dibujarse();
    luciernagas[i].moverse();

    if (dist(mouseX, mouseY, luciernagas[i].x, luciernagas[i].y) < 40) {
      luciernagas[i].morirse();
  
    }
  }

} // El corchete de draw, lo perdí mil veces y me saco mil canas







function mosca(miX, miY) {
  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 20;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      // Mosca
      image(imagen1, this.x, this.y, 60, 60);
    }
  };

  this.moverse = function() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
    this.edad = this.edad + 1;
  };

  this.morirse = function() {
    this.estaViva = false;
    image(imagen2, mouseX - 30, mouseY - 30, 60, 60);
  };
}

function mariposa(miX, miY) {
  // Caracteristicas
  this.x1 = miX;
  this.y1 = miY;
  this.tam = 20;
  this.edad = 0;


  // Habilidades
  this.dibujarse = function() {
    translate(frameCount / 5, frameCount / 5);
    rotate(radians(180));
    image(imagen3, mouseX - this.x1, mouseY + this.y1, 120, 60);
  };

  this.moverse = function() {
    this.x1 = this.x1 + 1;
    this.y1 = this.y1 - 1;
 
  };


}

function transmi(miX, miY) {
  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 20;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      // Mosca
      image(imagen4, this.x, this.y, 120, 20);
    }
  };

  this.moverse = function() {
    this.x = this.x + 1;
    this.y = this.y + 0.1;

  };

  this.morirse = function() {
    this.estaViva = false;

  };

}


  function circulos(miX, miY) {
    // Caracteristicas
    this.x = miX;
    this.y = miY;
    this.tam = 20;
    this.edad = 0;
    this.estaViva = true;

    // Habilidades
    this.dibujarse = function() {
      if (this.estaViva == true) {
        // Cuerpo
        noStroke();
        fill(255,70);
        ellipse(this.x, this.y, 40+this.edad, 40+this.edad);
        // Cabeza
        //ellipse(this.x + 10, this.y - 10, 20, 20);
      }
    };

    this.moverse = function() {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
      this.edad = this.edad + 0.3;
    };

    this.morirse = function() {
      this.estaViva = false;
    };
  }
