
// Tanishq
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2,height-10, width, 20)
 paper = new Paper(50,500,50)
bb= new Box(600, 670, 200,20)
bl = new Box (490,580,20,200)
br = new Box (690,580,20,200)
Engine.run(engine);
  
}


function draw() {
  background("white");
  
ground.display() 
paper.display()
bb.display();
bl.display();
br.display()
imageMode(CENTER)
image(bg, 590,580,200,200)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:50,y:-150})
		
	}
}

