"use strict";
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h`);
  }
  
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} slowed down to ${this.speed} km/h`);
  }
  
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  car1.accelerate(); // BMW accelerated to 130 km/h
  car1.accelerate(); // BMW accelerated to 140 km/h
  car2.brake();      // Mercedes slowed down to 90 km/h
  /**
   * Trong đó, ta sử dụng hàm tạo để khởi tạo đối tượng 'Car' với các thuộc tính 'make' và 'speed'. 
   * Ta cũng sử dụng prototype để triển khai các phương thức 'accelerate' và 'brake' của đối tượng 'Car'. 
   * Cuối cùng, ta tạo hai đối tượng 'car1' và 'car2' và thử nghiệm với các phương thức 'accelerate' và 'brake'.
   */