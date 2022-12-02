var wave;
var playing = false;
var button;



function setup() {
  
  createCanvas(displayWidth,displayHeight);
  r= random(50,255);
  g= random(0,200);
  b= random(50,255);
  

}

function draw() {
  background(r,g,b);
  console.log('draw');
}

function deviceMoved(){
  
  r=map(accelerationX, -90,90,100,175);
  g=map(accelerationX, -90,90,100,175);
  b=map(accelerationX, -90,90,100,175);
}




