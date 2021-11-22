class Drops {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,5,options);
      this.width = 5;
      this.height = 5;
      World.add(world, this.body);
      Matter.Body.setVelocity(this.body,{
          x:0,
          y:20
      })
    }
    update(){
    if(this.body.position.y>800){
        Matter.Body.setPosition(this.body,{
            x:random(1,1200),
            y:0
        })
        Matter.Body.setVelocity(this.body,{
            x:0,
            y:7
        })
    }
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };
