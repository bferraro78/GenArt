// A new global variable tracking the starting angle of the wave
let startAngle = 0;
let deltaAngle = 0.2;

function setup() {
    createCanvas(640, 240);

    w = width / 2 + 16;
    // For complex waves:
    // Set up amplitude and period for each of the waves generated
    for (let i = 0; i < maxwaves; i++) {
        amplitude[i] = random(10, 30);
        let period = random(100, 300); // How many pixels before the wave repeats
        dx[i] = (TWO_PI / period) * xspacing;
    }

    yvalues = [];
}

function draw() {
    background(255);

    // Each time through draw(), the angle that increments is set to startAngle.
    let angle = startAngle;
    // singleWave(angle);
    // singlePerinNoiseWave(angle);
    startAngle += 0.01;


    complexWave();
}

function singleWave(angle) {
    for (let x = 0; x <= 40; x += 3) {
        // Produces random perlin noise y's instead of sine wave -1 - 1 values
        // let yWithNoise = map(noise(angle), -1, 1, 0, height); 
        let y = map(sin(angle), -1, 1, 100, height / 4);

        fill(127, 127);
        circle(x + 40, y, 10);

        angle += deltaAngle;
    }
}

function singlePerinNoiseWave(angle) {
    for (let x = 0; x <= width; x += 20) {
        // Produces random perlin noise y's instead of sine wave -1 - 1 values
        let yWithNoise = map(noise(angle), -1, 1, 0, height);

        fill(127, 127);
        circle(x, yWithNoise, 20);

        angle += deltaAngle;
    }
}

let xspacing = 2; // How far apart should each horizontal position be spaced
let w; // Width of entire wave
let maxwaves = 5; // total # of waves to add together

let theta = 0.0;
let amplitude = []; // Height of wave
let dx = []; // Value for incrementing X, to be calculated as a function of period and xspacing
let yvalues; // Using an array to store height values for the wave (not entirely necessary)

// Adding multiple waves together
function complexWave() {
    calcWave();
    renderWave();
}

function calcWave() {
    // Increment theta (try different values for 'angular velocity' here
    theta += 0.02;

    // Set all height values to zero
    for (let i = 0; i < w / xspacing; i++) {
        yvalues[i] = 0;
    }

    // Accumulate wave height values
    for (let j = 0; j < maxwaves; j++) {
        let x = theta;
        for (let i = 0; i < yvalues.length; i++) {
            // Every other wave is cosine instead of sine
            if (j % 2 === 0) {
                yvalues[i] += noise(x) * amplitude[j];
            }
            else {
                yvalues[i] += noise(x) * amplitude[j];
            }

            x += dx[j];
        }
    }
}

function renderWave() {
    // A simple way to draw the wave with an ellipse at each position
    stroke(0);
    fill(0, 100);
    ellipseMode(CENTER);
    for (let x = 0; x < yvalues.length; x++) {
        circle(x * xspacing + width / 4, height / 2 + yvalues[x], 8);
    }
}