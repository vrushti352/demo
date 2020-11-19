function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 200, 50, 50);
  r2=createSprite(300,400,70,70)
}

function draw() {
  background(255,255,255);  
  r1.x=mouseX
  r2.y=mouseY
demo(r1,r2)
drawSprites()




}
function demo(a,b){
  if(a.x-b.x<a.width/2+b.width/2&&
    b.x-a.x<a.width/2+b.width/2&&
    a.y-b.y<b.height/2+b.height/2&&
    b.y-a.y<a.height/2+b.height/2
    )
    {
      r1.shapeColor="red"
      r2.shapeColor="blue"
    }
    else{
      r1.shapeColor="white"
      r2.shapeColor="pink"
    }



}









  












 