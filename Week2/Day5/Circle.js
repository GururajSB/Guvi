class Circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
        // this.ratings = ratings;
        this.area=function(){
            return ((Math.PI)*this.radius*this.radius)
        }
    }
}

  var shape=new Circle(5,"red");
  console.log(shape.radius);
  console.log(shape.color);
  console.log(shape.area()+" Sq.Units.");
  