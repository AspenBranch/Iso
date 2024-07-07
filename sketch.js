var song;
var blocks=[];
var player;
var level=0;
var levelWidth=0;
var levelHeight=0;
var fps=120;
var scene=1;
var rotation1=Math.random(-Math.TAU,Math.TAU);
var rotation2=Math.random(-Math.TAU,Math.TAU);
var rotation3=Math.random(-Math.TAU,Math.TAU);
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
var font;
function setup() {
  createCanvas(windowWidth, windowHeight);
  song=loadSound('Creo-Reflections.mp3',ok);
  player=new Player(0,0);
  Load(blocks,worldMap[level]);
  font=loadFont('Poppins-Bold.ttf');
}
function ok(){
  song.play();
}
var BG=[154, 228, 255];
function draw() {
  frameRate(fps);
  background(BG[0],BG[1],BG[2]);
  switch(scene){
    case 1:
      Game();
    break;
    case 2:
      Ending();
    break;
  }
  BG[0]=lerp(BG[0],154,0.01);
  BG[1]=lerp(BG[1],228,0.01);
  BG[2]=lerp(BG[2],255,0.01);
  if(frameCount%120===0){
    BG[0]=225*0.9;
    BG[1]=164*0.9;
    BG[2]=245*0.9;
  }
  song.setLoop(true);
  
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    player.antiX+=50;
    player.antiY-=25;
  }
  if(keyCode===DOWN_ARROW){
    player.antiX-=50;
    player.antiY+=25;
  }
  if(keyCode===LEFT_ARROW){
    player.antiX-=50;
    player.antiY-=25;
  }
  if(keyCode===RIGHT_ARROW){
    player.antiX+=50;
    player.antiY+=25;
  }
  if(keyCode===82){
    player.antiX=player.respawn.x;
    player.antiY=player.respawn.y;
    player.yvel=0;
  }
  if(round(player.x)%50===0&&round(player.y)%25===0){
    player.preAntiX=player.x;
    player.preAntiY=player.y;
  }
}