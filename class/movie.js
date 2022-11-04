'use strict';
console.log('movie.js');


class Movie {
    constructor(name,year,director,budget,income) {
        this.name = name;
        this.year = year;
        this.director = director;
        this.budget = budget;
        this.income = income;   
    }
    getIntroduction () {
        return `Movie ${this.name}, ${this.year}, ${this.director},`;
    }
    getProfit() {
        const profit = this.income - this.budget;
        return `${profit}$ `;
    }
    getProfitTimes() {
        const times = this.income / this.budget;
        return times;
    }
}


const avatar = new Movie('Avatar', 2009, 'James Cameron', 237e6, 2.802e9);
console.log('avatar.getIntroduction() ===', avatar.getIntroduction());
console.log('avatar ===', avatar);
console.log('profit ===',avatar.getProfit(), 'profit is', avatar.getProfitTimes(), 'times the budget.');