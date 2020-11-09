class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.4,
            'length': 200
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.sling);
    }
     display(){
         fill("white");
        strokeWeight(5); 
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        
     }
}