const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var slingShot;
var backgroundImg;

var bg = "image/day.jpg";

function preload(){
  getBackground();
}

function setup() {

  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,250,200,20);
  ground2 = new Ground(700,350,200,20);

  //stand1.
  //floor1.
  block1 = new Block(320,200,20,50);
  block2 = new Block(340,200,20,50);
  block3 = new Block(360,200,20,50);
  block4 = new Block(380,200,20,50);
  block5 = new Block(400,200,20,50);
  block6 = new Block(420,200,20,50);
  block7 = new Block(440,200,20,50);
  block8 = new Block(460,200,20,50);
  block9 = new Block(480,200,20,50); 

  //floor2
  block10 = new Block(340,150,20,50);
  block11 = new Block(360,150,20,50);
  block12 = new Block(380,150,20,50);
  block13 = new Block(400,150,20,50);
  block14 = new Block(420,150,20,50);
  block15 = new Block(440,150,20,50);
  block16 = new Block(460,150,20,50);

  //floor3
  block17 = new Block(360,100,20,50);
  block18 = new Block(380,100,20,50);
  block19 = new Block(400,100,20,50);
  block20 = new Block(420,100,20,50);
  block21 = new Block(440,100,20,50);

  //floor4
  block22 = new Block(380,50,20,50);
  block23 = new Block(400,50,20,50);
  block24 = new Block(420,50,20,50);

  //floor5
  block25 = new Block(400,0,20,50);

  //stand2
  //floor1
  block26 = new Block(620,300,20,50);
  block27 = new Block(640,300,20,50);
  block28 = new Block(660,300,20,50);
  block29 = new Block(680,300,20,50);
  block30 = new Block(700,300,20,50);
  block31 = new Block(720,300,20,50);
  block32 = new Block(740,300,20,50);
  block33 = new Block(760,300,20,50);
  block34 = new Block(780,300,20,50);

  //floor2
  block35 = new Block(640,250,20,50);
  block36 = new Block(660,250,20,50);
  block37 = new Block(680,250,20,50);
  block38 = new Block(700,250,20,50);
  block39 = new Block(720,250,20,50);
  block40 = new Block(740,250,20,50);
  block41 = new Block(760,250,20,50);

  //floor3
  block42 = new Block(660,200,20,50);
  block43 = new Block(680,200,20,50);
  block44 = new Block(700,200,20,50);
  block45 = new Block(720,200,20,50);
  block46 = new Block(740,200,20,50);

  //floor4
  block47 = new Block(680,150,20,50);
  block48 = new Block(700,150,20,50);
  block49 = new Block(720,150,20,50);

  //floor5
  block50 = new Block(700,100,20,50);

  polygon = new Polygon(50,200,45,45);

  slingShot = new SlingShot(polygon.body,{x:150,y:200});
}

function draw() {
  if(backgroundImg)
    background(backgroundImg); 
  Engine.update(engine);
  strokeWeight(4);

  ground1.display();
  ground2.display();

  // stand1
  // floor1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  //floor2
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //floor3
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //floor4
  block22.display();
  block23.display();
  block24.display();

  //floor5
  block25.display();

  //stand2
  //floor1
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();

  //floor2
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();

  //floor3
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();

  //floor4
  block47.display();
  block48.display();
  block49.display();

  //floor5
  block50.display();

  slingShot.display();
  polygon.display();

  drawSprites();
  
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(polygon.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

async function getBackground(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();
console.log(responseJSON);
  var datetime = responseJSON.currentDateTime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);
  if(hour>=06 && hour<=19){
      bg = "image/night.jpg";
  }
  else{
      bg = "image/day.jpg";
  }

  backgroundImg = loadImage(bg);
}
