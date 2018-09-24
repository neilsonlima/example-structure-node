'use strict'

const exampleController = require('./src/controllers/example')

console.log(exampleController('index').index())
console.log(exampleController('update').update())
console.log(exampleController('create').create())
console.log(exampleController('destroy').destroy())


