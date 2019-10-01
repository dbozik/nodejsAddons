const testAddon = require('./build/Release/testaddon.node');

// let start = 0;

// console.log('addon',testAddon.hello);

// start = process.hrtime();
// console.log('hello: ', testAddon.hello());
// console.log('time1: ', process.hrtime(start));

// start = process.hrtime();
// console.log('inner: ', sum());
// console.log('time1: ', process.hrtime(start));

console.time('c++');
const result1 = testAddon.sum();
console.timeEnd('c++');
console.log('result C++: ', result1);


console.time('js');
const result2 = sum();
console.timeEnd('js');
console.log('result js: ', result2);




module.exports = testAddon;

function sumPartial() {
    let pi = 3.1415926; 
    const e = 2.718;

    for (let i = 0; i < 1000000000; i++) {
        pi += e;
    }

    return pi;
}

function sum() {
    const result1 = sumPartial();
    const result2 = sumPartial();

    return result1 + result2;
}