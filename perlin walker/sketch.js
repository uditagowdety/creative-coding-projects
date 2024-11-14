let w;

function setup() {
    createCanvas(512, 512);
    background(0); 
    w = new Walker();
}

function draw() {
    w.walk();
    w.display();
}

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.tx = 0;
        this.ty = 10000;
    }

    walk() {
        this.x = map(noise(this.tx), 0, 1, 0, width);
        this.y = map(noise(this.ty), 0, 1, 0, height);

        
        this.tx += 0.01;
        this.ty += 0.01;
    }

    display() {
        stroke(255);
        point(this.x, this.y);
    }
}
