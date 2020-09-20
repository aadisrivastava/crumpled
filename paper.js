class paperClass{
    constructor(x,y,radius) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1,
            isStatic:true

        }
       this.r=radius;
        this.body = Bodies.circle(x,y, radius, options);
       
        World.add(world, this.body);
      }
    
    display(){
      
     var position=this.body.position;
      push()
      translate(position.x,position.y);
      ellipseMode(RADIUS)
      
      strokeWeight(3);
      fill("pink");
      ellipse(0,0,30,30);

      pop();
    }
}