
let cnvWH = 600;

let noiseLevel = 25;
let noiseScale = .009;

let r = 255, g = 255, b = 255;

function setup() {
    createCanvas(600, 600);
    noLoop();
}


function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    noFill();
    
    angleMode(DEGREES);
    let xStart = -10;
    let y = 0;
    let controlOffSet = 100;
    while (y < windowHeight) {
        push();
        
        noiseSeed(random(255)); // generate new set of perlin noise space

        beginShape();

        r = random(255);
        g = random(255);
        b = random(255);
        // fill(r, g, b);

        let p0 = createVector(xStart, y);
        let p1 = createVector(width - 10 + y , y-controlOffSet); // control
        let p2 = createVector(0, y+controlOffSet); // control
        let p3 = createVector(width + 10, y);
        noisyCubicBezzXY(p0, p1, p2, p3, noiseLevel, noiseScale);

        endShape();
        pop();

        y += 15;

    }
}

