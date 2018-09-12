var segundos;
var minutos;
var horas;
var horas3;
var horas4;

//centros de circulos
var x1;
var y1;
var x2;
var y2;
var x3;
var y3;

//lineas guías
var lx1;
var ly1;
var lx2;
var ly2;
var lx3;
var ly3;
var lx4;
var ly4;

var lx5;
var ly5;
var lx6;
var ly6;


var sx1;
var sy1;
var sx2;
var sy2;


function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  noStroke();
  
  
  horas=hour();
  minutos=minute();
  segundos=second();

  horasNueva=horas +6;
  
  horas3=map(horasNueva,0,24,185,40);
  horas5=map(horasNueva,0,24,185,59);
  horas6=map(horasNueva,0,24,185,101);
  horas4=map(horasNueva,0,24,0,255)
  
  background(horas3,horas5,horas6);

 
  if(horas>=12){
  horas=horas-12;
  }
  
  
  

  horas2=map(horas,0,12,0,359);
  minutos2=map(minutos,0,59,0,359);
  segundos2=map(segundos,0,60,0,359);
  
  //Luna-sol
  
  sx1=width/2-400*cos(radians(horas2+270));
  sy1=height/2-400*sin(radians(horas2+270));
  sx2=width/2-400*cos(radians(horas2+265));
  sy2=height/2-400*sin(radians(horas2+265));
  
  
 //Circulo rojo
    
  lx1=width/2-200*cos(radians(horas2+90));
  ly1=height/2-200*sin(radians(horas2+90));
  
  lx2=width/2-260*cos(radians(horas2+90));
  ly2=height/2-260*sin(radians(horas2+90));
  
  x1=width/2-90*cos(radians(horas2+90));
  y1=height/2-90*sin(radians(horas2+90));
  
//Circulo amarillo
  
  lx3=x1-180*cos(radians(minutos2+90));
  ly3=y1-180*sin(radians(minutos2+90));
  
  lx4=x1-120*cos(radians(minutos2+90));
  ly4=y1-120*sin(radians(minutos2+90));
                     
  x2=x1-40*cos(radians(minutos2+90));
  y2=y1-40*sin(radians(minutos2+90));
  
//circulo Negro
  
  lx5=x2-110*cos(radians(segundos2+90));
  ly5=y2-110*sin(radians(segundos2+90));
  
  lx6=x2-85*cos(radians(segundos2+90));
  ly6=y2-85*sin(radians(segundos2+90));
  
  x3=x2-65*cos(radians(segundos2+90));
  y3=y2-65*sin(radians(segundos2+90));
  
//Referencia
  fill(255,190);
  ellipse(width/2+10,height/2+20,550,550);
  fill(35,49,99,220);
  ellipse(width/2,height/2,500,500);
  
  fill(horas4);
  ellipse(sx1,sy1,200,200);
  fill(198,107,119,240)
  ellipse(sx2,sy2,120,110);
 
  fill(169,96,139,250);
  ellipse(width/2,110,80,80);
  fill(255,0,0,100);
	ellipse(width/2+10,60+40,30,30);
  fill(194,144,35,200);
  ellipse(680,height/2,60,60);
  fill(198,107,119,240);
  ellipse(width/2,620+50,40,40);
  fill(112,166,141,240);
  ellipse(70+50,height/2,60,60);
  fill(255,0,0,100);
	ellipse(70+50,height/2,20,20);
  
  fill(0,150);
  ellipse(x1,y1,300,300);
  fill(109,163,142)
  ellipse(x2,y2,200,200); 
  fill(230,196,73);
	ellipse(x3,y3,50,50);
  
  stroke(206,31,25,140);
  strokeWeight(4)
  line(lx1,ly1,lx2,ly2);
  
  stroke(209,215,0);
  strokeWeight(4)
  line(lx3,ly3,lx4,ly4);
 
  stroke(230,196,73);
  strokeWeight(4)
  line(lx5,ly5,lx6,ly6);
  
  
//Elipses
  
   fill(255,30);
   ellipse(210,730,82,82);
   
  stroke(230,196,73);
  strokeWeight(2)
 
    fill(250,250,139,150);
  ellipse(210,730,80,80);
  
  noStroke();
  fill(0,40);
	ellipse(775,645,180,180);
  
    stroke(230,196,73,70);
  fill(194,144,35,70);
  ellipse(730,450,160,160);
  
  stroke(0);
  fill(198,107,119,140);
  ellipse(550,650,90,90);
  
  noStroke();
  fill(112,166,141,70);
  ellipse(600,140,130,130);
  fill(0,80);
	ellipse(470,725,40,40);
  
   fill(150,76,139,150);
  ellipse(210,690,20,20);
  fill(255,80);
	ellipse(455,785,90,90);
  fill(124,144,35,120);
  ellipse(690,730,200,200);
  //fill(198,107,219,140);
  //ellipse(240,230,80,20);
  fill(112,166,141,70);
  ellipse(680,490,40,40);
  fill(0,80);
	ellipse(560,565,50,50);
    fill(0,80);
	ellipse(0,0,300,300);
  //ellipse(100,200,segundos2/2,segundos2);
  
  
  
  }