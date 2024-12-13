
var increment = 0.01;
var start = 0;

function setup() {
    cnv = createCanvas(400, 400);
    pixelDensity(1);
}

function draw() {
    /**
     * Perlin noise values are created by adding layers of noise together.
     * The noise layers, called octaves, are similar to harmonics in music.
     * Lower octaves contribute more to the output signal
     * They define the overall intensity of the noise.
     * Higher octaves create finer-grained details.
     * 
     * Noise Detail - Controls the number of octives (points drawn on a graph and linerally interpolation together)
     * are added together to create the final perlin noise set
     * 
     * lod - number of octives added together
     * fallOff - Each higher octave contributes half as much (50% less - 0.5 is default value) compared to its predecessor
     * noiseDetail(lod, fallOff);
     * 
     * Ensures that noise() will use six octaves.
     * Each higher octave will contribute 25% as much (75% less) compared to its predecessor
     * noiseDetail(6, 0.25)
     */

    // noiseDetail(25, 0.5);

    drawVectorsUsingNoise();
}


/**
 * Iterates through a 2d (battleship like) grid of perlin noises.
 * Maps to 255 grayscale so each pixel relates to the one next to and above/below it on the 0-255 grayscale
*/
function drawVectorsUsingNoise() {
    /**
     * Colors are stored as numbers representing red, green, blue, and alpha (RGBA) values.
     * Pixels is a one-dimensional array for performance reasons.
     * Each pixel occupies four elements in the pixels array, one for each RGBA value
    */
    loadPixels();
    var yoff = 0;

    // Iterate from top to bottom.
    for (let y = 0; y < height; y++) {
        var xoff = start;
        // Iterate from left to right.
        for (let x = 0; x < width; x++) {
            var index = (x + y * width) * 4; // index in the pixel array

            var n = noise(xoff, yoff) * 255; // faster than using map() below 
            // var n = map(noise(xoff, yoff), 0, 1, 0 ,255);

            pixels[index + 0] = n; // red
            pixels[index + 1] = n; // blue
            pixels[index + 2] = n; // green
            pixels[index + 3] = 255; // alpha

            xoff += increment;
        }
        yoff += increment;
    }


    // Moves the place where we start within the 2d battleship grid of Perlin Noise  (the perlin noise space)
    start += increment;

    // Updates the canvas
    updatePixels();
}


