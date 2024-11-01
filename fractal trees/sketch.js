var angle=0;
var slider;

function setup() {
    createCanvas(400, 400);
    background(220);
    slider=createSlider(0,TWO_PI,PI/4,0.01);
}

function draw() {
    background(51);
    // var len =100;
    angle=slider.value();
    stroke(255);
    translate(200,height)
    // line(200,height, 200,height-len);
    branch(100)
}

function branch(len){
    line(0,0,0,-len);
    translate(0,-len);
    
    if (len>4){
        push();
        rotate(angle);
        branch(len*0.67)
        pop();
        push();
        rotate(-angle);
        branch(len*0.67);
        pop();
    }

    // line(0,0,0,-len*0.67);
}