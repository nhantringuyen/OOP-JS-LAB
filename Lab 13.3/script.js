// Định nghĩa lớp Car
const Car = function(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  
  // Phương thức tăng tốc độ
  Car.prototype.accelerate = function() {
    this.speed += 20;
    console.log(`${this.brand} going at ${this.speed} km/h`);
  }
  
  // Phương thức giảm tốc độ
  Car.prototype.brake = function() {
    this.speed -= 20;
    console.log(`${this.brand} going at ${this.speed} km/h`);
  }
  
  // Định nghĩa lớp EV (Ô tô điện)
  const EV = function(brand, speed, charge) {
    // Gọi hàm tạo của lớp cha 'Car'
    Car.call(this, brand, speed);
    this.charge = charge;
  }
  
  // Kế thừa các phương thức của lớp Car
  EV.prototype = Object.create(Car.prototype);
  
  // Định nghĩa phương thức sạc pin
  EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.brand} charged to ${this.charge}%`);
  };
  
  // Ghi đè phương thức 'accelerate' để bao gồm cả việc giảm mức pin
  EV.prototype.accelerate = function() {
    if (this.charge > 0) {
      this.speed += 20;
      this.charge -= 1;
      console.log(`${this.brand} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    } else {
      console.log(`${this.brand} can't accelerate, out of charge`);
    }
  }
  
  // Tạo một đối tượng ô tô điện (EV)
  const tesla = new EV('Tesla', 120, 23);
  
  // Tăng tốc độ và giảm mức pin
  tesla.accelerate();
  
  // Sạc pin lên đến 90%
  tesla.chargeBattery(90);