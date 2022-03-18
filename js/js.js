var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1')
    //background(0);

  }
  
 
  function mousePressed() {
    clear();
  }

  function draw() {
    
    noFill();
    stroke(225);
    strokeWeight(2)

    for (var i = 0; i < 1; i++) {
        ellipse(random(0, width), random(0, height), 1000);
      }
    
    
  }

 
