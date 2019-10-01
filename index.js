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
testAddon.sum();
console.timeEnd('c++');

console.time('js');
sum();
console.timeEnd('js');





module.exports = testAddon;

function sum() {
    let pi = 3.1415926; 
    const e = 2.718;

    for (let i = 0; i < 1000000000; i++) {
        pi += e;
    }

    return pi;
}