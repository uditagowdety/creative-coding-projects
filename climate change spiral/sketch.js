let data;
let months;
let zeroRadius=50;
let oneRadius=175;
let currentRow=0;

function preload(){
    data=loadTable("giss-data.csv","csv","header");
}

function setup(){
    createCanvas(650,650);
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
    circle(0,0,2*zeroRadius);
    fill(255);
    noStroke();
    text("0*",zeroRadius+10,0)

    noFill();
    stroke(255);
    strokeWeight(2);
    circle(0,0,2*oneRadius);
    fill(255);
    noStroke();
    text("1*",oneRadius+10,0)

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
        textSize(24);
        let angle=map(i,0,months.length,0,TWO_PI)-PI/3;
        push();
        let x=264*cos(angle);
        let y=264*sin(angle);
        translate(x,y);
        rotate(angle+PI/2);
        text(months[i],0,0);
        pop();
    }

    beginShape();
    noFill();
    stroke(255);

    for(let j=0;j<currentRow;j++){

        let row=data.getRow(j);
        let year=row.get("Year");
        // textAlign(CENTER, CENTER);
        // text(year,0,0);

        for (let i=0;i<months.length;i++){
            let anomaly=row.get(months[i]);
            if (anomaly!=undefined){
                let angle=map(i,0,months.length,0,TWO_PI)-PI/3;
                let r=map(anomaly,0,1,zeroRadius,oneRadius);
                let x=r*cos(angle);
                let y=r*sin(angle);
                vertex(x,y);
            }
        }
    }

    endShape();
    currentRow+=1;
    if(currentRow==data.getRowCount()){
        noLoop();
    }
    // noLoop();
}