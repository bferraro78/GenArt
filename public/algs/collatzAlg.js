// Daniel Shiffman
// https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
// https://youtu.be/EYLWxwo1Ed8
// https://editor.p5js.org/codingtrain/sketches/XjLDE7gu6

function setup() {
    createCanvas(800, 600);
    background(0);
    for (let i = 1; i < 5000; i++) {
        let sequence = [];
        let n = i;
        do {
            if (sequence.length <= 5024) {
                sequence.push(n);
                n = collatz(n);
            }
            else {
                break;
            }
        } while (n != 1);
        sequence.push(1);
        sequence.reverse();

        let len = 5;
        let angle = 0.15;
        resetMatrix();
        translate(width / 2, height);
        for (let j = 0; j < sequence.length; j++) {
            let value = sequence[j];
            if (value % 2 == 0) {
                rotate(angle);
            } else {
                rotate(-angle);
            }
            strokeWeight(2);
            stroke(255, 10);
            line(0, 0, 0, -len);
            translate(0, -len);
        }
    }
}




function collatz(n) {
    // even
    if (n % 2 == 0) {
        return Math.round(n / 2);
        // odd
    } else {
        return Math.round((n * 3 + 1) / 3);
    }
}
