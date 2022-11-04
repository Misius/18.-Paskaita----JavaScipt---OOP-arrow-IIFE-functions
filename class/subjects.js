'use strict';
console.log('subjects.js');

class Subject {
    constructor(argName,argMarks) {
        this.title = argName;
        this.marks = argMarks;
    }
    avg() {
        const avg = this.marks.reduce((avg,sk) => avg + sk, 0 )/ this.marks.length;
        return avg;
    };
}

const math1 = new Subject('Math',[5,6,7]);
console.log(' math1 ===',  math1);
console.log(' math1.avg() ===',  math1.avg());