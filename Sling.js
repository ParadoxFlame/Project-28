class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 15
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body)
    {
        console.log("hey i am here")
        this.sling.bodyA = body;
    }

    fly() 
    {
        this.sling.bodyA = null

    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }
    
}