'use strict';
console.log('employee.js');


class Employee {
    constructor(argName,argLastName, argHourlyPay) {
        this.firstName = argName;
        this.lastName = argLastName;
        this.hourlyPay = argHourlyPay;
        this.hoursWorked = 0;
    }
    work(howManyHours) {
        this.hoursWorked += howManyHours;
    }
    calcPay() {
        const pay = this.hoursWorked * this.hourlyPay;
        console.log(`${this.firstName} salary is ${pay}`);
        return pay;
    }

}

const em1 = new Employee('James', 'Bond', 10);
const em2 = new Employee('Hannah', 'smith', 15);
console.log('em1 ===', em1);
em2.work(10);
em2.work(100);
em1.work(10);
em1.work(50);
// em1.hoursWorked;
console.log('em1.hoursWorked; ===', em1.hoursWorked);
console.log('em2.hoursWorked; ===', em2.hoursWorked);

console.log('em1.calcPay() ===', em1.calcPay());
console.log('em2.calcPay() ===', em2.calcPay());
