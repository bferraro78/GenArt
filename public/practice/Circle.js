function setup() {
    createCanvas(600, 600);
    background(200);
    stroke(255);
    strokeWeight(0);

    noLoop();
}


function draw() {
    beginShape();
    translate(height / 4, width / 4);
    fill('blue');
    let r = 100;
    for (let index = 0; index < PI * 2; index += 0.01) {
        r = 100
        let x = cos(index) * r;
        let y = sin(index) * r;
        vertex(x, y);
    }
    endShape();
}

