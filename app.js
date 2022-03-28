// const rect = require('./rectangle');

// function solveRect(l, w) {
//     console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

//     if(l <= 0 || w <= 0){
//         console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
//     } else {
//         console.log(`Area of rectangle: ${rect.area(l, w)}`);
//         console.log(`Permimeter of rectangle: ${rect.perimeter(l,w)}`);
//     }
// }

// solveRect(2,4);
// solveRect(3,5);
// solveRect(0,5);
// solveRect(5,-3);



// const rectangle = require('./rectangle');

import {rectangle}  from '..node-examples/rectangle';

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {

    if(err){
        console.log('ERROR:', err.message);
    } else {
        console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
        console.log(`Permimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
    }
    });
    console.log('This statement is logged after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
