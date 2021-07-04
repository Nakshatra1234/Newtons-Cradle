class Rope{
    constructor(bodya,bodyb,xoffset,yoffset){
        var options ={
            bodyA:bodya,
            bodyB:bodyb,
            pointB:{x:xoffset,y:yoffset}
            
          };
          this.xoffset = xoffset
          this.yoffset = yoffset
         this.rope = Matter.Constraint.create(options);
         World.add(world,this.rope);
    }
    display(){
        fill ("red");
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.xoffset,this.rope.bodyB.position.y+this.yoffset);
    }
}