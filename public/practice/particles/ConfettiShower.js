let emitter;

function setup() {
    createCanvas(640, 360);
    emitter = new Emitter(width / 2, height / 4);
}

function draw() {
    background(255);
    emitter.run();
}