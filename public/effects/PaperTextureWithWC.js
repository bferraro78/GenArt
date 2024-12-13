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
    colorPicker = createColorPicker('#ed225d');
    colorPicker.position(5, height + 5);

    noLoop();
}


function draw() {
    col = colorPicker.color();
    let num = 5000;

    paperTexture2();

    fill(col.levels[0] + random(-25, 25), col.levels[1] + random(-25, 25), col.levels[2] + random(-25, 25), 6);

    let x = random(0, height);
    let y = random(0, height);
    for (i = 0; i < num; i++) {
        push();
        translate(x, y);
        x = random(0, height);
        y = random(0, height);
        rotate(random(PI * 2));

        // Draws curcles with random radius for every arc segement 
        beginShape();
        for (m = 0; m < PI * 2; m += 1) {
            r = random(20, 50);
            let vertX = cos(m) * r;
            let vertY = sin(m) * r;
            vertex(vertX, vertY);
        }

        endShape();
        pop();
    }

    fill(50, random(0, 255), random(0, 255), 6);
    for (i = 0; i < num / 2; i++) {
        push();
        translate(x, y);
        x = random(0, height);
        y = random(0, height);
        rotate(random(PI * 2));

        beginShape();
        for (m = 0; m < PI * 2; m += 1) {
            r = random(20, 50);
            let vertX = cos(m) * r;
            let vertY = sin(m) * r;
            vertex(vertX, vertY);
        }

        endShape();
        pop();
    }




}

function paperTexture2() {
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

