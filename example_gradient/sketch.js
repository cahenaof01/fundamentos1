function setup() {
  createCanvas(600, 600);
  background(61);
  noLoop()
}


  // helper for writing color to array
  function draw() {
    loadPixels();
    var x, y;
    for (y=0; y < height; y++) {
    for (x=0; x < width; x++) {
    
    var index = (x + y * width) * 4;
    
    pixels[index + 0] = random(220,230);
    pixels[index + 1] = random(208,215);
    pixels[index + 2] = random(150,160);
    pixels[index + 3] = 250;
    
          }
  }

      
    updatePixels();
  }

 
