function setup() {
    createCanvas(600, 600);
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

    fill(col.levels[0] + random(-25, 25), col.levels[1] + random(-25, 25), col.levels[2] + random(-25, 25), 6);

    let x = random(0, height);
    let y = random(0, height);
    for (i = 0; i < num; i++) {
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

    fill(50, random(0, 255), random(0, 255), 6);
    for (i = 0; i < num/2; i++) {
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

