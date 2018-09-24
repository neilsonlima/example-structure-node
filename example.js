'use strict'

const exampleController = require('./src/controllers/example')

Promise.all([
    exampleController('index').index(),
    exampleController('update').update(),
    exampleController('create').create(),
    exampleController('destroy').destroy()
])
.then(result => { console.log(result)})
