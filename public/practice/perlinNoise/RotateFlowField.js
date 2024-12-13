var scl = 10;
let cols, rows;
let field;

var zoff = 0; // time

function setup() {
    cnv = createCanvas(400, 400);
    this.resolution = 5;
    this.cols = width / this.resolution;
    this.rows = height / this.resolution;

    this.field = new Array(this.cols);
    for (let i = 0; i < this.cols; i++) {
        this.field[i] = new Array(this.rows);
    }

    noLoop();
}

function draw() {
    background(255);

    for (let i = 0; i < this.cols; i++) {
        for (let j = 0; j < this.rows; j++) {
            let x = i * width / this.cols;
            let y = j * height / this.rows;
            this.field[i][j] = createVector(width / 4 - x, height / 4 - y);
            this.field[i][j].rotate(PI / 4);

            var v = this.field[i][j];

            push();
            translate(i * scl, j * scl);
            rotate(v.heading());
            line(0, 0, 5, 0);

            pop();
        }
    }

}
