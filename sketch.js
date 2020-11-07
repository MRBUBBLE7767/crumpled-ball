var paperBall,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperBall = new paper(200,200,50);
	ground = new Ground(600,height,1200,20);
	box1 = new Box(540,200,20,100);	
	box2 = new Box(625,100,150,20);
	box3 = new Box(710,300,20,100);
	keyPressed()
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  paperBall.display();
  ground.display();
  box2.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:230,y:-200});
  }
} 