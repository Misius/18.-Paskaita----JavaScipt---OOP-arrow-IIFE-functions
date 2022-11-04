'use strict';
console.log('smartObj.js');


const student1 = {
    name: 'James',
    mathMarks: [8,9,10,5],
    year: 2,
    avg: function() {
        return this.mathMarks.reduce((total,sk,i,arr) => total + sk / arr.length, 0);
    },
    info: function() {
        console.log(`Student's name is ${this.name} hee is ${this.year} year student.`);
        console.log(`His math avarage is ${this.avg}`);
    },
    addMathMark: function(newMark) {
        // 
        if (typeof newMark !== 'number') return;
        this.mathMarks.push(newMark);
    },
}

const student1MathMarks = student1.avg();
student1.addMathMark(6);
console.log('student1MathMarks ===', student1MathMarks);
student1.info();