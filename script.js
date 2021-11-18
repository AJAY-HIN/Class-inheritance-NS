// declare class
class Shape{
    constructor(color){
      this.color= 'color';
    }
  
       drawShape(){
      console.log('Shape');
       }
    calculateArea(){
      console.log('Area');
       }
  }
      
  // export class using module.exports
    module.exports = Shape;
  //
  const Shape =require("./shape")

// declare class
class Circle extends Shape{
  super(radius){
    this.radius= radius;
  }

     calculateArea(){
    console.log('Area');
     }
  }
    
// export class using module.exports
  module.exports = Circle;