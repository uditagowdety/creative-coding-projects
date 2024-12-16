let video;
let bodyPose;
let poses=[];
let connections;

function preload(){
  bodyPose=ml5.bodyPose("MoveNet",{flipped:true} );
}

function mousePressed(){
  console.log(poses);
}

function gotPoses(results){
  poses=results;
}

function setup(){
  createCanvas(640,480);
  video=createCapture(VIDEO,{flipped:true});
  video.hide();

  bodyPose.detectStart(video, gotPoses);
  connections=bodyPose.getSkeleton();
  console.log(connections);
}

function draw(){
  image(video,0,0);
  
  if(poses.length>0){
    let pose=poses[0];
    let poseX=pose.nose.x;
    let poseY=pose.nose.y;
    fill(255,0,0);
    circle(poseX,poseY,20);
    
    for(let i=0;i<pose.keypoints.length;i++){
      let keypoint=pose.keypoints[i];
      fill(0,0,255);
      circle(keypoint.x,keypoint.y,16);
    }
    
//     for(let i=0;i<connections.length;i++){
//       let connection=connections[i];
//       let a=connection[0];
//       let b=connection[1];
      
//       let keypointA=pose.keypoints[a];
//       let keypointB=pose.keypoints[b];
      
//       stroke(0,255,0);
//       strokeWeight(5);
      
//       line(keypointA.x,keypointA.y,keypointB.x,keypointB.y);
//     }
  }
}


