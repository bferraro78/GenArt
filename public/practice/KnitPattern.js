
var increment = .75;


function setup() {
    cnv = createCanvas(1000, 1000);
    noLoop();
}

function draw() {
    background(245, 245, 220);

    // knit();


    stroke(0);
    var startBounds = 200;
    var endBounds = startBounds * 2;
    var paintStrokeThreshold = 400;



    noFill();
    let xoff = 0;
    let colorOffset = 2000;
    let startOffSet = 10000;

    let defaultDistance = 300;

    strokeWeight(1);
    for (let y = startBounds; y < endBounds; y += 0.25) {

        noiseSeed(50); // comment for more watercolor effect
        var colorNoise = noise(colorOffset) * 50;
        stroke(colorNoise);
        colorOffset += 0.1;

        var distanceNoise = noise(xoff) * defaultDistance;
        // var r2 = noise(startOffSet) * startBounds; // add start bounds so it is alwasy goes in one direction
        // line(startBounds+r2 , y, r, y);

        beginShape();
        noiseSeed(random(100));
        noisyLine(startBounds, endBounds, y, distanceNoise, 5, 0.035);
        endShape();

        xoff += .02;
        // startOffSet += .01;
    }

}

function knit() {
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < width; x += increment) {
            stroke(0, 200);
            point(x, height / 2 + y);
            x += increment;

            stroke(255, 0, 0, 175);
            point(x, height / 2 + 0.5 + y);
        }
    }


}




