'use strict';
console.log('iife.js');



// imediatly inviked

const sum = (a,b) =>{
    const sum = a + b;
    console.log('sum ===', sum);
    return sum;
};

sum(2,5);

// IIFE
((n1,n2) => {
    const sum = n1 + n2;
    console.log('sum ===', sum);
    return sum;
}) (2,5);