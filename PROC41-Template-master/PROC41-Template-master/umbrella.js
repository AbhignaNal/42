class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true,
        }
        this.image1 = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x, y, 200, options);
        this.r = 50;
        World.add(world, this.umbrella);
    }
    display(){
        imageMode(CENTER);
        image(this.image1, this.umbrella.position.x, this.umbrella.position.y, 200, 200);
    }
}