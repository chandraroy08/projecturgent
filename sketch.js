const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite =  Matter.Composite;
var engine, world;
var grounds;
var rope;
var ball;
var link;
var cutbtn;
var lvlGroup;

var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11;
var box12,box13,box14,box15;
var box16,box17,box18;
var box19,box20;
var box21;


function preload(){

}

function setup() {
  createCanvas(900,410);

  engine = Engine.create();
  world = engine.world;


  rope = new Rope(5,{x:100,y:100});
  grounds = new Ground(450,400,900,10);

  var options = {
    density:0.001
  }
  ball = Bodies.circle(200,200,20,options)
  Matter.Composite.add(rope.body,ball)
  link = new Link(rope,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //level 1
  box1 = createSprite(400,200,40,30);
  box1.shapeColor="green"
  box1.debug=true

  box2 = createSprite(380,240,40,30);
  box2.shapeColor="yellow"
  box3 =  createSprite(380,250,40,30);
  //box4 = createSprite (420,380,40,30);
  //box5 = createSprite(460,380,40,30);
  //box6 = createSprite(500,380,40,30);
  

  //level 2
  //box7 = createSprite (320,350,40,30);
  //box8 = createSprite (360,350,40,30);
  //box9 = createSprite (400,350,40,30);
  //box10 = createSprite (440,350,40,30);
  //box11 = createSprite (480,350,40,30);
 /* lvlGroup.add(box7)
  lvlGroup.add(box8)
  lvlGroup.add(box9)
  lvlGroup.add(box10)
  lvlGroup.add(box11)*/
 
//level 3
//box12 = createSprite (340,320,40,30);
//box13 = createSprite(380,320,40,30);
//box14 = createSprite(420,320,40,30);
//box15 = createSprite(460,320,40,30);
/*lvlGroup.add(box12)
lvlGroup.add(box13)
lvlGroup.add(box14)
lvlGroup.add(box15)*/


//level 4
//box16 = createSprite(360,290,40,30);
//box17 = createSprite(400,290,40,30);
//box18 = createSprite(440,290,40,30);




//level 5
//box19 = createSprite(380,260,40,30);
//box20 = createSprite(420,260,40,30);


//level 6

//box21 =createSprite(400,230,40,30);



cutbtn = createImg("cut_button.png");
cutbtn.position(80,75);
cutbtn.size(50,50);
cutbtn.mouseClicked(drop);
imageMode(CENTER)
}
function draw(){ 

  background("pink");
  Engine.update(engine);
 // drawSprites();
  ellipse(ball.position.x,ball.position.y,20,20);
  grounds.display();
  rope.show();
force()


  
  if(collide(ball,box1)==true)
  {
    box1.visible= false
  }

  drawSprites()
}
 


function drop(){
  rope.break()
  link.detach()
  link =  null
}

function force(){
 
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
 }


//function collision(){
//  var Collision = Matter.SAT.collides(ball,box1)
 // if(Collision.collided){
  //  ball1.visible = false


function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,ball);
              
               return true; 
            }
            else{
              return false;
            }
         }
}