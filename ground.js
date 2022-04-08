class Ground{
constructor(x,y,w,h){
var options = {
    isStatic:true
}
this.body = Bodies.rectangle(450,400,900,10,options);
this.w=900;
this.h=10;

World.add(world,this.body);
}

display(){
var pos = this.body.position
push()
rectMode(CENTER)
fill("black")
rect(pos.x,pos.y,900,10);
pop()
}

}