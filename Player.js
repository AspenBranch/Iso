function Player(x,y){
    this.x=x;
    this.y=y;
    this.antiX=this.x;
    this.antiY=this.y;
    this.preAntiX=this.x;
    this.preAntiY=this.y;
    this.Sz=70;
    this.onBlock=false;
    this.respawn={
        x:this.x,
        y:this.y
    };
    var timer=0;
    this.hitPortal=false;
    this.update=function(blocks){
        this.x=lerp(this.x,this.antiX,0.3);
        this.y=lerp(this.y,this.antiY,0.3);
        this.onBlock=false;
        this.hitPortal=false;
        this.detectBlocks(blocks);
        if(!this.onBlock){
        this.antiX=this.preAntiX;
        this.antiY=this.preAntiY;
        } 
        if(dist(this.x,this.y,this.antiX,this.antiY)<1){
            this.x=this.antiX;
            this.y=this.antiY;
        }
        //console.log(this.x,this.y);
    };
    this.detectBlocks=function(blocks){
        for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            if(dist(this.x-50,this.y-70,b.x,b.y)<40){
                this.onBlock=true;//Good. Let's continue
                switch(b.type){
                    case 1:
                    break;
                    case 2:
                        if(dist(this.x-50,this.y-70,b.x,b.y)<30){
                            this.antiX=this.respawn.x;
                            this.antiY=this.respawn.y;
                        }
                    break;
                    case 3:
                        this.hitPortal=true;
                        timer=0;
                    break;
                    case 4:
                        timer++;
                        if(timer>60){
                            timer=0;
                            this.x=b.portalConnection.connectionX+50;
                            this.y=b.portalConnection.connectionY+75;
                            this.antiX=b.portalConnection.connectionX+50;
                            this.antiY=b.portalConnection.connectionY+75;
                        }
                    break;
                    case 5:
                        this.onBlock=false;
                    break;
                    case 6:
                        if(b.timerCount%2===0){
                            this.antiX=this.respawn.x;
                            this.antiY=this.respawn.y;
                        }
                    break;
                }
            }
        }
    };
    this.show=function(){
        strokeWeight(3);
        fill(25,35,48);
        stroke(255);
        strokeCap(SQUARE);
        beginShape();
            vertex(this.x-this.Sz/2-50,this.y-107);
            vertex(this.x-50,this.y+this.Sz/4-107);
            vertex(this.x+this.Sz/2-50,this.y-107);
            vertex(this.x-50,this.y-this.Sz/4-107);
        endShape(CLOSE);
        beginShape();
        vertex(this.x-this.Sz/2-50,this.y-107);
        vertex(this.x-50,this.y+this.Sz/4-107);
        vertex(this.x-50,this.y+this.Sz/4+this.Sz/2-107);
        vertex(this.x-this.Sz/2-50,this.y+this.Sz/2-107);
        endShape(CLOSE);
        beginShape();
        vertex(this.x-50,this.y+this.Sz/4+this.Sz/2-107);
        vertex(this.x+this.Sz/2-50,this.y+this.Sz/2-107);
        vertex(this.x+this.Sz/2-50,this.y-107);
        vertex(this.x-50,this.y+this.Sz/4-107);
        endShape(CLOSE);
        //ellipse(this.x-50,this.y-50,3,3);
    }
}