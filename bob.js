class Bob{
    constructor(x,y){
        var options = {
            'density':0.1,
            'retitution':1,
            'friction':0
        }
        this.body = Bodies.circle(x, y, 40, options)
        this.radius = 40;   
        World.add(world, this.body)       
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        fill("pink")
        ellipseMode(CENTER)
        ellipse(0, 0, 80)
        pop();
    }
}
