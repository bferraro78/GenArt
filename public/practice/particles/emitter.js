class Emitter {
    constructor(x, y) {
        this.origin = createVector(x, y);
        this.gravity = createVector(0, 0.001);
        this.particles = [];
    }

    addParticle() {
        this.particles.push(new Particle(this.origin.x, this.origin.y));
    }

    run() {
        this.addParticle();

        for (let i = this.particles.length - 1; i >= 0; i--) {
            let particle = this.particles[i];
            particle.run();
            particle.applyForce(this.gravity);

            if (particle.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    }
}