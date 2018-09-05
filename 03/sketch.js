var x = 0;
var y = 0;
var p = 0;
var giro = 0;
var l = 0;
var mov = 0;
var mov2 = 0;
var j;
var k;
var angle = 0;
var vuelo = 0;
var vuelo2 = 0;
var vuelo3 = 0;
var vuelo4 = 0;
var vuelo5 = 0;
var vuelo6 = 0;
var alas = 0;
var ap = 0;


function setup() {


  createCanvas(2600, 1600);

  frameRate(20);
	


}

function draw() {
  background(255);
	fill(0)
  textSize(80);
  text(frameCount, 30, 70);
  noStroke()


  fill(136, 197, 204, 150);
  ellipse(width / 2+400, height / 2, 1800, 1900);


  //_________________________________TRANSICIÓN 1____________________________
  if (frameCount < 13) {

    fill(255)



    /*
    fill(255)
    j = width/2 + 500*sin(-2*PI*angle/50);
		k = height/2 - 500*cos(2*PI*angle/50);
    ellipse (j-mov,k,200,200);
    //print(k);
    */

    fill(172, 170, 170)
    beginShape()
    vertex(1550+400, 1300);
    vertex(300+400, 1300);
    vertex(300+400, 1000);
    endShape()

    fill(230, 230, 229)
    beginShape()
    vertex(100+400, 1000);
    vertex(400+400, 1100);
    vertex(1550+400, 1300);
    vertex(360+400, 1000);
    endShape()



    /*
    fill(250,0,0);
    ellipse(width-mov*0.5+200,1000,100,60);
    fill(250,250,0);  
    ellipse(width-mov*1.1,600,200,80);
    fill(200,250,60);
    ellipse(width-mov*0.5+400,height/2,200,30);
    fill(200,250,60);
    ellipse(width-mov*0.5+600,300,200,30);
      
   
    fill(250,250,0);
    ellipse(width-mov*3+1000,800,200,60);
    fill(250,250,0);  
    ellipse(width-mov*1.2+800,900,200,80);
    fill(200,250,60);
    ellipse(width-mov*4+1500,400,200,30);
    fill(200,250,60);
    ellipse(width-mov*2+1800,300,200,30);
   */

    if (mov < 10000) {
      mov = mov + 200;
      angle = angle + 2
    }

    //Nube 1
    fill(255)
    ellipse(width - mov+400, height / 2, 400, 400);
    ellipse(width + 200 - mov+400, height / 2, 300, 300);
    ellipse(width - mov - 150+400, 50 + height / 2, 200, 200);

    //Nube 2
    fill(255)
    ellipse(width - mov / 2 + 300+400, height / 2 + 400, 300, 300);
    ellipse(width + 200 - mov / 2 + 300+400, height / 2 + 400, 200, 200);
    ellipse(width - mov / 2 - 150 + 300+400, 50 + height / 2 + 400, 100, 100);
  }


  //_________________________________TRANSICIÓN 2____________________________

  if (frameCount >= 13 && frameCount < 24) {

    fill(172, 170, 170)
    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(1550 + vuelo+400, 1300 - vuelo * 1.5);
    vertex(300 + vuelo * 2.2+400, 1300 - vuelo * 1.2);
    vertex(300 + vuelo * 2+400, 1000 - vuelo);
    endShape()

    fill(230, 230, 229)
    beginShape()
    vertex(100 + vuelo * 2+400, 1000 - vuelo * 0.9);
    vertex(400 + vuelo * 2+400, 1100 - vuelo);
    vertex(1550 + vuelo+400, 1300 - vuelo * 1.5);
    vertex(360 + vuelo * 1.8+400, 1000 - vuelo);
    endShape()

    fill(205, 204, 204)
    beginShape()
    vertex(1550 + vuelo+400, 1300 - vuelo * 1.5);
    vertex(360 + vuelo * 1.8+400, 1000 - vuelo);
    vertex(500 + vuelo * 1.5+400, 1000 - vuelo * 1.2);
    vertex(500 + vuelo * 1.9+400, 1000 - vuelo * 1.15);
    endShape()


    if (vuelo < 500) {
      vuelo = vuelo + 50;
      y = y + 10
      mov = mov + 200;
    }

    //Nube 2
    fill(255)
    ellipse(width - mov / 2 + 300+400, height / 2 + 400, 300, 300);
    ellipse(width + 200 - mov / 2 + 300+400, height / 2 + 400, 200, 200);
    ellipse(width - mov / 2 - 150 + 300+400, 50 + height / 2 + 400, 100, 100);

    //Nube 3
    fill(255)
    ellipse(width - mov / 4 + 300+400, height / 2 - 600, 300, 300);
    ellipse(width + 200 - mov / 4 + 300+400, height / 2 - 600, 200, 200);
    ellipse(width - mov / 4 - 150 + 300+400, 50 + height / 2 - 600, 100, 100);
  }

  //_________________________________TRANSICIÓN 3____________________________

  if (frameCount >= 24 && frameCount < 34) {


    fill(172, 170, 170)
    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(2050 - vuelo2 * 1.2+400, 550 + vuelo2 * 1.3);
    vertex(1400 - vuelo2 * 1.2+400, 700 + vuelo2 * 0.8);
    vertex(1300 - vuelo2+400, 500 + vuelo2);
    endShape()

    fill(230, 230, 229)
    beginShape()
    vertex(1100 - vuelo2+400, 550 + vuelo2 * 1.2);
    vertex(1400 - vuelo2 * 1.2+400, 600 + vuelo2 * 1.3);
    vertex(2050 - vuelo2 * 1.2+400, 550 + vuelo2 * 1.3);
    vertex(1260 - vuelo2+400, 500 + vuelo2 * 1.05);
    endShape()

    fill(205, 204, 204)
    beginShape()
    vertex(2050 - vuelo2 * 1.2+400, 550 + vuelo2 * 1.3);
    vertex(1260 - vuelo2+400, 500 + vuelo2 * 1.05);
    vertex(1250 - vuelo2+400, 400 + vuelo2 * 0.8);
    vertex(1450 - vuelo2+400, 425 + vuelo2 * 0.8);
    endShape()


    if (vuelo2 < 500) {
      vuelo2 = vuelo2 + 50;
      mov = mov + 200;
      mov2 = mov2 + 200;
    }

    //Nube 2
    fill(255)
    ellipse(width - mov / 2 + 300+400, height / 2 + 400, 300, 300);
    ellipse(width + 200 - mov / 2 + 300+400, height / 2 + 400, 200, 200);
    ellipse(width - mov / 2 - 150 + 300+400, 50 + height / 2 + 400, 100, 100);

    //Nube 3 Subiendo
    fill(255)
    ellipse(width - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3, 300, 300);
    ellipse(width + 200 - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3, 200, 200);
    ellipse(width - mov / 4 - 150 + 300+400, 50 + height / 2 - 600 - vuelo2 / 3, 100, 100);

    //NUbe 4
    fill(255)
    ellipse(width - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3, 300, 300);
    ellipse(width + 200 - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3, 200, 200);
    ellipse(width - mov2 / 2 - 150 + 20+400, 50 + height / 2 + 700 - vuelo2 / 3, 100, 100);




  }


  //_________________________________TRANSICIÓN 4____________________________

  if (frameCount >= 34 && frameCount < 43) {

    fill(172, 170, 170)
    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(1450+400, 1200 - vuelo3);
    vertex(800 + vuelo3 * 0.4+400, 1100 + vuelo3 * 0.2);
    vertex(800+400, 1100);
    endShape()

    fill(230, 230, 229)
    beginShape()
    vertex(600 + vuelo3 * 0.2+400, 1150 - vuelo3 * 0.1);
    vertex(800 + vuelo3 * 0.3+400, 1250 - vuelo3 * 0.1);
    vertex(1450+400, 1200 - vuelo3);
    vertex(760+400, 1025);
    endShape()

    fill(205, 204, 204)
    beginShape()
    vertex(1450+400, 1200 - vuelo3);
    vertex(760+400, 1025);
    vertex(750 - vuelo3 * 0.3+400, 800 + vuelo3 * 0.3);
    vertex(950 - vuelo3 * 0.3+400, 825 + vuelo3 * 0.1);
    endShape()



    if (vuelo3 < 500) {
      vuelo2 = vuelo2 + 50;
      vuelo3 = vuelo3 + 50;
      mov = mov + 200;
      mov2 = mov2 + 200;
    }

    //Nube 3 Subiendo
    fill(255)
    ellipse(width - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 3, 300, 300);
    ellipse(width + 200 - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 3, 200, 200);
    ellipse(width - mov / 4 - 150 + 300+400, 50 + height / 2 - 600 - vuelo2 / 3 + vuelo3 / 3, 100, 100);

    //NUbe 4
    fill(255)
    ellipse(width - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 300, 300);
    ellipse(width + 200 - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 200, 200);
    ellipse(width - mov2 / 2 - 150 + 20+400, 50 + height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 100, 100);


  }



  //_________________________________TRANSICIÓN 4____________________________

  if (frameCount >= 43 && frameCount < 53) {

    fill(172, 170, 170)
    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(1450 - vuelo4 * 0.1+400, 700 - vuelo4 / 2);
    vertex(1000 + vuelo4 * 0.9+400, 1200 - vuelo4);
    vertex(800 + vuelo4+400, 1100 - vuelo4);
    endShape()

    fill(230, 230, 229)
    beginShape()
    vertex(700 + vuelo4 * 1.2+400, 1100 - vuelo4);
    vertex(950 + vuelo4 * 1.2+400, 1200 - vuelo4 * 1.4);
    vertex(1450 - vuelo4 * 0.1+400, 700 - vuelo4 / 2);
    vertex(760 + vuelo4 * 1.1+400, 1025 - vuelo4);
    endShape()

    fill(205, 204, 204)
    beginShape()
    vertex(1450 - vuelo4 * 0.1+400, 700 - vuelo4 / 2);
    vertex(760 + vuelo4 * 1.1+400, 1025 - vuelo4 * 0.85);
    vertex(600 + vuelo4+400, 950 - vuelo4 * 0.6);
    vertex(800 + vuelo4+400, 875 - vuelo4 * 0.7);
    endShape()



    if (vuelo4 < 500) {

      vuelo4 = vuelo4 + 50;


    }


    //Nube 3 creciendo
    fill(255)
    ellipse(width - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 4, 300 + vuelo4 / 5, 300 + vuelo4 / 5);
    ellipse(width + 200 - mov / 4 + 300, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 4, 200 + vuelo4 / 5, 200 + vuelo4 / 5);
    ellipse(width - mov / 4 - 150 + 300, 50 + height / 2 - 600 - vuelo2 / 3 + vuelo3 / 3, 10 + vuelo4 / 5, 100 + vuelo4 / 5);

    //NUbe 4 Creciendo
    fill(255)
    ellipse(width - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 300 + vuelo4 / 5, 300 + vuelo4 / 5);
    ellipse(width + 200 - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 200 + vuelo4 / 5, 200 + vuelo4 / 5);
    ellipse(width - mov2 / 2 - 150 + 20+400, 50 + height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 100 + vuelo4 / 5, 100 + vuelo4 / 5);


  }

  //_________________________________TRANSICIÓN 5____________________________

  if (frameCount >= 53 && frameCount < 65) {

    fill(172, 170, 170)
    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(1400+400, 450 + vuelo5 * 0.3);
    vertex(1450 - vuelo5 * 0.1+400, 700 - vuelo5 * 0.1);
    vertex(1300 + vuelo5 * 0.45+400, 600 - vuelo5 * 0.2);
    endShape()

    fill(230, 230, 229)
    beginShape()
    vertex(1300 + vuelo5+400, 600 - vuelo5 * 0.9);
    vertex(1550 + vuelo5 * 0.5+400, 500 - vuelo5 * 0.3);
    vertex(1400+400, 450 + vuelo5 * 0.3);
    vertex(1310 + vuelo5 * 0.5+400, 525 - vuelo5 * 0.5);
    endShape()

    fill(205, 204, 204)
    beginShape()
    vertex(1400+400, 450 + vuelo5 * 0.3);
    vertex(1310+400, 600 - vuelo5 * 0.3);
    vertex(1100 + vuelo5 * 0.2+400, 650 - vuelo5 * 0.5);
    vertex(1300+400, 525 - vuelo5 * 0.4);
    endShape()

    if (vuelo5 < 200) {

      vuelo5 = vuelo5 + 25;
      vuelo4 = vuelo4 + 50

    }

    //Nube 3 creciendo
    fill(255)
    ellipse(width - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 4, 300 + vuelo4 / 5, 300 + vuelo4 / 5);
    ellipse(width + 200 - mov / 4 + 300, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 4, 200 + vuelo4 / 5, 200 + vuelo4 / 5);
    ellipse(width - mov / 4 - 150 + 300, 50 + height / 2 - 600 - vuelo2 / 3 + vuelo3 / 3, 10 + vuelo4 / 5, 100 + vuelo4 / 5);

    //NUbe 4 Creciendo
    fill(255)
    ellipse(width - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 300 + vuelo4 / 5, 300 + vuelo4 / 5);
    ellipse(width + 200 - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 200 + vuelo4 / 5, 200 + vuelo4 / 5);
    ellipse(width - mov2 / 2 - 150 + 20+400, 50 + height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 100 + vuelo4 / 5, 100 + vuelo4 / 5);

    //NUbe 4 Creciendo
    fill(255)
    ellipse(width - 650+400, 300, vuelo5, vuelo5);
    ellipse(width - 600+400, 300, vuelo5 * 1.3, vuelo5 * 1.3);
    ellipse(width - 720+400, 300, vuelo5, vuelo5);

    /*
    noFill()
    stroke(5)
    strokeWeight(4)
    arc(1220, 680, 400, 300 - alas, radians(240), radians(0));
    arc(1220, 680, 400, 300 - alas, radians(240), radians(0));
noStroke()

   
    */

    /*
     //Nube 3 Subiendo
     fill(255)
     ellipse(width - mov / 4 + 300, height / 2 - 600-vuelo2/3+vuelo3/3, 300+vuelo4, 300+vuelo4);
     ellipse(width + 200 - mov / 4 + 300, height / 2 - 600-vuelo2/3+vuelo3/3, 200+vuelo4, 200+vuelo4);
     ellipse(width - mov / 4- 150 + 300, 50 + height / 2 - 600-vuelo2/3+vuelo3/3, 10+vuelo4, 100+vuelo4/3);
     
     //NUbe 4
     fill(255)
     ellipse(width - mov2 / 2 + 20, height / 2 + 700-vuelo2/3+vuelo3/3, 300+vuelo4, 300+vuelo4);
     ellipse(width + 200 - mov2 / 2 + 20, height / 2 + 700-vuelo2/3+vuelo3/3, 200+vuelo4, 200+vuelo4);
     ellipse(width - mov2 / 2 - 150 + 20, 50 + height / 2 + 700-vuelo2/3+vuelo3/3, 100+vuelo4, 100+vuelo4);
     */

  }

  //_________________________________TRANSICIÓN 6____________________________

  if (frameCount >= 61 && frameCount < 72) {

    fill(172 - vuelo6, 170 - vuelo6, 170 - vuelo6)
    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(1400+400, 510); //centro
    vertex(1430+400, 680 - vuelo6 * 0.3);
    vertex(1390+400, 560);
    endShape()

    fill(230 - vuelo6, 230 - vuelo6, 229 - vuelo6)
    beginShape()
    vertex(1500 + vuelo6 * 0.1+400, 420 + vuelo6 * 0.3);
    vertex(1650+400, 440 + vuelo6 * 0.3);
    vertex(1400+400, 510); //centro
    vertex(1410 + vuelo6 * 0.3+400, 425 + vuelo6 * 0.3);
    endShape()

    fill(205 - vuelo6, 204 - vuelo6, 204 - vuelo6)
    beginShape()
    vertex(1400+400, 510); //centro
    vertex(1310+400, 540 - vuelo6 * 0.1);
    vertex(1140+400, 550 + vuelo6 * 0.3);
    vertex(1300+400, 445 + vuelo6 * 0.3);
    endShape()

    if (vuelo6 < 200) {

      vuelo6 = vuelo6 + 25;
      vuelo4 = vuelo4 + 50

    }

    //Nube 3 creciendo
    fill(255)
    ellipse(width - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 4, 300 + vuelo4 / 5, 300 + vuelo4 / 5);
    ellipse(width + 200 - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 4, 200 + vuelo4 / 5, 200 + vuelo4 / 5);
    ellipse(width - mov / 4 - 150 + 300+400, 50 + height / 2 - 600 - vuelo2 / 3 + vuelo3 / 3, 10 + vuelo4 / 5, 100 + vuelo4 / 5);

    //NUbe 4 Creciendo
    fill(255)
    ellipse(width - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 300 + vuelo4 / 5, 300 + vuelo4 / 5);
    ellipse(width + 200 - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 200 + vuelo4 / 5, 200 + vuelo4 / 5);
    ellipse(width - mov2 / 2 - 150 + 20+400, 50 + height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 100 + vuelo4 / 5, 100 + vuelo4 / 5);

    //NUbe 4 Creciendo
    fill(255)
    ellipse(width - 650+400, 300, vuelo5 + vuelo6, vuelo5 + vuelo6);
    ellipse(width - 600+400, 300, vuelo5 * 1.3 + vuelo6, vuelo5 * 1.3 + vuelo6);
    ellipse(width - 720+400, 300, vuelo5 + vuelo6, vuelo5 + vuelo6);


  }

  //_________________________________TRANSICIÓN 6____________________________
  if (frameCount >= 72 && frameCount < 80) {

    fill(172 - vuelo6, 170 - vuelo6, 170 - vuelo6)

    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(1400+400, 510); //centro
    vertex(1430+400, 680 - vuelo6 * 0.3);
    vertex(1390+400, 560);
    endShape()

    fill(230 - vuelo6, 230 - vuelo6, 229 - vuelo6)
    beginShape()
    vertex(1500 + vuelo6 * 0.1+400, 420 + vuelo6 * 0.3);
    vertex(1650+400, 440 + vuelo6 * 0.3);
    vertex(1400+400, 510); //centro
    vertex(1410 + vuelo6 * 0.3+400, 425 + vuelo6 * 0.3);
    endShape()

    fill(205 - vuelo6, 204 - vuelo6, 204 - vuelo6)
    beginShape()
    vertex(1400+400, 510); //centro
    vertex(1310+400, 540 - vuelo6 * 0.1);
    vertex(1140+400, 550 + vuelo6 * 0.3);
    vertex(1300+400, 445 + vuelo6 * 0.3);
    endShape()

    fill(136 - ap, 197 - ap, 204 - ap, 150);
    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(1400 + 200+400, 510 + 200); //centro
    vertex(1430 + 200+400, 680 - vuelo6 * 0.3 + 200);
    vertex(1390 + 200+400, 560 + 200);
    endShape()

    fill(136 - ap, 197 - ap, 204 - ap, 150);
    beginShape()
    vertex(1500 + vuelo6 * 0.1 + 200+400, 420 + vuelo6 * 0.3 + 200);
    vertex(1650 + 200+400, 440 + vuelo6 * 0.3 + 200);
    vertex(1400 + 200+400, 510 + 200); //centro
    vertex(1410 + vuelo6 * 0.3 + 200+400, 425 + vuelo6 * 0.3 + 200);
    endShape()

    fill(136 - ap, 197 - ap, 204 - ap, 150);
    beginShape()
    vertex(1400 + 200+400, 510 + 200); //centro
    vertex(1310 + 200+400, 540 - vuelo6 * 0.1 + 200);
    vertex(1140 + 200+400, 550 + vuelo6 * 0.3 + 200);
    vertex(1300 + 200+400, 445 + vuelo6 * 0.3 + 200);
    endShape()


    fill(136 - ap, 197 - ap, 204 - ap, 150)
    beginShape()
    //vertex(400+vuelo*2, 1200-vuelo*1.2)
    vertex(1400 - 200+400, 510 + 200); //centro
    vertex(1430 - 200+400, 680 - vuelo6 * 0.3 + 200);
    vertex(1390 - 200+400, 560 + 200);
    endShape()

    fill(136 - ap, 197 - ap, 204 - ap, 150)
    beginShape()
    vertex(1500 + vuelo6 * 0.1 - 200+400, 420 + vuelo6 * 0.3 + 200);
    vertex(1650 - 200+400, 440 + vuelo6 * 0.3 + 200);
    vertex(1400 - 200+400, 510 + 200); //centro
    vertex(1410 + vuelo6 * 0.3 - 200+400, 425 + vuelo6 * 0.3 + 200);
    endShape()


    fill(136 - ap, 197 - ap, 204 - ap, 150)
    beginShape()
    vertex(1400 - 200+400, 510 + 200); //centro
    vertex(1310 - 200+400, 540 - vuelo6 * 0.1 + 200);
    vertex(1140 - 200+400, 550 + vuelo6 * 0.3 + 200);
    vertex(1300 - 200+400, 445 + vuelo6 * 0.3 + 200);
    endShape()


    if (ap < 200) {

      ap = ap + 25;

    }

    //Nube 3 creciendo
    fill(255)
    ellipse(width - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 4, 300 + vuelo4 / 5, 300 + vuelo4 / 5);
    ellipse(width + 200 - mov / 4 + 300+400, height / 2 - 600 - vuelo2 / 3 + vuelo3 / 4, 200 + vuelo4 / 5, 200 + vuelo4 / 5);
    ellipse(width - mov / 4 - 150 + 300+400, 50 + height / 2 - 600 - vuelo2 / 3 + vuelo3 / 3, 10 + vuelo4 / 5, 100 + vuelo4 / 5);

    //NUbe 4 Creciendo
    fill(255)
    ellipse(width - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 300 + vuelo4 / 5, 300 + vuelo4 / 5);
    ellipse(width + 200 - mov2 / 2 + 20+400, height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 200 + vuelo4 / 5, 200 + vuelo4 / 5);
    ellipse(width - mov2 / 2 - 150 + 20+400, 50 + height / 2 + 700 - vuelo2 / 3 + vuelo3 / 3, 100 + vuelo4 / 5, 100 + vuelo4 / 5);

    //NUbe 4 Creciendo
    fill(255)
    ellipse(width - 650+400, 300, vuelo5 + vuelo6, vuelo5 + vuelo6);
    ellipse(width - 600+400, 300, vuelo5 * 1.3 + vuelo6, vuelo5 * 1.3 + vuelo6);
    ellipse(width - 720+400, 300, vuelo5 + vuelo6, vuelo5 + vuelo6);

  }

  //if (frameCount <=80){
  //saveCanvas("flip_" + frameCount, 'jpg');
  //}


}
