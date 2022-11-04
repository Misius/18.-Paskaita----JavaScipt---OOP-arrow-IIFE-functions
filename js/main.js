'use strict';
console.log('main.js');



// const st1 = new Student('James',2,'London');
// console.log('st1 ===', st1);
// const math1 = new Subject('Math',[5,6,7]);
// st1.addCourse(math1);

// console.log('st1.courses[1].avg() ===', st1.courses[1].avg());
// console.log(' math1 ===',  math1);
// console.log(' math1.avg() ===',  math1.avg());
console.log('123456789');
const studentsArr = [
    new Student('James', 2, 'Lodon'),
    new Student('Jane', 1, 'Lodon'),
    new Student('Mike', 3, 'California'),
    new Student('Serbentautas', 1, 'Zapyskio'),
  ];
console.log('studentsArr ===', studentsArr);

console.log('studentsArr ===', studentsArr);
let sub1 = new Subject('Math',[5,6,7]);
studentsArr[0].addCourse(sub1);
sub1 = new Subject('Math',[8,6,7]);
studentsArr[1].addCourse(sub1);
sub1 = new Subject('Math',[5,6,9]);
studentsArr[2].addCourse(sub1);
sub1 = new Subject('Math',[9,10,9]);
studentsArr[3].addCourse(sub1);

const student1MathMarks = studentsArr.map((st) => {
    console.log(st.courses[0].avg());
    return st.getMathMarks();
})

console.log('student1MathMarks ===', student1MathMarks);

