let cnv;
let cnvWH = 600;

let p0, p1;

function setup() {
    cnv = createCanvas(cnvWH, cnvWH);
    let newCanvasX = (windowWidth - cnvWH)/2;
    let newCanvasY = (windowHeight - cnvWH)/2;
    cnv.position(newCanvasX, newCanvasY);
    
    background(0);
    p0 = createVector(0, 300);
    p1 = createVector(600, 300);
    p2 = createVector(600, 300);
    // noLoop();
}

function draw() {
    stroke(255);
    strokeWeight(4);
    // line(p0.x, p0.y, p1.x, p1.y);

    let delta = 0.1;

    p1.x = mouseX;
    p1.y = mouseY;

    noFill();
    beginShape();
    for (let t = 0; t <= 1; t += delta) {
        // let x1 = lerp(p0.x, p1.x, t);
        // let y1 = lerp(p0.y, p1.y, t);
        // let x2 = lerp(p1.y, p2.y, t);
        // let y2 = lerp(p1.y, p2.y, t);
        // let x = lerp(x1, x2, t);
        // let y = lerp(y1, y2, t);

        let x = lerp(p0.x, p1.x, t);
        let y = lerp(p0.y, p1.y, t);

        vertex(x, y);
    }
    endShape();


  }
