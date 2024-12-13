class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.acceleration = createVector();

        /*
        This example is also a nice excuse to revisit the Gaussian distributions from “A Normal Distribution of Random Numbers”.
        Instead of launching the particles in a purely random direction, which produces a fountain-like effect,
        the result will appear more smokelike if the initial velocity vectors cluster mostly around a mean value, with a lower probability of outlying velocities.
        */
        let vx = randomGaussian(0, 0.3);
        let vy = randomGaussian(-1, 0.3);
        this.velocity = createVector(vx, vy);

        // How many frames the particle lasts
        this.lifespan = 255;

        this.angle = 0;
        this.angleAcceleration = .01;

        // Stores the random circle confetti style objects to be created later in show() method
        this.shapeVerticesX = [];
        this.shapeVerticesY = [];
        for (let m = 0; m < PI * 2; m += .5) {
            let r = random(5, 10);
            let vertX = cos(m) * r;
            let vertY = sin(m) * r;
            this.shapeVerticesX.push(vertX);
            this.shapeVerticesY.push(vertY);
        }
    }

    run() {
        this.update();
        this.show();
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        this.angle += this.angleAcceleration;

        // This will rotate based on how far the object has fallen!
        //this.angle = map(this.position.y, 0, height, 0, TWO_PI * 2);

        this.lifespan -= 2.0;
    }

    show() {
        /* Circle particle one */
        circle(this.position.x + 100, this.position.y, 8);

        /* Random confetti style shape particle 2 */
        push();// Use push() to save the current state so the rotation of this shape doesn’t affect the rest of the world.
        beginShape();
        rectMode(CENTER);
        stroke(0, this.lifespan); // set alpha to lifespan
        fill(175);
        for (let index = 0; index < this.shapeVerticesX.length; index++) {
            vertex(this.shapeVerticesX[index], this.shapeVerticesY[index]);
        }

        // Apply movements - make sure to tranlsate before rotate
        translate(this.position.x, this.position.y); // Set the origin at the shape’s position.
        rotate(this.angle); // rotate shape by the angle

        endShape(CLOSE);
        pop(); // Use pop() to restore the previous state after rotation is complete.
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    isDead() {
        return this.lifespan < 0.0;
    }
}