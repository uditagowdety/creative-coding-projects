var current;
var next;

var dA=1.0;
var dB=0.5;
var feed=0.055;
var kill=0.062;


function setup(){
    createCanvas(400,400);
    pixelDensity(1);
    current=[];
    next=[];
    for(var i=0;i<width;i++){
        current[i]=[];
        next[i]=[];
        for (var j=0;j<height;j++){
            current[i][j]={a:1,b:0};
            next[i][j]={a:1,b:0};
        }
    }

    for(var x=190;x<211;x++){
        for (var y=190;y<211;y++){
            current[x][y].b=1;
        }
    }

    // for(var x=195;x<206;x++){
    //     for (var y=195;y<206;y++){
    //         current[x][y].b=1;
    //     }
    // }
    
}

function draw(){
    background(51);
    loadPixels();

    for(var i=1;i<width-1;i++){
        for (var j=1;j<height-1;j++){
            var a=current[i][j].a;
            var b=current[i][j].b;

            next[i][j].a= a + (dA * lapA(i,j) - a*b*b + feed*(1-a));
            next[i][j].b= b + (dB * lapB(i,j) + a*b*b - (kill+feed)*b);

        }
    }

    for(var i=0;i<width;i++){
        for (var j=0;j<height;j++){
            // var c=color[255,10,140];
            var pix= (i+j*width)*4;
            pixels[pix+0]=floor(next[i][j].a*255);
            pixels[pix+1]=10;
            pixels[pix+2]=floor(next[i][j].b*255);
            pixels[pix+3]=255;
        }
    }

    updatePixels();

    swap();
}

function swap(){
    var temp=current;
    current=next;
    next=temp;

}

function lapA(i,j){
    var sum=0;

    sum+=current[i][j].a*-1; //center
    sum+=current[i+1][j].a*0.2; //adjacents
    sum+=current[i-1][j].a*0.2;
    sum+=current[i][j+1].a*0.2;
    sum+=current[i][j-1].a*0.2;
    sum+=current[i+1][j+1].a*0.05; //diagonals
    sum+=current[i+1][j-1].a*0.05;
    sum+=current[i-1][j+1].a*0.05;
    sum+=current[i-1][j-1].a*0.05;

    return sum;
}

function lapB(i,j){
    var sum=0;

    sum+=current[i][j].b*-1; //center
    sum+=current[i+1][j].b*0.2; //adjacents
    sum+=current[i-1][j].b*0.2;
    sum+=current[i][j+1].b*0.2;
    sum+=current[i][j-1].b*0.2;
    sum+=current[i+1][j+1].b*0.05; //diagonals
    sum+=current[i+1][j-1].b*0.05;
    sum+=current[i-1][j+1].b*0.05;
    sum+=current[i-1][j-1].b*0.05;

    return sum;
}














// for(var i=0;i<width;i++){
//     for (var j=0;j<height;j++){
//     }
// }