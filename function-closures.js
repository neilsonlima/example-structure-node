'use strict'

const testController = require('./src/controllers/closures')

console.log(testController('index').index())
console.log(testController('update').update())
console.log(testController('create').create())
console.log(testController('destroy').destroy())


