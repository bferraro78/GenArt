
function setup() {
  createCanvas(1000, 1000);

  describe('A calm sea drawn in gray against a black sky.');

  noLoop();
}

function draw() {
  background(200);

  // Set the noise level and scale.
  let noiseLevel = 1000;
  let noiseScale = 0.01;

  // Iterate from left to right.
  for (let x = 0; x < 15; x += 1) {
    // Scale the input coordinates.
    let nx = noiseScale * x;
    let nt = noiseScale * frameCount;

    // Compute the noise value.
    let y = noiseLevel * noise(nx, nt);

    // Draw the line.
    // line(x, 0, x, y);
  }

  simpleCurve();
  simpleCubicBezzyCurve();
  continousBezzy();

}


function continousBezzy() {
  strokeWeight(3);
  point(300, 50);
  point(400, 400);

  push();

  fill(255, 101)
  stroke(0, 255, 0);
  strokeWeight(2);

  beginShape();

  vertex(200, 200);
  bezierVertex(300, 50, 400, 400, 600, 200);
  bezierVertex(450, 525, 300, 100, 200, 200);

  endShape();

  pop();
}


function simpleCurve() {
  push();

  noFill();
  strokeWeight(2);
  curve(750, 775, 650, 550, 650, 850, 750, 825);

  strokeWeight(5);

  stroke(255);
  point(750, 775);
  point(750, 825);

  stroke(255, 0, 0);
  point(650, 750);
  point(650, 850);

  pop();
}

function simpleCubicBezzyCurve() {
  // two anchor points
  push();
  noFill();
  bezier(500, 500, 550, 450, 650, 350, 700, 500);

  stroke(0, 255, 0);
  strokeWeight(5);
  point(500, 500);
  point(700, 500);

  stroke(255, 0, 0);
  strokeWeight(5);
  point(550, 450);
  point(650, 350);
  pop();
}

// function mousePressed() {
//   strokeWeight(1);
//   let x = mouseX;
//   let y = mouseY;
//   console.log('Mouse pressed at: ', x, y);
//   // You can also use these coordinates to draw something
//   ellipse(x, y, 20, 20);
// }
