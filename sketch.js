const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var  myEngine, myWorld ;

var paper; 
var ground;
var wall1,wall2,wall3;

function setup() {
  createCanvas(800,200);

  myEngine=Engine.create();  //myEngine.world
  myWorld = myEngine.world;


  //Create new box objects using Box class
  paper= new Paper(50,100,40);
  
  wall1=new Dustbin(600,150 , 10 , 70);
  wall2=new Dustbin(500,150 , 10 , 70);
  wall3=new Dustbin(550,180 , 90 , 10);

  //Create a ground using Ground class
  ground= new Ground(400,190,800,10);
}

function draw() {
  background("cyan");

  Engine.update(myEngine);

  
  paper.display();

  wall1.display();
  wall2.display();
  wall3.display();

  fill("white");
  ground.displayGround();


}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.myBall , paper.myBall.position  , {x:56 , y:-56})
  }

}