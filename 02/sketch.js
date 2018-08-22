var orden = [2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3];
var orden2 = [3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2];
var orden3 = [2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2];
var orden4 = [ 2, 3, 3, 2, 2, 3, 3, 2, 2,3,3,2];



var x = 40;
var y = 40;
var bt = 40; //base del triangulo rectangulo
var n = 0;

function setup() {
  createCanvas(1000, 1000);
  background(250);
  fill(250);
  noStroke();

  //_______________________________________________________
  for (var j = 1; j <= 8; j++) {
    for (var i = 1; i <= 8; i++) {

      if ((orden[i - 1] % 2) == 0) {
        fill(50);
      } else {
        fill(250);
      }

      //para los triangulos inferiores
      triangle(x * i, y * j, x * i, y * j + bt, x * i + bt, y * j + bt);

      if ((orden[i + 1] % 2) == 0) {
        fill(50);
      } else {
        fill(250);
      }

      //para los triangulos superiores
      triangle(x * i, y * j, x * i + bt, y * j, x * i + bt, y * j + bt);

    }


    var primero = orden[0];
    orden.shift();
    orden.push(primero);
    print('The value of j is ' + orden);

  }


  //_______________________________________________________

  for (var j = 1; j <= 8; j++) {
    for (var i = 9; i <= 16; i++) {

      if ((orden2[(i - 8) - 1] % 2) == 0) {
        fill(50);
      } else {
        fill(250);
      }

      //para los triangulos inferiores

      triangle(x * i + bt, y * j, x * i, y * j, x * i, y * j + bt);

      if ((orden2[(i - 8) + 1] % 2) == 0) {
        fill(50);
      } else {
        fill(250);
      }


      //para los triangulos superiores
      triangle(x * i + bt, y * j, x * i + bt, y * j + bt, x * i, y * j + bt);

    }


    var ultimo = orden2[11];
    orden2.pop();
    orden2.unshift(ultimo);
    print('The value of 2 is ' + orden2);

  }

  //_______________________________________________________

  for (var j = 9; j <= 16; j++) {
    for (var i = 9; i <= 16; i++) {

      if ((orden3[(i - 8) - 1] % 2) == 0) {
        fill(250, 210, 001);
      } else {
        fill(250);
      }

      //para los triangulos inferiores
      triangle(x * i, y * j, x * i, y * j + bt, x * i + bt, y * j + bt);

      if ((orden3[(i - 8) + 1] % 2) == 0) {
        fill(250, 210, 001);
      } else {
        fill(250);
      }

      //para los triangulos superiores
      triangle(x * i, y * j, x * i + bt, y * j, x * i + bt, y * j + bt);

    }


    var primero = orden3[0];
    orden3.shift();
    orden3.push(primero);
    print('The value of 3 is ' + orden3);

  }
  //_______________________________________________________

  for (var j = 9; j <= 16; j++) {
    for (var i = 1; i <= 8; i++) {

      if ((orden4[i - 1] % 2) == 0) {
        fill(50);
      } else {
        fill(250);
      }

      //para los triangulos inferiores

      triangle(x * i + bt, y * j, x * i, y * j, x * i, y * j + bt);

      if ((orden4[i + 1] % 2) == 0) {
        fill(50);
      } else {
        fill(250);
      }

      //para los triangulos superiores
      triangle(x * i + bt, y * j, x * i + bt, y * j + bt, x * i, y * j + bt);

    }


    var ultimo = orden4[11];
    orden4.pop();
    orden4.unshift(ultimo);
    print('The value of 2 is ' + orden4);

  }

}