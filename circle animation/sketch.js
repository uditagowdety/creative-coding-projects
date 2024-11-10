let minLoops=240;

function setup(){
    createCanvas(512,512);
    frameRate(60);
    background(255);
    // noStroke();
}

function draw(){
    let x=width/2;
    let y=width/2;
    let d=width/8;
    // let r=width/4;

    let r = (width / 4) * sin((frameCount / minLoops) * TWO_PI);

    fill(
        178+177*sin((frameCount/minLoops)*TWO_PI),
        178+177*sin((frameCount/minLoops*2)*TWO_PI),
        178+177*sin((frameCount/minLoops*4)*TWO_PI)
    );

    circle(
        x+r*sin((TWO_PI * frameCount)/minLoops*4),
        y+r*cos((TWO_PI * frameCount)/minLoops*4),
        d 
    );
}