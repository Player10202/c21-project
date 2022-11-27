var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_option={
    restitution:0.5
   }
if(keyDown(UP_ARROW)){
Force
}
  rightSide =new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
 var option={
  restitution:0.5
 }
 ball=Bodies.circle(100,200,20,option)
 World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Matter.Bodies.circle()
  drawSprites();
 
}

function force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.5})

}