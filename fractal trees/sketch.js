let slider;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
    slider.position(width*1.45, height/2);
    slider.parent(document.querySelector('.intro'));
}

function draw() {
    background(51);
    let angle = slider.value();
    stroke(255);
    translate(200, height);
    branch(100, angle);
}

function branch(len, angle) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67, angle);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67, angle);
        pop();
    }
}
