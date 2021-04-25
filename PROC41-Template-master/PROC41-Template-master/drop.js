class Drops{
    constructor(x, y, options){
        var options = {
            friction: 0.1,
        }
        this.drop = Bodies.circle(x, y, 5, options);
        this.r = 5;
        World.add(world, this.drop);
    }
    update(){
    if(this.drop.position.y > height){
        Matter.Body.setPosition(this.drop, {x: random(0, 400), y: random(400)})
    }
    }
    display(){
        fill(0, 0, 255);
        ellipseMode(CENTER);
        ellipse(this.drop.position.x, this.drop.position.y, this.r, this.r);
    }
}