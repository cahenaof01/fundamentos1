function setup() {
  createCanvas(600, 600);
  frameRate(0.5);
  //noLoop();
}

function draw() {
  background(229, 208, 152); //Fondo por mejorar
  
  strokeWeight(1)
  
  //Triangulo azul
  noStroke ()
 	fill (122, 152, 163);
	quad(232, 432, 427, 230, 786, 543);
 
  //Cuerno
  fill (0);
  arc(389, 217, 195, 165, 0, HALF_PI);
 	fill (229, 208, 152);
  arc(389, 217, 185, 125, 0, HALF_PI);

  //Triangulo azul
  noStroke ()
  fill (122, 152, 163);
	quad(379, 280, 427, 230, 457, 258);
  fill (122, 152, 163);
  bezier(379, 280, 440, 281, 457, 260, 456, 257);
  //arc(427, 230, 185, 125, radians(30), radians(120));
  
  //Contorno triangulo azul
  stroke(0)
  noFill ();
  beginShape();
	vertex(232, 432);
	vertex(427, 230);
	vertex(786, 543);
  endShape()
	
	//quad(232, 432, 427, 230, 786, 543);
     
  
  noStroke();
  //Circulos sección
  fill( 196, 182 ,111);
  ellipse(247, 310, 120, 120);
  fill( 193, 182, 150);
  ellipse(161, 181, 305, 305);
  fill( 194, 174, 149);
  ellipse(161, 181, 300, 300);
  fill( 197, 161 ,133);
  ellipse(161, 181, 295, 295);
  fill( 201, 140 ,135);
  ellipse(161, 181, 285, 285);
  fill( 186, 119, 111);
  ellipse(161, 181, 270, 270);
  fill(197,40,24);
  ellipse(247, 310, 99, 99);
  fill( 0);
  ellipse(161, 181, 256, 256);
  fill( 102, 73 ,120);
  ellipse(161, 181, 130, 130);
   fill( 70, 41 ,87);
  ellipse(161, 181, 120, 120);
  // fill( 75, 48 ,93);
  //ellipse(161, 181, 90, 90);
  
  var radius = 110;
  var h = random(50,90);
  var j =41;
  var k = 87;
  
  for (var r = radius; r > 0; --r) {
    fill(h, j, k);
    ellipse(161,181, r, r);
    h = (h + 1);
  	}
  
  
  //Circulo inferior
  fill( 166, 168 ,157);
  ellipse(128, 645, 150, 150);
  fill( 162, 150 ,160);
  ellipse(128, 645, 140, 140);
  fill( 106, 139 ,146);
  ellipse(128, 645, 130, 130);
  fill( 99, 126 ,135);
  ellipse(128, 645, 120, 120);
  
  //Lines
  stroke(0)
  line(380, 94, 538, 165);
  line(430, 89, 423, 314);
  line(398, 166, 472, 166);
  line(405, 184, 484, 178);
  line(136, 441, 594, 313);
  
  noFill()
  stroke (0)
  arc(690, 310, 314, 455, radians(200), radians(290));
 
  noFill()
  stroke (0)
  arc(668, 306, 259, 335, radians(190), radians(290));
  
  fill(195, 183, 162);
  arc(310, 569, 125, 132, radians(90), radians(290));
  
  
  //Rectangulos
  fill(200);
  quad(283, 600, 306, 551, 357, 590, 347, 600);
  fill(0);
  quad(357, 590, 306, 551, 319, 518, 377, 558);
  fill(200);
  quad(319, 518, 377, 558, 401, 525, 331, 490);
  fill(0);
  quad(331,490, 345, 460, 417, 498, 401, 525);
  fill(200);
  quad(345,460, 367, 410, 437, 472, 417, 498);
  fill(0);
  quad(236,600, 163, 555, 167, 550, 265, 600);
  
 	fill(200);
  quad(351,597, 468, 421, 508, 461, 374, 600);
  fill(200);
  quad(374,600, 582, 387, 591, 397, 405, 601);
  fill(200);
  quad(405,601, 657, 318, 665, 327, 438, 598);
  
  //Intersecciones
  noStroke()
  fill(0);
  quad(400, 562, 402, 571, 600, 520, 600, 515);
  fill(118, 41, 40);
  quad(404, 608, 423, 608, 600, 550, 600, 545);
  
  //La curva cojonuda
  
  strokeWeight(3.5)
 	noFill();
	//stroke(198, 102, 0);
	//line(188, 480, 150, 387);
	//line(210, 389, 235, 420);
	stroke(0, 0, 0);
	bezier(188, 480, 150, 387, 210, 389, 235, 420);
  
  
  strokeWeight(3)
  noFill();
	//stroke(198, 102, 0);
	//line(235, 420, 262, 450);
	//line(298, 425, 306, 399);
	stroke(0, 0, 0);
	bezier(235, 420, 262, 450, 298, 425, 306, 395);
  
  strokeWeight(2.5)
  noFill();
	//stroke(198, 102, 0);
	//line(306, 395, 333, 345);
	//line(374, 358, 386, 375);
	stroke(0, 0, 0);
	bezier(306, 395, 333, 345, 374, 358, 386, 375);
    
    
  strokeWeight(2)
  noFill();
	//stroke(198, 102, 0);
	//line(386, 375, 409, 394);
	//line(443, 372, 456, 355);
	stroke(0, 0, 0);
	bezier(386, 375, 409, 394, 443, 372, 456, 355);
  
  strokeWeight(1.5)
  noFill();
	//stroke(198, 102, 0);
	//line(456, 355, 501, 305);
	//line(567, 312, 604, 321);
	stroke(0, 0, 0);
	bezier(456, 355, 501, 305, 567, 312, 604, 310);
 
}