//_______________________

var px1 = 10;
var py1 = 10;
var t1 = 20;

var px2 = 40;
var py2 = 10
var t2 = 20;

var px3 = 70;
var py3 = 10;
var t3 = 20;


var px4 = 100;
var py4 = 10
var t4 = 20;

var px5 = 130;
var py5 = 10;
var t5 = 20;

var px6 = 160;
var py6 = 10;
var t6 = 20;

var px7 = 190;
var py7 = 10;
var t7 = 20;

var px8 = 220;
var py8 = 10;
var t8 = 20;

var px9 = 250;
var py9 = 10;
var t9 = 20;

var px10 = 280;
var py10 = 10;
var t10 = 20;

//___________________________________

var px11 = 10;
var py11 = 40;
var t11 = 20;

var px12 = 10;
var py12 = 70
var t12 = 20;

var px13 = 10;
var py13 = 100;
var t13 = 20;


var px14 = 10;
var py14 = 130
var t14 = 20;

var px15 = 10;
var py15 = 160;
var t15 = 20;

var px16 = 10;
var py16 = 190;
var t16 = 20;

var px17 = 10;
var py17 = 220;
var t17 = 20;

var px18 = 10;
var py18 = 250;
var t18 = 20;

var px19 = 10;
var py19 = 280;
var t19 = 20;

var px20 = 10;
var py20 = 310;
var t20 = 20;

//______________________________________________

var px21 = 310;
var py21 = 10;
var t21 = 20;

var px22 = 340;
var py22 = 10;
var t22 = 20;

var h = 1;
var colores = 1;
var t = 0;

var x = 1;
var y = 1;
var x1 = 1;
var y1 = 1;

var x2 = 1;
var y2 = 1;
var cer2 = 1;
var cer3 = 1;
var cer4 = 1;
var p1 = 1;
var q1 = 1;
var p2 = 1;
var q2 = 1;
var j = 1;

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  background(176, 242, 180, 40);
  fill(250)
  noStroke()
  rect(50, 50, width, height);
}

function draw() {
  //AL poner inicialmente los recuadros estos no van a cambiar de color+
  //a menos que esten en una fase posterior en el codigo


  //Rectangulos de colores
  stroke(0);
  fill(255, 0, 0);
  rect(px1, py1, t1, t1);
  fill(0, 0, 255);
  rect(px2, py2, t2, t2);
  fill(0, 255, 0);
  rect(px3, py3, t3, t3);
  fill(255, 255, 0);
  rect(px4, py4, t4, t4);
  fill(255, 0, 255);
  rect(px5, py5, t5, t5);
  fill(0, 255, 255);
  rect(px6, py6, t6, t6);
  fill(0);
  rect(px7, py7, t7, t7);
  fill(255);
  rect(px8, py8, t8, t8);
  fill(98, 158, 150);
  rect(px9, py9, t9, t9);
  fill(255, 127, 80);
  rect(px10, py10, t10, t10);


  //Pinceles
  noFill();
  stroke(0);
  //fill(255, 0, 0);
  rect(px11, py11, t11, t11);
  line(px11, py11 + t11, px11 + t11, py11);
  line(px11, py11 + t11 / 2, px11 + t11 / 2, py11);
  line(px11 + t11 / 2, py11 + t11, px11 + t11, py11 + t11 / 2);
  //fill(0, 0, 255);


  rect(px12, py12, t12, t12);
  ellipse(px12 + t12 / 2, py12 + t12 / 2, t12, t12);
  ellipse(px12 + t12 / 2, py12 + t12 / 2, t12 / 2, t12 / 2);
  ellipse(px12 + t12 / 2, py12 + t12 / 2, t12 / 3, t12 / 3);
  ellipse(px12 + t12 / 2, py12 + t12 / 2, t12 / 4, t12 / 4);
  //fill(0, 255, 0);


  rect(px13, py13, t13, t13);
  for (var l = 1; l < 50; l++) {
    p1 = px13 + t13 / 2 + 10 * sin(2 * PI * l * 15 / 100);
    q1 = py13 + t13 / 2 - 10 * cos(2 * PI * l * 15 / 100);
    line(px13 + t13 / 2, py13 + t13 / 2, p1, q1);
  }


  //fill(255, 255, 0);
  rect(px14, py14, t14, t14);
  for (var qs = 1; qs < 20; qs = qs + 6) {
    ellipse(px14 + t14 / 2, py14 + t14 / 2, qs, qs);
  }

  //fill(255, 0, 255);
  rect(px15, py15, t15, t15);
  fill(0);
  ellipse(px15 + t15 / 3, py15 + t15 / 3, t15 / 4, t15 / 4);

  ellipse(px15 + t15 / 2, py15 + t15 / 2, t15 / 3, t15 / 3);

  ellipse(px15 + t15 * 0.7, py15 + t15 * 0.7, t15 / 4, t15 / 4);
  noFill();

  //fill(0, 255, 255);
  rect(px16, py16, t16, t16);
  for (var i = 1; i < 90; i++) {
    p2 = px16 + t16 / 2 + 7 * sin(2 * PI * i / 100);
    q2 = py16 + t16 / 2 - 7 * cos(2 * PI * i / 100);

    ellipse(p2 + i / 15, q2 + i / 15, i / 15, i / 15);
  }
  //fill(0);
  rect(px17, py17, t17, t17);


  beginShape()
  vertex(px17 + 3, py17 + 3);
  vertex(px17 + t17 - 3, py17 + t17 - 3);
  vertex(px17 + t17 - 3, py17 + 3);
  vertex(px17 + 3, py17 + t17 - 3);
  vertex(px17 + 3, py17 + 3);
  endShape()
  //fill(255);
  rect(px18, py18, t18, t18);

  for (var z = 1; z < 81; z = z + 10) {
    x1 = px18 + 5 * sin(2 * PI * z / 100);
    y1 = py18 - 5 * cos(2 * PI * z / 100);

    beginShape();
    vertex(x1 + 10, y1 + 10);
    vertex(x1 + z / 10 + 10, y1 + z / 10 + 10);
    endShape()
  }
  //fill(98, 158, 150);
  rect(px19, py19, t19, t19);
  for (var as = 1; as < 400; as = as + 10) {
    x2 = px19 + 4 * cos(2 * PI * as / 100) - 4 * (cos(PI * as / 100));
    y2 = py19 + 4 * sin(2 * PI * as / 100) - 4 * (sin(PI * as / 100));
    noFill();
    line(x2 + 7, y2 + 7, px19 + t19, py19 + t19);
  }
  //fill(255, 127, 80);
  rect(px20, py20, t20, t20);
  for (var pr = 1; pr < 160; pr = pr + 20) {
    x = px20 + 4 * cos(2 * PI * pr * 2 / 100) - 2 * (cos(PI * pr * 3 / 100) * sin(PI * pr * 2 / 100));
    y = py20 + 4 * sin(2 * PI * pr * 2 / 100) - 2 * (cos(PI * pr * 3 / 100) * sin(PI * pr * 2 / 100));
    noFill();
    line(x + 7, y + 7, px20 + t20, py20 + t20);
  }

  //____________________________________________________
  stroke(0);
  fill(255);
  rect(px21, py21, t21, t21);
  line(px21, py21, px21 + t21, py21 + t21);

  fill(255);
  ellipse(px22 + t22 / 2, py22 + t22 / 2, t22, t22);

  strokeWeight(3);
  line(px22 + t22 / 2, py22, px22 + t22 / 2, py22 + t22 * 0.8);
  line(px22 + t22 / 3, py22 + t22 / 3, px22 + t22 / 2, py22 + t22 * 0.8);
  line(px22 + 2 * t22 / 3, py22 + t22 / 3, px22 + t22 / 2, py22 + t22 * 0.8);
  strokeWeight(1);

  if (mouseIsPressed == true) {

    // condicion colores_______________________________________

    if (colores == 1) {
      fill(255, 0, 0);
      stroke(255, 0, 0)
    }

    if (colores == 2) {
      fill(0, 0, 255);
      stroke(0, 0, 255)
    }

    if (colores == 3) {
      fill(0, 255, 0);
      stroke(0, 255, 0)
    }

    if (colores == 4) {
      fill(255, 255, 0);
      stroke(255, 255, 0)
    }


    if (colores == 5) {
      fill(255, 0, 255);
      stroke(255, 0, 255);
    }

    if (colores == 6) {
      fill(0, 255, 255);
      stroke(0, 255, 255);
    }

    if (colores == 7) {
      fill(0);
      stroke(0);
    }

    if (colores == 8) {
      fill(255);
      stroke(255);
    }

    if (colores == 9) {
      fill(98, 158, 150);
      stroke(98, 158, 150);
    }

    if (colores == 10) {
      fill(255, 127, 80);
      stroke(255, 127, 80);
    }


    //______________________________________________________________
    //Pinceles comandos
    if (mouseX > 60 && mouseY > 60) { // condiciòn de área de pintura

      if (h == 1) {
        line(pmouseX, pmouseY, mouseX, mouseY);
        line(pmouseX + 5, pmouseY + 5, mouseX + 5, mouseY + 5);
        line(pmouseX + 10, pmouseY + 10, mouseX + 10, mouseY + 10);
      }

      if (h == 2) {
        var cer = random(40);
        noFill()
        ellipse(pmouseX, pmouseY, cer, cer);

      }

      if (h == 3) {
        var r = random(40);
        x = pmouseX + 150 * sin(2 * PI * t / 100);
        y = pmouseY - 150 * cos(2 * PI * t / 100);
        line(mouseX, mouseY, x, y);
        //ellipse(x,y,10,10);

      }

      if (h == 4) {
        noFill()
        ellipse(pmouseX, pmouseY, cer2, cer2);
      }

      if (h == 5) {
        var cer = random(40);
        ellipse(pmouseX, pmouseY, cer, cer);
      }

      if (h == 6) {
        // r=random(40);

        x = pmouseX + 50 * sin(2 * PI * t / 100);
        y = pmouseY - 50 * cos(2 * PI * t / 100);

        ellipse(x + cer3 / 10, y + cer3 / 10, cer3 / 10, cer3 / 10);
      }

      if (h == 7) {
        //rect(pmouseX, pmouseY, 20, 20);
        noFill()
        beginShape();
        vertex(pmouseX + cer4 / 5, pmouseY + cer4 / 5);
        vertex(pmouseX - cer4 / 5, pmouseY - cer4 / 5);
        vertex(pmouseX - cer4 / 5, pmouseY + cer4 / 5);
        vertex(pmouseX + cer4 / 5, pmouseY - cer4 / 5);
        vertex(pmouseX + cer4 / 5, pmouseY + cer4 / 5);
        //vertex(pmouseX+5,pmouseY+5);

        endShape();
      }

      if (h == 8) {
        x = pmouseX + 100 * sin(2 * PI * t / 100);
        y = pmouseY - 100 * cos(2 * PI * t / 100);

        beginShape();
        vertex(x, y);
        vertex(x + cer4 / 4, y + cer4 / 4);
        endShape()
      }

      if (h == 9) {
        x = pmouseX + 100 * cos(2 * PI * t / 100) - 100 * (cos(PI * t / 100));
        y = pmouseY + 100 * sin(2 * PI * t / 100) - 100 * (sin(PI * t / 100));
        noFill();
        line(x, y, mouseX, mouseY);
      }

      if (h == 10) {
        x = pmouseX + 100 * cos(2 * PI * t * 2 / 100) - 50 * (cos(PI * t * 3 / 100) * sin(PI * t * 2 / 100));
        y = pmouseY + 100 * sin(2 * PI * t * 2 / 100) - 50 * (cos(PI * t * 3 / 100) * sin(PI * t * 2 / 100));
        noFill();
        line(x, y, mouseX, mouseY);
      }
    }
    //_______________________________________________________________
    //Colores
    if (mouseX > px1 && mouseX < px1 + t1 && mouseY > py1 && mouseY < py1 + t1) {
      colores = 1;
    }

    if (mouseX > px2 && mouseX < px2 + t2 && mouseY > py2 && mouseY < py2 + t2) {
      colores = 2;
    }

    if (mouseX > px3 && mouseX < px3 + t3 && mouseY > py3 && mouseY < py3 + t3) {
      colores = 3;
    }

    if (mouseX > px4 && mouseX < px4 + t4 && mouseY > py4 && mouseY < py4 + t4) {
      colores = 4;
    }


    if (mouseX > px5 && mouseX < px5 + t5 && mouseY > py5 && mouseY < py5 + t5) {
      colores = 5;
    }

    if (mouseX > px6 && mouseX < px6 + t6 && mouseY > py6 && mouseY < py6 + t6) {
      colores = 6;
    }

    if (mouseX > px7 && mouseX < px7 + t7 && mouseY > py7 && mouseY < py7 + t7) {
      colores = 7;
    }

    if (mouseX > px8 && mouseX < px8 + t8 && mouseY > py8 && mouseY < py8 + t8) {
      colores = 8;
    }

    if (mouseX > px9 && mouseX < px9 + t9 && mouseY > py9 && mouseY < py9 + t9) {
      colores = 9;
    }

    if (mouseX > px10 && mouseX < px10 + t10 && mouseY > py10 && mouseY < py10 + t10) {
      colores = 10;
    }



    //_________________________________
    //Zonas para pinceles
    if (mouseX > px11 && mouseX < px11 + t11 && mouseY > py11 && mouseY < py11 + t11) {
      h = 1;
    }

    if (mouseX > px12 && mouseX < px12 + t12 && mouseY > py12 && mouseY < py12 + t12) {
      h = 2;
    }

    if (mouseX > px13 && mouseX < px13 + t13 && mouseY > py13 && mouseY < py13 + t13) {
      h = 3;
    }

    if (mouseX > px14 && mouseX < px14 + t14 && mouseY > py14 && mouseY < py14 + t14) {
      h = 4;
      cer2 = 1;
    }


    if (mouseX > px15 && mouseX < px15 + t15 && mouseY > py15 && mouseY < py15 + t15) {
      h = 5;
    }

    if (mouseX > px16 && mouseX < px16 + t16 && mouseY > py16 && mouseY < py16 + t16) {
      h = 6;
      cer3 = 1;
    }

    if (mouseX > px17 && mouseX < px17 + t17 && mouseY > py17 && mouseY < py17 + t17) {
      h = 7;
      cer4 = 1
    }

    if (mouseX > px18 && mouseX < px18 + t18 && mouseY > py18 && mouseY < py18 + t18) {
      h = 8;
      cer4 = 1
    }

    if (mouseX > px19 && mouseX < px19 + t19 && mouseY > py19 && mouseY < py19 + t19) {
      h = 9;
    }

    if (mouseX > px20 && mouseX < px20 + t20 && mouseY > py20 && mouseY < py20 + t20) {
      h = 10;
    }

    //________________________________________________________

    if (mouseX > px21 && mouseX < px21 + t21 && mouseY > py21 && mouseY < py21 + t21) {

      background(176, 242, 180, 40);
      fill(250)
      noStroke()
      rect(50, 50, width, height);
    }

    if (mouseX > px22 && mouseX < px22 + t22 && mouseY > py22 && mouseY < py22 + t22) {
      saveCanvas("Image_" + frameCount, 'jpg');
    }
    cer2 = cer2 + 5;
    cer3++;
    cer4++;
  }
  t++;


}