

var bullet;
var wall;
var speed,weight,thickness;

function setup() {
  createCanvas(400,1600);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,15);
  bullet.shapeColor = (255,255,255);


  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

  function draw() {
  createCanvas(1600,400);
  background("black");  

 bullet.velocityX = speed;
 
if(hasCollided(bullet,wall))
{


  bullet.velocityX = 0;
  var deformation = 0.5 * weight *speed* speed/(thickness *thickness *thickness);

  
  if(deformation>10)
  {
    bullet.shapeColor = color (255,0,0);
  }

  if (deformation<10)
  {
    bullet.shapeColor = color (0,255,0);
  }

}
 drawSprites();
  }

  function hasCollided(lbullet, lwall)
  {

    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;

    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
    return false;
  }




