var ball;
var groundObject;
var leftSide,rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);

	engine = Engine.create();
	world = engine.world;
   
	var ball_options={
    isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}
	//Create the Bodies Here.

    ball=Bodies.circle (250,500,50,ball_options);
	World.add(world,ball);

	groundObj=new ground(width/2,670,width,20);
    leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1500,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,50,50)
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-100})
	}
}

