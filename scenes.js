var x=0;
var y=0;
var antiX=0;
var antiY=0;
var rand1X=Math.random(-50,50);
var rand2X=Math.random(-50,50);
var Antirand1X=Math.random(-50,50);
var Antirand2X=Math.random(-50,50);
var rand1Y=Math.random(-50,50);
var rand2Y=Math.random(-50,50);
var Antirand1Y=Math.random(-50,50);
var Antirand2Y=Math.random(-50,50);
var cam={
  x:0,
  y:0
};
function Game(){
  background(BG[0],BG[1],BG[2]);
  push();
  translate(width/2,height/2);
  rotate(sin(rotation1));
  rotation1+=PI/180;
  fill(BG[0]*1.05,BG[1]*1.05,BG[2]*1.05);
  rect(-width/5,-height,2*width/5,height*3);
  pop();
  push();
  translate(width/2,height/2);
  rotate(sin(rotation2));
  rotation2+=PI/180;
  fill(BG[0]*1.1,BG[1]*1.1,BG[2]*1.1);
  rect(-width/10,-height,width/5,height*3);
  pop();
  push();
  translate(width/2,height/2);
  rotate(sin(rotation3));
  rotation3+=PI/180;
  fill(BG[0]*1.3,BG[1]*1.3,BG[2]*1.3);
  rect(-width/20,-height,width/10,height*3);
  pop();
  noStroke();
    push();
  translate(cam.x,cam.y);
  cam.x=lerp(cam.x,width/2-player.x,0.05);
  cam.y=lerp(cam.y,height/2-player.y,0.05);
  for(var i=0;i<blocks.length;i++){
    if(blocks[i].y-player.antiY<=-50){
      blocks[i].animate();
      blocks[i].detectBlocks(blocks);
      blocks[i].show();
    }
  }
  player.update(blocks);
  player.show();
  for(var i=0;i<blocks.length;i++){
    if(blocks[i].y-player.antiY>-50){
      blocks[i].animate();
      blocks[i].detectBlocks(blocks);
      blocks[i].show();
    }
  }
  for(var i=0;i<blocks.length;i++){
    var b=blocks[i];
    if(b.type===3){
      antiX=b.x;
      antiY=b.y;
    }
    if(b.type===4){
      noStroke();
      fill(94, 255, 135,100);
      beginShape();
      vertex(b.x-b.Sz/2,-height*2);
      vertex(b.x-b.Sz/2,b.y);
      vertex(b.x,b.y+b.Sz/4);
      vertex(b.x+b.Sz/2,b.y);
      vertex(b.x+b.Sz/2,-height*2);
      endShape(CLOSE);
    }
    if(b.type===5){
      noStroke();
      fill(255, 226, 72,100);
      beginShape();
      vertex(b.x-b.Sz/2,-height*2);
      vertex(b.x-b.Sz/2,b.y);
      vertex(b.x,b.y+b.Sz/4);
      vertex(b.x+b.Sz/2,b.y);
      vertex(b.x+b.Sz/2,-height*2);
      endShape(CLOSE);
    }
  }
  noStroke();
  fill(131, 255, 137);
  ellipse(x,y-25,50,50);
  x=lerp(x,antiX,0.05);
  y=lerp(y,antiY,0.05)
  pop();
  for(var i=0;i<worldMap[level].length;i++){
      levelWidth=worldMap[level][i].length;
  }
  levelHeight=worldMap[level].length;
  if(player.hitPortal){
    Erase(blocks);
    level++;
    Load(blocks,worldMap[level]);
  }
  if(level>14){
    scene=2;
  }
}
function Ending(){
  background(BG[0],BG[1],BG[2]);
  noStroke();
  push();
  translate(width/2,height/2);
  rotate(sin(rotation1));
  rotation1+=PI/180;
  fill(BG[0]*1.05,BG[1]*1.05,BG[2]*1.05);
  rect(-width/5,-height,2*width/5,height*3);
  pop();
  push();
  translate(width/2,height/2);
  rotate(sin(rotation2));
  rotation2+=PI/180;
  fill(BG[0]*1.1,BG[1]*1.1,BG[2]*1.1);
  rect(-width/10,-height,width/5,height*3);
  pop();
  push();
  translate(width/2,height/2);
  rotate(sin(rotation3));
  rotation3+=PI/180;
  fill(BG[0]*1.3,BG[1]*1.3,BG[2]*1.3);
  rect(-width/20,-height,width/10,height*3);
  pop();
  textAlign(CENTER,CENTER);
  textFont(font,50);
  fill(0,50);
  text("ISO",width/2+rand1X,height/2-50+rand1Y);
  text("By AspenBranch",width/2+rand1X,height/2+rand1Y);
  text("Please Reload to play again", width/2+rand1X,height/2+50+rand1Y);
  fill(0,100);
  text("ISO",width/2+rand2X,height/2-50+rand2Y);
  text("By AspenBranch",width/2+rand2X,height/2+rand2Y);
  text("Please Reload to play again", width/2+rand2X,height/2+50+rand2Y);
  fill(0);
  text("ISO",width/2,height/2-50);
  text("By AspenBranch",width/2,height/2);
  text("Please Reload to play again", width/2,height/2+50);
  rand1X=lerp(rand1X,Antirand1X,0.05);
  rand2X=lerp(rand2X,Antirand2X,0.05);
  rand1Y=lerp(rand1Y,Antirand1Y,0.05);
  rand2Y=lerp(rand2Y,Antirand2Y,0.05);
  if(frameCount%30===0){
    Antirand1X=random(-50,50);
    Antirand2X=random(-50,50);
    Antirand1Y=random(-50,50);
    Antirand2Y=random(-50,50);
  }
}
