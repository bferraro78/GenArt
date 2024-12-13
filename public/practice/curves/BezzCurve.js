let cnv;
let cnvWH = 600;

let p0, p1, p2;

function setup() {
    cnv = createCanvas(cnvWH, cnvWH);
    let newCanvasX = (windowWidth - cnvWH) / 2;
    let newCanvasY = (windowHeight - cnvWH) / 2;
    cnv.position(newCanvasX, newCanvasY);

    p0 = createVector(0, 300);
    p1 = createVector(300, 150); // control
    p2 = createVector(600, 300);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);

    let delta = 0.03;

    p1.x = mouseX;
    p1.y = mouseY;

    noFill();
    beginShape();
    for (let t = 0; t <= 1.001; t += delta) {
        let quad = quadratic(p0, p1, p2, t);

        vertex(quad.x, quad.y);
    }
    endShape();

}

function quadratic(p0, p1, p2, t) {
    let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t);
    let y2 = lerp(p1.y, p2.y, t);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);

    vertex(x1, y1, x2, y2); // draws extra lines
    return createVector(x, y);
}
