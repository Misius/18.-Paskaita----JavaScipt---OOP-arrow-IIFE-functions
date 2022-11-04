'use strict';
console.log('arrowVsFunction.js');



// arrow ir kitu funkciju skirtumas

console.log('this global ===', this);

// declaration - hoisted

function sum(a,b) {
    console.log('this declaration ===', this);
    return a + b;
}
// expression - not hoisted - turim pirma aprasyt tada naudot
const sumE = function(a,b) {
    console.log('this expression ===', this);
    return a + b;
}
// arrow - not hoisted - THIS - nekuria this konteksto
const sumA = (a,b) => {
    console.log('this arrow ===', this);
    return a + b;
}
// arrow oneline
const sumO = (a,b) => a + b;


const fn = {
    num1: 5,
    num2: 10,
    sumE: function(a,b) {
        console.log('this expression ===', this);
        return a + b;
    },
    sumA: (a,b) => {
        console.log('this arrow ===', this);
        return a + b;
    },
    resultE: function() {
        const sum = this.num1 + this.num2;
        console.log('sum ===', sum);
        return sum;
    },
    resultA: function() {
        const sum = this.num1 + this.num2;
        console.log('sum ===', sum);
        return sum;
    },
};


fn.sumA();
fn.sumE();

fn.sumE(fn.num1,fn.num2);