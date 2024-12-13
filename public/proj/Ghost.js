
let cnvWH = 600;

let noiseLevel = 10;
let noiseScale = .035;

function setup() {
    createCanvas(600, 600);

    stroke(255);
    // strokeWeight(2);

    noLoop();
}


function draw() {
    background(0);
    // noFill();
    /* test shapes */
    // beginShape();
    // let p0 = createVector(100, height/2);
    // let p1 = createVector(width/2, 0); // control
    // let p2 = createVector(width-100, height/2);
    // noisyQuadraticBezz(p0, p1, p2, noiseLevel, noiseScale);
    // fill(200);
    // endShape();

    // beginShape();
    // strokeWeight(0.3);
    // p0 = createVector(100, height / 2);
    // p1 = createVector(width / 4, 0); // control
    // p2 = createVector((3 * width) / 4, height); // control
    // p3 = createVector(width-100, height/2);
    // noisyCubicBezz(p0, p1, p2, p3, noiseLevel, noiseScale);
    // endShape();

    createGhost(-50);



}

function createGhost(angle) {
    /* Ghost Head */
    beginShape();
    strokeWeight(1);
    let startHead = createVector(100, 100);
    let controlHeadOne = createVector(100, -25); // control
    let controlHeadTwo = createVector(200, -25); // control
    let endHead = createVector(200, 100);
    noisyCubicBezz(startHead, controlHeadOne, controlHeadTwo, endHead, noiseLevel, noiseScale);

    /* Ghost Body Right */
    let startRightBody = createVector(endHead.x, endHead.y);
    let controlRightBodyOne = createVector(endHead.x, 200); // control
    let controlRightBodyTwo = createVector(150, 200); // control
    let endRightBody = createVector(160, endHead.y + 200);
    noisyCubicBezz(startRightBody, controlRightBodyOne, controlRightBodyTwo, endRightBody, noiseLevel, noiseScale);

    /* Ghost Body Left */
    let startLeftBody = createVector(160, endHead.y + 200);
    let controlLeftBodyOne = createVector(startHead.x, 200); // control
    let controlLeftBodyTwo = createVector(startHead.x + 20, 225); // control
    let endLeftBody = createVector(startHead.x, startHead.y);
    noisyCubicBezz(startLeftBody, controlLeftBodyOne, controlLeftBodyTwo, endLeftBody, noiseLevel, noiseScale);

    // rotate(angle);
    endShape();
}