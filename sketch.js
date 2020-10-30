var wall
var bullet, speed, weight

function setup(){
createCanvas(1600, 400 );
bullet=createSprite(50, 200, 50, 5)
bullet.shapeColor="green"
bullet.velocityX=50
wall=createSprite(1200, 200, 50, 50)
wall.shapeColor="red"
}
function draw(){
background("black")
bullet.bounceOff(wall)
drawSprites();
}
