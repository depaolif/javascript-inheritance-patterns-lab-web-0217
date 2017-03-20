function Point(x,y) {
  this.x = x
  this.y = y
  this.toString = function() {
    return `(${this.x}, ${this.y})`
  }
}

function Shape() {
}
Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y)
}
Shape.prototype.move = function(x,y) {
  this.position.x = x
  this.position.y = y
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
  this.diameter = function() {
    return this.radius * 2
  }
  this.area = function() {
    return Math.PI * (Math.pow(this.radius,2))
  }
  this.circumference = function() {
    return 2 * Math.PI * this.radius
  }
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle

function Side(length) {
  this.length = length
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = arguments
  this.numberOfSides = function() {
    return this.sides[0].length
  }
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function() {
  return this.sides[0].reduce(function(acc,side) {
    return acc + side.length
  },0)
}

function Quadrilateral(length1,length2,length3,length4) {
  Polygon.call(this,[new Side(length1), new Side(length2), new Side(length3), new Side(length4)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width,height) {
  Quadrilateral.call(this,width,width,height,height)
  this.width = width
  this.height = height
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  Rectangle.call(this,length,length)
  this.listProperties = function() {
    for (var prop in this) {
      if(this.hasOwnProperty(prop)) {
        console.log("this." + prop + " = " + this[prop]);
      }
    }
  }
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

function Triangle(side1,side2,side3) {
  Polygon.call(this,[new Side(side1), new Side(side2), new Side(side3)])
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle
