class Polygon {
    constructor(x, y, width,height){
      var options = {
        restitution:0.8,
        friction:1.0,
        density: 1.0,
        isStatic: false
    }
 
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width=width;
    this.height = height;
    World.add(world, this.body);
    this.image=loadImage("image/polygon.png");
}
display(){

    var pos=this.body.position;
    fill("green");
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
  }
}