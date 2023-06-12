"use strict"
/**
 * Class CarCl đại diện cho các phương tiện chạy bằng động cơ đốt trong (không phải xe điện).
Class EVCI kế thừa từ CarCl và đại diện cho các xe điện. Các phương thức accelerate và chargeBattery 
được liên kết để đồng thời tăng tốc độ và giảm mức sạc pin. Chú ý rằng thuộc tính #charge được đặt là 
private để tránh việc truy cập trực tiếp từ bên ngoài.
Phương thức brake của CarCl được cập nhật để thể hiện tốc độ giảm đồng thời với việc gọi phương thức. 
Điều này đảm bảo rằng việc phanh sẽ luôn được điều chỉnh theo tốc độ hiện tại, bất kể có sử dụng chaining hay không.
Chạy car1.accelerate().brake().chargeBattery(23) sẽ tạo ra một xe điện Rivian đang đi với tốc độ 140 km/h, 
với mức sạc pin là 23%.
 */

class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;
    }
  }
  
  class EVCI extends CarCl {
    #charge = 0;
  
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`Battery charged to ${this.#charge}%`);
      return this;
    }
  
    accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`
      );
      return this;
    }
  }
  
  const car1 = new EVCI('Rivian', 120);
  car1.chargeBattery(23).accelerate().brake();