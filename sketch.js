

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ground,brick1,brick2,brick3;
 var paperSprite;
function preload()
{

	
}

function setup() {
	createCanvas(1000, 700);
    //Create the Bodies Here.
	brick1=createSprite(600,540,200,20);

	brick2=createSprite(500,500,20,100);
	
	brick3=createSprite(700,500,20,100);
	groundSprite=createSprite(width/2, 560, width,10);
	groundSprite.shapeColor=color(255);
	
	engine = Engine.create();
	world = engine.world;
	
    paperSprite= new paperClass(40,520,30);

   Engine.run(engine);
      
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.display();
  Engine.update(engine);
 
  
  drawSprites();
 
}
function keyPressed(){
	
	if(keyCode===UP_ARROW){
	 
		Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:110,y:-110},	)
	
	  Matter.Body.setStatic(paperSprite.body,false);
	  }
	 if(keyCode===DOWN_ARROW){
		 Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:-110,y:+110})
	 Matter.Body.setStatic(paperSprite.body,false);
		}


	                
	}