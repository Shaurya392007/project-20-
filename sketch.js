var wall,thickness;
var speed,weight,bullet;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 80, 20);

  thickness = random(22,83);

  wall = createSprite(800,200,thickness,100);

  speed=random(223,331);
  bullet.velocityX = speed;

 

  weight = random(30,52);

  
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255, 0, 0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}

