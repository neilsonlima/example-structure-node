'use strict'

const mktModel = require('../../models/mkt')

const exampleController = (name) => {

    return {
        index: function() {
            return mktModel(name).all()
        },
        create: function() {
            return mktModel(name).create()
        },
        update: function() {
            return mktModel(name).update()
        },
        destroy: function() {
            return mktModel(name).destroy()
        }
    }
}

module.exports = exampleController