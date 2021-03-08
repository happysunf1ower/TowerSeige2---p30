class Block
{
constructor(x, y, width, height) 
  {
    var options = 
    {
    restitution: 0.4,
    friction: 0.0,
    //isStatic:true
    
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibillity = 255;
    World.add(world, this.body); 

  }


display()
{
 
  var angle = this.body.angle;
  var pos = this.body.position;
  console.log(this.body.speed);
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, this.width, this.height);
  pop();

  if(this.body.speed < 3)
  {
    this.Visibillity = true;

  } else if (this.body.speed > 3) 
  {
    push();
    this.Visibillity = this.Visibillity - 5;
    tint (255, this.Visibillity);
    World.remove(World, this.body);
    pop();

   
    
  }
    
  
}


}