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

function sumPartial() {
    let pi = 3.1415926;
    const e = 2.718;
    console.log('sum partial');
    

    const result = new Promise((resolve, reject) => {
        console.log('in sum partial promise');
        
        for (let i = 0; i < 1000000000; i++) {
            pi += e;
        }

        resolve(pi);
    });

    return result;
}

function sum() {
    const result = new Promise((resolve, reject) => {
        Promise.all([sumPartial(), sumPartial()])
            .then((results) => resolve(results[0] + results[1]))
            .catch(error => console.log(error));
    });

    return result;
}