
var increment = .05; // how much the angel will change by each draw() iteration
var scl = 20;
let cols, rows;

var zoff = 0; // time

function setup() {
    cnv = createCanvas(400, 400);
    cols = floor(width / scl);
    rows = floor(height / scl);
    noLoop();
}

function draw() {
    background(255);

    // drawNoiseRectangles();
    drawVectorsUsingNoise();
    // ThreeDimensionNoise();

}

/**
 * 3rd dimension here (the z input in Noise()), is time, AKA frame rate
 * These lines will move
 */
function ThreeDimensionNoise() {
    var yoff = 0;

    // Iterate from top to bottom.
    for (let y = 0; y < rows; y++) {
        var xoff = 0;

        // Iterate from left to right.
        for (let x = 0; x < cols; x++) {
            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);

            xoff += increment;

            stroke(0);
            push();

            translate(x * scl, y * scl);
            rotate(v.heading());
            line(0, 0, scl, 0);

            pop();

        }

        // Changes on every draw()
        yoff += increment;

        zoff += 0.001; // how fast the angle will change
    }


}

/**
 * Draw grid of vectors represented as lines, which generates a flow field
 * Use a <= .01 increment to get smooth flow fields
*/
function drawVectorsUsingNoise() {
    var yoff = 0;

    // Iterate from top to bottom.
    for (let y = 0; y < rows; y++) {
        var xoff = 0;

        // Iterate from left to right.
        for (let x = 0; x < cols; x++) {
            var angle = noise(xoff, yoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);

            xoff += increment;

            stroke(0);
            push();

            translate(x * scl, y * scl);
            rotate(v.heading());
            line(0, 0, scl, 0);

            pop();

        }

        yoff += increment;
    }
}

/**
 * Draw grid of larger (set by scale = size of each rectabgle) perlin noise rectangles
 * Needs high increment in order to form grays of signifcantly different values
*/
function drawNoiseRectangles() {
    var yoff = 0;

    // Iterate from top to bottom.
    for (let y = 0; y < rows; y++) {
        var xoff = 0;

        // Iterate from left to right.
        for (let x = 0; x < cols; x++) {
            var r = noise(xoff, yoff) * 255;
            fill(r);
            rect(x * scl, y * scl, scl, scl)

            xoff += increment;
        }

        yoff += increment;
    }
}


