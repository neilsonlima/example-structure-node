'use strict'

const a_json = require('./db/a')
const b_json = require('./db/b')

const controllerMkt = require('./src/controllers/mkt')

controllerMkt(a_json)
.then(result => console.log(result))

