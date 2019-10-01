const testAddon = require('./build/Release/testaddon.node');
const {Subject, forkJoin} = require('rxjs');
const {map} = require('rxjs/operators');

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
sum().subscribe(result2 => {
    console.timeEnd('js');
    console.log('result js: ', result2);
});

module.exports = testAddon;

function sumPartial() {
    let pi = 3.1415926;
    const e = 2.718;
    console.log('sum partial');

    let result = new Subject();

    setTimeout(() => {
        console.log('set timeout');
        
        for (let i = 0; i < 1000000000; i++) {
            pi += e;
        }
        console.log('result partial: ', pi);
        
        result.next(pi);
    });

    return result.asObservable();
}

function sum() {
    return forkJoin(sumPartial(), sumPartial()).pipe(
        map((result) => {
            console.log('forkjoin');
            console.log(result);
            
            
            return result[0] + result[1];
        })
    );
}