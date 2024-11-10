let minLoops=240;

function setup(){
    createCanvas(512,512);
    frameRate(60);
    background(0);
}

function draw(){
    let x=width/2;
    let y=width/2;
    let d=width/4;
    let r=width/4;

    fill(
        178+177*sin((frameCount/minLoops)*TWO_PI),
        178+177*sin((frameCount/minLoops*2)*TWO_PI),
        178+177*sin((frameCount/minLoops*4)*TWO_PI)
    );

    circle(
        x+r*sin((TWO_PI * frameCount)/minLoops*4),
        y+r*sin((TWO_PI * frameCount)/minLoops*4),
        d 
    );
}