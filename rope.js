class Rope{
    constructor(body1, body2, offsetX, offsetY){
    
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX, y:this.offsetY} 
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
        
    }
    display(){
        var start = this.rope.bodyA.position
        var end = this.rope.bodyB.position
        strokeWeight(4)
        line(start.x, start.y, end.x + this.offsetX, end.y + this.offsetY)
    }
}