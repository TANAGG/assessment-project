const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground,ball,ground1;
var slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(500,600,1200,20);
  ground1 = new Ground(800,520,300,10);
  ball = new Ball(400,100,80);
  slingshot = new Slingshot(ball.body,{x:400,y:100})
  box1 = new Boxes(600,400,50,50);
  box2 = new Boxes(600,350,50,50);
  box3 = new Boxes(600,300,50,50);
  box4 = new Boxes(600,250,50,50);
  box5 = new Boxes(600,200,50,50);
  box6 = new Boxes(600,150,50,50);
  box7 = new Boxes(600,100,50,50);
  box8 = new Boxes(600,50,50,50);
  box9 = new Boxes(700,400,50,50);
  box10 = new Boxes(700,360,50,50);
  box11 = new Boxes(700,310,50,50);
  box12 = new Boxes(700,260,50,50);
  box13 = new Boxes(700,210,50,50);
  box14 = new Boxes(800,400,50,50);
  box15 = new Boxes(800,350,50,50);
  box16 = new Boxes(800,300,50,50);
  box17 = new Boxes(800,250,50,50);
  box18 = new Boxes(800,200,50,50);
}

function draw() {
  background("white");  
  drawSprites();
  Engine.update(engine);
  ground.display();
  
  ball.display();
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY})
}