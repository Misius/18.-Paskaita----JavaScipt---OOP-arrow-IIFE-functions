'use strict';
console.log('student.js');

class Student {
    // constructor vuksta sukuriant nau objekta su new
    constructor(argName, argYear,argHomeTown)  {
        console.log('hello');
        this.studList = document.createElement('studs');
        this.name = argName;
        this.year = argYear;
        this.town = argHomeTown;
        this.printStudent();
        this.courses = ['English'];
    }
    sayHi() {
        const helloString = `Sveiki aš esu ${this.name} iš ${this.town} ir esu ${this.year} kurse.`
        console.log(helloString);
        return helloString;
    }
    printStudent() {
        const liEl = document.createElement('li');
        liEl.textContent = this.sayHi();
        studsEl.append(liEl);
    }
    addCourse(subject) {
        this.courses.push(subject);
        console.log(subject,'was added to', this.name);
    }
    removeCourse(subject) {
        if (this.courses.includes(subject)) {
            this.courses = this.courses.filter((oneSubject) => oneSubject !== subject);
            console.log(`${subject} was removed from ${this.name}`);
        } else {
            console.log(`${this.name} does not have ${subject} subject.`);
        }
    }

}
// sukurti metoda addCourse() kuris prides viena kursa pries studento esamu

// st1.addCourse('Math');
const studsEl = document.getElementById('studs');
const st1 = new Student('James',5, 'Kaunas');
// st1.printStudent();
st1.sayHi();
st1.addCourse('Gymnastics');
st1.removeCourse('Math')
const st2 = new Student('Jane', 12, 'New york');
// st2.printStudent();
console.log(st1);
console.log(st2);
