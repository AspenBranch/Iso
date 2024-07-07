function Load(set,map){
    for(var i=0;i<map.length;i++){
        for(var j=0;j<map[i].length;j++){
            var id=map[i][j];
            switch(id){
                case 'B':
                    set.push(new Block(j*100-i*50,i*25,1));
                break;
                case 'X':
                    set.push(new Block(j*100-i*50,i*25,2));
                break;
                case 'x':
                    set.push(new Block(j*100-i*50,i*25,6));
                break;
                case 'O':
                    set.push(new Block(j*100-i*50,i*25,3));
                break;
                case 'T':
                    set.push(new Block(j*100-i*50,i*25,4));
                break;
                case 'P':
                    set.push(new Block(j*100-i*50,i*25,1));
                    player.respawn.x=j*100-i*50+50;
                    player.respawn.y=i*25+75;
                    player.preAntiX=j*100-i*50+50;
                    player.preAntiY=i*25+75;
                    player.antiX=j*100-i*50+50;
                    player.antiY=i*25+75;
                    player.x=j*100-i*50+50;
                    player.y=i*25+75;
                break;
                case 'S':
                    set.push(new Block(j*100-i*50,i*25,5));
                break;
            }
        }
    }
}
function Erase(set){
    set.length=0;
}