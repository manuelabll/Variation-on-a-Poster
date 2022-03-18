var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1')
    background(0);

  }
  
  function mousePressed() {
    clear();
  }

  function draw() {
    noFill();
    stroke(225);
    strokeWeight(2)

    rotateZ(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(windowWidth, windowHeight)
    
  }