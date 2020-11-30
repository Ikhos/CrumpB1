
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = createSprite(200, 450, 20, 20);
	paper.shapeColor = rgb(255, 0, 255);
	box1 = createSprite(700, 690, 100, 20);
	box1.shapeColor = rgb(255, 0, 255);
	box2 = createSprite(650, 660, 20, 50);
	box2.shapeColor = rgb(255, 0, 255);
	box3 = createSprite(750, 660, 20, 50);
	box3.shapeColor = rgb(255, 0, 255);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyWentDown(UP_ARROW)) {
	  paper.x = paper.x + 500;
	  paper.y = paper.y + 220;
  }

  drawSprites();
  paper.display();
}





