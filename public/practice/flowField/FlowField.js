
var increment = .5; // how much the angel will change by each draw() iteration
var scl = 5; // resolution
let cols, rows;

let flowField = []

function setup() {
    cnv = createCanvas(400, 400);
    cols = floor(width / scl);
    rows = floor(height / scl);

    /* Create Flow Field*/
    flowField = new Array(cols);
    for (let i = 0; i < cols; i++) {
        flowField[i] = new Array(rows);
    }

    /* Set Vectors on 2d perlin noise*/
    var yoff = 0;
    for (let y = 0; y < rows; y++) {
        var xoff = 0;
        for (let x = 0; x < cols; x++) {
            var angle = noise(xoff, yoff) * (TWO_PI*2); // just TWO_PI was giving me result pointed mainly left
            flowField[y][x] = p5.Vector.fromAngle(angle);
            console.log(angle);
            xoff += increment;
        }
        yoff += increment;
    }


    noLoop();
}

function draw() {
    background(255);

    // Draw Flow Field
    drawVectorsUsingNoise();

    // How many lines to draw
    var iterationNunmber = 200;
    var index = 0;
    while (index < iterationNunmber) {

        stroke(0);
        strokeWeight(1.5);

        // Start point
        var anchorVector = createVector(random(10, width-10), random(10, height-10));

        // How far to extend the line before next lookup
        var lineSegmentLength = random(1, 25);

        // How many line segments to draw
        var lineSegments = 10;
        for (var i = 0; i < lineSegments; i++) {
            // Get the vector field direction at the current anchor point
            var vectorFieldDirection = lookUpVector(anchorVector.x, anchorVector.y);

            // Get the angle (theta) from the vector field
            var theta = vectorFieldDirection.heading();
            
            console.log(theta);

            // Calculate the new position (50 is the step size)
            var posX = (lineSegmentLength * cos(theta)) + anchorVector.x;
            var posY = (lineSegmentLength * sin(theta)) + anchorVector.y;

            // Draw the line from the anchor point to the new position
            line(anchorVector.x, anchorVector.y, posX, posY);

            // Update the anchor point for the next iteration
            anchorVector = createVector(posX, posY);
            lineSegmentLength = random(1, 10);
        }

        index++;
    }




}

/**
 * Draw grid of vectors represented as lines, which generates a flow field
 * Use a <= .01 increment to get smooth flow fields
*/
function drawVectorsUsingNoise() {
    // Iterate from top to bottom.
    for (let i = 0; i < rows; i++) {
        // Iterate from left to right.
        for (let j = 0; j < cols; j++) {

            push();
            stroke(0, 75);
            strokeWeight(1);
            var vec = flowField[i][j];
            translate(i * scl, j * scl);
            rotate(vec.heading());
            line(0, 0, scl, 0);

            strokeWeight(2);
            point(0, 0);

            stroke(200, 255);
            point(scl, 0);

            pop();
        }
    }
}

function lookUpVector(x, y) {
    var col = constrain(floor(x / scl), 0, cols - 1); // Constrains a number between a minimum and maximum value.
    var row = constrain(floor(y / scl), 0, rows - 1);
    return flowField[col][row].copy();
}
