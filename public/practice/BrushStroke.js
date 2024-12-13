
let theta = 10; // Start with 0 degrees

function setup() {
    cnv = createCanvas(2000, 2000);

    pg = createGraphics(500, 1000);
    pg.background(245, 245, 220);

    noLoop();
}


/* TODO - splatter effect can be made by:
 *    let xoff = 0; let defaultDistance = 100;
 *     var strokeLength = noise(xoff) * defaultDistance;
 *
 *      beginShape();
 *      noisyLineByCoordinates(startBounds+strokeLength, y+strokeLength, startBounds+strokeLength, y+strokeLength, 2, 0.0015);
 *      endShape();
 *      
 *      xoff += .030;
 */

function draw() {
    background(245, 245, 220);

    stroke(0);
    strokeWeight(.65);
    noFill();


    var numberOfLines = 100;

    let colors = [];
    let colorOffset = 10000;
    for (let i = 0; i < numberOfLines / .25; i++) {
        var colorNoise = noise(colorOffset) * 25; // 0-50 on greyscale 
        colors.push(colorNoise);
        colorOffset += 0.1;
    }


    // // noiseSeed(random(100));
    push();

    var startingX = 500; // starting X Point
    var startingY = 100;
    let defaultDistance = 200;


    // for (let i = 0; i < numberOfLines; i += 0.25) {
    //     stroke(colors[i * 4]); // *4 is due to .25*4 = 1

    //     beginShape();
    //     noisyLineByCoordinates(startingX-i,
    //         startingY + i,
    //         startingX + defaultDistance,
    //         startingY + i, 2, 0.025);
    //     endShape();
    // }

    let endOff = 0;
    let defaultDistanceEnd = 30;
    for (let i = 0; i < numberOfLines; i += 0.25) {
        stroke(colors[i * 4]);

        let nt = .015 * frameCount
        var strokeLengthEnd = noise(endOff) * defaultDistanceEnd;

        beginShape();
        noisyLineByCoordinates(startingX + defaultDistance,
            startingY + i,
            startingX + defaultDistance + strokeLengthEnd,
            startingY + i, 2, 0.015);
        endShape();

        endOff += .30 // shape of edges
    }

    let defaultDistanceStart = 150;
    let startOff = 5000;
    for (let i = 0; i < numberOfLines; i += .25) {
        stroke(colors[i * 4]);

        var strokeLengthStart = noise(startOff) * defaultDistanceStart;

        var x1start = startingX;
        var x2start = startingX - strokeLengthStart;
        var y1start = startingY + i;
        var y2start = startingY + i;

        var midX = (x1start + x2start) / 2;
        var midY = (y1start + y2start) / 2;

        let [x1_rot, y1_rot] = rotateAroundPoint(x1start, y1start, midX, midY, theta);
        let [x2_rot, y2_rot] = rotateAroundPoint(x2start, y2start, midX, midY, theta);

        beginShape();
        // noisyLineByCoordinates(startingX,
        //     startingY + i,
        //     startingX - strokeLengthStart,
        //     startingY + i, 2, 0.015);

        noisyLineByCoordinates(x1_rot,
            y1_rot,
            x2_rot,
            y2_rot, 5, 0.015);
        endShape();
        // line(x1_rot,
        //     y1_rot,
        //     x2_rot,
        //     y2_rot);

        startOff += .070; // shape of edges
    }

    pop();

    /* Draw the red line */
    let x1 = 100, y1 = 100;
    let x2 = 300, y2 = 200;
    var midX = (x1 + x2) / 2;
    var midY = (y1 + y2) / 2;

    // Rotate the endpoints around the midpoint
    let [x1_rot, y1_rot] = rotateAroundPoint(x1, y1, midX, midY, theta);
    let [x2_rot, y2_rot] = rotateAroundPoint(x2, y2, midX, midY, theta);

    // Draw original line in black
    stroke(0);
    line(x1, y1, x2, y2);
    fill(0);
    ellipse(x1, y1, 5, 5); // Original point 1
    ellipse(x2, y2, 5, 5); // Original point 2

    // Draw midpoint in blue
    fill(0, 0, 255);
    ellipse(midX, midY, 5, 5);

    // Draw rotated line in red
    stroke(255, 0, 0);
    line(x1_rot, y1_rot, x2_rot, y2_rot);
    fill(255, 0, 0);
    ellipse(x1_rot, y1_rot, 5, 5); // Rotated point 1
    ellipse(x2_rot, y2_rot, 5, 5); // Rotated point 2

}

function rotateAroundPoint(x, y, cx, cy, theta) {
    // Translate point to origin
    let dx = x - cx;
    let dy = y - cy;

    // Rotate point
    let thetaRad = radians(theta); // Convert angle to radians
    let cosTheta = cos(thetaRad);
    let sinTheta = sin(thetaRad);

    let x_rot = dx * cosTheta - dy * sinTheta;
    let y_rot = dx * sinTheta + dy * cosTheta;

    // Translate point back
    x_rot += cx;
    y_rot += cy;

    return [x_rot, y_rot];
}