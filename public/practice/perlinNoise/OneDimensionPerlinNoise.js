
// Two offsets essentially select two different areas on the perlin noise set
var xoff1 = 0
var xoff2 = 10000;


var increment = 0.01;
var start = 0;

function setup() {
    cnv = createCanvas(400, 400);
    stroke(255);
    strokeWeight(1);

    // noLoop();
}

function draw() {
    background(50);

    movingEllipse();
    graphTwoDNoise();
}

function movingEllipse() {
    // Map works like multiplyig by a nosieScale
    var x = map(noise(xoff1), 0, 1, 0, width);
    var y = map(noise(xoff2), 0, 1, 0, height);
    xoff1 += 0.02;
    xoff2 += 0.02;
    ellipse(x, y, 24, 24);
}

/**
 * We are moving through the x axis of perlin noise set.
 * increnment - is how fast we are moving through the noise set
 * start - where we start on the noise set. This gives it the notion that it
 *         is moving across the screen
 */
function graphTwoDNoise() {
    push();
    noFill();
    beginShape();
    var xoff = start;

    // For loop draws one line across the screen from 0 to width
    // start += increment will change where we start on each call of draw() method
    for (let x = 0; x < width; x++) {
        var noiseY = map(noise(x), 0, 1, 0, width); // noiseY equals == noiseY2
        // height acting as noiseScale
        var noiseY2 = noise(x) * height; // noiseY equals == noiseY2

        var noiseYWithXOffSet = noise(xoff) * height;
        vertex(x, noiseYWithXOffSet);
        xoff += increment; // increment is noiseScale - a smaller noise scale results in a smoother line
    }
    endShape();
    pop();

    start += increment;
}


