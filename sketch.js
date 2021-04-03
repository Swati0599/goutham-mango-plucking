const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var engine,world;
var ground;
var tree;
var boy;
var stone;
var chain;
var mango1,mango2,mango3,mango4,mango5;


function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
  tree = new Tree (1050,300,10,10);
	
	boy = new Boy(200,510,200,300);

	stone = new Stone(140,440,30);

  mango1 = new Mango(1100,100,30);
   
	mango2 = new Mango(1170,130,30);

	mango3 = new Mango(1010,140,30);

	mango4 = new Mango(1000,70,30);

	mango5 = new Mango(1100,70,30);



  ground = new Ground(width/2,600,width,20); 

  chain = new SlingShot(stone.body,{x:140,y:440});

  var render = Render.create({
    element :  document.body,
    engine : engine,
    options : {
      width:1500,
      height :800,
      wireframes : false
    }
  })


	Engine.run(engine);
  Render.run(render);
}


function draw() {
  Engine.update(engine);
  background(200);
  boy.display();
  tree.display();
  stone.display();
  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  stone.display();
  ground.display();
  

  
  
  
 
  

  chain.display();

 
  //detectCollision();
    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);

}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
} 

function mouseReleased(){
    chain.fly();
  // Matter.Body.applyForce(stone.body,stone.body.position,{x:50,y:60});
} 

function detectCollision(Lstone,Lmango){
    mangoBodyPosition = Lmango.body.position;
    stoneBodyPosition  = Lstone.body.position;
    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance <= Lmango.r+Lstone.r){
      Matter.Body.setStatic(Lmango.body,false);
    }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x : 125,y:620});
    chain.attach(stone.body);
  }
}



    