var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() 
{
  createCanvas(1400,1000);



  speed = random(223,321);
  
  weight = random(30,52);
  
  bullet = createSprite(10,300,30,15); 
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);
 
}

function draw() 
{
  background(0); 
  
  damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if(damage < 10)
  {
    wall.shapeColor = "green";
  }
 
  
  if(damage > 10)
  {
    wall.shapeColor = "red";
  }

  
 


bullet.collide(wall);



  drawSprites();
}

function hasCollided()
{
  

}