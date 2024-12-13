
let cnvWH = 600;

let noiseLevel = 12;
let noiseScale = .055;

let r = 255, g = 255, b = 255;

function setup() {
    createCanvas(600, 600);

    noLoop();
}


function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    // noFill();

    beginShape();
    fill('blue');
    let xStart = 100;
    let p0 = createVector(xStart, 10);
    let p1 = createVector(xStart + 50, height / 4); // control
    let p2 = createVector(xStart - 50, height / 1.5 - 50); // control
    let p3 = createVector(xStart, height - 50);
    CubicBezz(p0, p1, p2, p3, noiseLevel, noiseScale);

    vertex(xStart + 50, height - 70);

    p0 = createVector(xStart + 50, height - 70);
    p1 = createVector(xStart - 50, height / 4); // control
    p2 = createVector(xStart + 50, height / 1.5 - 50); // control
    p3 = createVector(xStart + 50, 10);
    CubicBezz(p0, p1, p2, p3, noiseLevel, noiseScale);

    vertex(xStart, 10);

    endShape();

    beginShape();
    fill('red');
    xStart = 300;
    p0 = createVector(xStart, 10);
    p1 = createVector(xStart + 50, height / 4); // control
    p2 = createVector(xStart - 50, height / 1.5 - 50); // control
    p3 = createVector(xStart, height - 50);
    CubicBezz(p0, p1, p2, p3, noiseLevel, noiseScale);

    vertex(xStart+50, height - 70);

    p0 = createVector(xStart + 50, height - 70);
    p1 = createVector(xStart - 25, height / 4); // control
    p2 = createVector(xStart + 50, height / 1.5 - 50); // control
    p3 = createVector(xStart + 50, 10);
    noisyCubicBezzY(p0, p1, p2, p3, noiseLevel, noiseScale);

    vertex(xStart, 10);
 
    endShape();

}

