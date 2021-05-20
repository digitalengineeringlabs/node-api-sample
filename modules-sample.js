// const process = require('process');
const _ = require('lodash');
const {items,sum} = require('./books');
// console.log("Hello" + process.env.TEST)
console.log(_.camelCase('Foo Bar'));
console.log(items)
console.log(sum(5,6));