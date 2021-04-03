class Tree{
    constructor(x,y,width,height){
      this.x=x;
      this.y=y;
      this.treeWidth=10;
      this.treeHeight=10;
      this.treeThickness=10;
      
      this.image=loadImage("images/tree.png")
      this.body=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true})
      World.add(world, this.body)

  }
  display(){
    var pos = this.body.position;
    push();
   // rectMode(CENTER);
   // rect(pos.x,pos.y,this.width,this.height);
    imageMode(CENTER);
   image(this.image,pos.x,pos.y,450,650);
    pop();
  }

}