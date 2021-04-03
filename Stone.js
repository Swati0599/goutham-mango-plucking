class Stone{
    constructor(x,y,radius){
    var options={
      density:3,
      isStatic:false,
      friction:1,
      restitution:0
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("Images/stone.png");
    this.body = Bodies.circle(x,y,radius,options);
    
  //  this.height = height;
    World.add(world,this.body);

  }
  display(){

    var pos = this.body.position;
   // pos.x = mouseX;
  //  pos.y = mouseY;
    push();
    translate(pos.x,pos.y);
    //rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image,0,0,this.radius,this.radius);
    pop();
  }

}