class Ball{
    constructor(x,y,radius){
        var options = {         
        'isStatic': false,  
        'restituion' : 0.1,
        'friction': 1
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        push();
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x,pos.y,this.radius)
        pop();
    }
}