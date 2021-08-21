const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var cmp,cmp_base;
var player1,player_base;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   player_base = new playerbase(300, random(450, height - 300), 180, 150);
    player1 = new player(285, player_base.body.position.y - 153, 50, 180); 
    cmp_base = new computerbase( width - 300, random(450, height - 300), 180, 150 ); 
   cmp = new computer( width - 280, cmp_base.body.position.y - 153, 50, 180 );

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  player_base.display();
  cmp_base.display();

   //display Player and computerplayer
   player1.display();
   cmp.display();
}
