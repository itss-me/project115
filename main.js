lipsX = 0;
lipsY = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/mrGtR5dN/png-clipart-lip-computer-icons-mouth-smile-lips-angle-people.png');
}

function setup(){

    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function draw(){ 
  image(video,0,0,300,300);  
  fill(255,0,0);
  stroke(255,0,0);
  circle(lipsX, lipsY, 20);
  image(clown_nose, lipsY, lipsX, 30,30);
}

function take_snapshot(){
    save('Filterr@.png')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("lips x = " + noseX);
        console.log("lips y = " + noseY);
    }
}



function draw() {

    image(video, 0, 0, 0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY,20);
}

