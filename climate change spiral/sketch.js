let data;
let months;

function preload(){
    data=loadTable("giss-data.csv","csv","header");
}

function setup(){
    createCanvas(600,600);
    // console.log(data.getColumnCount());
    // console.log(data.getRowCount());

    let row=data.getRow(0);

    months=data.columns.slice(1,13);
    console.log(months);

    // console.log(row.get("Year"));
    // console.log(row.get("Jan"));
}

function draw(){
    background(20);
    translate(width/2,height/2);

    noFill();
    stroke(255);
    strokeWeight(2);
    circle(0,0,100);
    fill(255);
    noStroke();
    text("0*",54,0)

    noFill();
    stroke(255);
    strokeWeight(2);
    circle(0,0,300);
    fill(255);
    noStroke();
    text("1*",154,0)

    noFill();
    stroke(255);
    strokeWeight(2);
    circle(0,0,500);
    fill(255);
    noStroke();
    // text("1*",154,0)

    for(let i=0;i<months.length;i++){
        noStroke();
        fill(255);
        textAlign(CENTER);
        textSize(30);
        let angle=map(i,0,months.length,0,TWO_PI)-PI/3;
        push();
        let x=264*cos(angle);
        let y=264*sin(angle);
        translate(x,y);
        rotate(angle+PI/2);
        text(months[i],0,0);
        pop();
    }
}