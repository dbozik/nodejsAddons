const testAddon = require('./build/Release/testaddon.node');

console.log('addon',testAddon.hello);
console.log('hello: ', testAddon.hello());


module.exports = testAddon;