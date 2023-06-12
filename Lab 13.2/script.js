"use strict";
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  }
  
  const car1 = new CarCl('BMW', 120);
  const car2 = new CarCl('Mercedes', 95);
  
  console.log(car1.speedUS); //75
//   car1.speedUS = 60;
  console.log(car1.speed); //96
  
  car1.accelerate(); //BMW is going at 130 km/h
  car1.brake(); //BMW is going at 125 km/h
  
  car2.accelerate(); //Mercedes is going at 105 km/h
  car2.brake(); //Mercedes is going at 95 km/h


  /**
   * Đầu tiên, chúng ta đã sử dụng từ khóa class để định nghĩa một lớp mới là CarCl. 
   * Constructor của class này nhận hai đối số là make và speed, và tạo ra các thuộc tính tương ứng. 
   * Chúng ta đã định nghĩa getter speedUS để tính toán tốc độ hiện tại theo đơn vị mile/h, 
   * và setter speedUS để đặt giá trị tốc độ hiện tại theo đơn vị km/h. 
   * Sau đó chúng ta đã thêm hai phương thức để tăng và giảm tốc độ, 
   * và thử nghiệm các phương thức này với hai đối tượng car1 và car2.
   */