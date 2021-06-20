class  Ball {
    constructor(x,y,radius){
        this.image = loadImage("polygon.png");
       var options = {
        'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius = radius*2
    }
    display(){
      
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angel)
        ellipseMode(CENTER)
        fill ("black")
       ellipse(0,0,this.radius,this.radius)
        pop ()
    }   
}