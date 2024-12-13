let h1, h, i, j, h2, s2, b2;
let mv = 50;
let colmv = 2;
let alph = 5;
let maxVary;

function setup() {
    cnv = createCanvas(600, 600);
    background(200);
    stroke(255);
    strokeWeight(0);

    noLoop();
}


function draw() {

    cnv = createGraphics(600, 600);
    ctx = cnv.canvas.getContext("2d");

    cnv.push();
    cnv.fill(50, random(0, 255), random(0, 255), 100);
    let translateX = height / 2;
    let translateY = width / 2;
    cnv.translate(translateX, translateY);
    cnv.rotate(random(PI * 2));


    cnv.beginShape();
    for (m = 0; m < PI * 2; m += 1) {
        r = random(50, 250);
        let vertX = cos(m) * r;
        let vertY = sin(m) * r;
        cnv.vertex(vertX, vertY);
    }
    cnv.endShape(CLOSE);
    cnv.pop();

    ctx.clip();

    paperTexture();
    cnv.filter(BLUR, 0.25);


    image(cnv, 0, 0);


}

function paperTexture() {
    cnv.noFill();
    let textureNum = cnv.width * cnv.height / 15;
    for (i = 0; i < textureNum; i++) {
        cnv.stroke(random(100, 150), random(100, 150), random(100, 150), 20);
        x = random(-cnv.width * 0.2, cnv.width * 1.2);
        y = random(-cnv.height * 0.2, cnv.height * 1.2);
        cnv.push();
        cnv.translate(x, y);
        cnv.strokeWeight(3);
        cnv.point(0, 0);
        cnv.strokeWeight(1);
        cnv.rotate(random(PI * 2));
        cnv.curve(random(60, 220), 0, 0, random(-50, 50), random(-50, 50), random(60, 120), random(60, 120), random(60, 220));
        cnv.pop();
    }

}



/* Creates the paper texture on the main canvas*/
function paperTextureCanvas() {
    noFill();
    textureNum = width * height / 50;
    for (i = 0; i < textureNum; i++) {
        stroke(random(100, 150), random(100, 150), random(100, 150), 20);
        x = random(-width * 0.2, width * 1.2);
        y = random(-height * 0.2, height * 1.2);
        push();
        translate(x, y);
        strokeWeight(3);
        point(0, 0);
        strokeWeight(1);
        rotate(random(PI * 2));
        curve(random(60, 220), 0, 0, random(-50, 50), random(-50, 50), random(60, 120), random(60, 120), random(60, 220));
        pop();
    }
}

