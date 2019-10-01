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
sum().then(result2 => {
    console.timeEnd('js');
    console.log('result js: ', result2);
}).catch(error => console.log(error));

module.exports = testAddon;

async function sumPartial() {
    let pi = 3.1415926;
    const e = 2.718;
    console.log('sum partial');


    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        pi += e;
    }
    result = await pi;

    return result;
}

async function sum() {
    let result = 0;

    result = await sumPartial() + sumPartial();

    return result;
}